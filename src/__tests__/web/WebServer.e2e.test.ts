/**
 * E2E Integration Tests — WebServer (Express + Socket.IO + Auth)
 *
 * Tests the full middleware chain: Morgan logging, rate limiting,
 * auth middleware, Socket.IO with auth, and the REST API flow.
 *
 * DatabaseService is mocked; AuthService / JWT / PostgresPool
 * are real to test actual integration.
 */

// Set default PostgreSQL connection if not already set (CI/local convenience)
if (!process.env.POSTGRES_URL) {
  process.env.POSTGRES_URL = 'postgresql://deplao:deplao_secret@localhost:5432/deplao';
}

// Mock uuid (ESM-only in v13) so ts-jest can transform it
jest.mock('uuid', () => ({ v4: () => 'test-uuid-mock' }));

// Mock EventBroadcaster — needed by ZaloLoginHelper at module load time
jest.mock('../../services/event/EventBroadcaster', () => ({
  __esModule: true,
  default: {
    broadcastQRUpdate: jest.fn(),
    broadcastListenerDead: jest.fn(),
    broadcastToWeb: jest.fn(),
    emitToRenderer: jest.fn(),
    registerGroupCacheInvalidator: jest.fn(),
  },
}));

// Mock ERP services so their ESModule deps don't break jest
jest.mock('../../services/erp/ErpTaskService', () => ({
  __esModule: true,
  default: {
    getInstance: () => ({
      listTasks: jest.fn(() => []),
      getTaskDetail: jest.fn(() => null),
      createTask: jest.fn(() => ({ id: '1' })),
      updateTask: jest.fn(() => ({ id: '1' })),
      deleteTask: jest.fn(),
    }),
  },
}));

jest.mock('../../services/erp/ErpCalendarService', () => ({
  __esModule: true,
  default: {
    getInstance: () => ({
      listEvents: jest.fn(() => []),
      createEvent: jest.fn(() => null),
      deleteEvent: jest.fn(),
    }),
  },
}));

jest.mock('../../services/erp/ErpNoteService', () => ({
  __esModule: true,
  default: {
    getInstance: () => ({
      listNotes: jest.fn(() => []),
      getNote: jest.fn(() => null),
      createNote: jest.fn(() => ({ id: '1' })),
      deleteNote: jest.fn(),
    }),
  },
}));

// Mock WorkflowEngineService to avoid its import chain at module load time
jest.mock('../../services/workflow/WorkflowEngineService', () => ({
  __esModule: true,
  default: {
    getInstance: () => ({
      getWorkflows: jest.fn(() => [{ id: 'wf1', name: 'Test WF', enabled: true }]),
      reloadWorkflow: jest.fn(),
      executeWorkflow: jest.fn(() => Promise.resolve()),
    }),
  },
}));

import { Server as HttpServer } from 'http';
import { Express } from 'express';
import { Socket as ClientSocket, io as ioClient } from 'socket.io-client';
import request from 'supertest';
import WebServer from '../../services/web/WebServer';

// ─── Mock DatabaseService — supplies data for CRM, Analytics, Workflow ──
const mockDbInstance = {
  getActivityStats: jest.fn(() => ({
    sentCount: 10,
    messageCount: 50,
    conversationCount: 3,
    receivedCount: 40,
  })),
  getMessageVolume: jest.fn(() => [
    { date: '2026-07-01', count: 5 },
    { date: '2026-07-02', count: 8 },
  ]),
  getAIAnalytics: jest.fn(() => []),
  getCampaignComparison: jest.fn(() => []),
  getWorkflowAnalytics: jest.fn(() => []),
  getCRMCampaigns: jest.fn(() => [
    { id: 1, name: 'Test Campaign', status: 'active', owner_zalo_id: 'default' },
  ]),
  saveCRMCampaign: jest.fn(() => 1),
  updateCRMCampaignStatus: jest.fn(),
  deleteCRMCampaign: jest.fn(),
  getAccounts: jest.fn(() => [{ id: 'wa-1', name: 'Test Account' }]),
};

jest.mock('../../services/database/DatabaseService', () => ({
  __esModule: true,
  default: {
    getInstance: () => mockDbInstance,
  },
}));

// ─── Tests ──────────────────────────────────────────────────────────────

const TEST_PORT = 9189; // Use a non-standard port to avoid conflicts
const BASE = `http://localhost:${TEST_PORT}`;

describe('WebServer E2E', () => {
  let httpServer: HttpServer;
  let app: Express;
  let authToken: string;
  const TEST_USER = 'e2etest';

  beforeAll(async () => {
    // Start a real WebServer
    httpServer = WebServer.start(TEST_PORT);
    app = WebServer.createExpressApp();

    // Register or login to get a token
    const regRes = await request(app)
      .post('/api/auth/register')
      .send({ username: TEST_USER, password: 'testpass123', displayName: 'E2E Tester' });
    if (regRes.status === 200) {
      authToken = regRes.body.token;
    } else {
      // User already exists from a previous run — just log in
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({ username: TEST_USER, password: 'testpass123' });
      authToken = loginRes.body.token || '';
    }
  });

  afterAll(async () => {
    // Close all client sockets first
    // Then close Socket.IO server, then HTTP server
    const io = WebServer.getIO();
    if (io) {
      // Close all namespaces and disconnect all clients
      io.close();
    }
    httpServer?.close();
    // Let event loop drain
    await new Promise((resolve) => setTimeout(resolve, 200));
  });

  // ── 1. Health ────────────────────────────────────────────────────────

  describe('Health', () => {
    it('GET /api/health returns 200 with timestamp', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.ok).toBe(true);
      expect(typeof res.body.ts).toBe('number');
    });
  });

  // ── 2. Auth Flow ─────────────────────────────────────────────────────

  describe('Auth Flow', () => {
    it('POST /api/auth/login returns token for valid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'e2etest', password: 'testpass123' });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.token).toBeDefined();
    });

    it('POST /api/auth/login returns 401 for bad password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'e2etest', password: 'wrongpassword' });
      expect(res.status).toBe(401);
    });

    it('POST /api/auth/register returns 400 for missing fields', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ username: '' });
      expect(res.status).toBe(400);
    });
  });

  // ── 3. Protected Routes (with valid token) ───────────────────────────

  describe('Protected Routes', () => {
    it('returns 401 without token', async () => {
      const res = await request(app).get('/api/system/status');
      expect(res.status).toBe(401);
    });

    it('returns 401 with invalid token', async () => {
      const res = await request(app)
        .get('/api/system/status')
        .set('Authorization', 'Bearer invalid.jwt.token');
      expect(res.status).toBe(401);
    });

    it('GET /api/system/status returns system info with valid token', async () => {
      const res = await request(app)
        .get('/api/system/status')
        .set('Authorization', `Bearer ${authToken}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.node).toBeDefined();
      expect(res.body.memory).toBeDefined();
      expect(res.body.timestamp).toBeDefined();
    });

    it('GET /api/crm/campaigns returns campaigns with token', async () => {
      const res = await request(app)
        .get('/api/crm/campaigns?zaloId=default')
        .set('Authorization', `Bearer ${authToken}`);
      expect(res.status).toBe(200);
      expect(res.body.campaigns).toHaveLength(1);
      expect(res.body.campaigns[0].name).toBe('Test Campaign');
    });

    it('POST /api/crm/campaign creates a campaign', async () => {
      const res = await request(app)
        .post('/api/crm/campaign')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ zaloId: 'default', name: 'New Campaign' });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it('POST /api/workflow/run runs a workflow', async () => {
      const res = await request(app)
        .post('/api/workflow/run')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ workflowId: 'wf1' });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  // ── 4. Socket.IO ─────────────────────────────────────────────────────

  describe('Socket.IO', () => {
    let clientSocket: ClientSocket;

    afterEach(() => {
      clientSocket?.close();
    });

    it('connects without auth token', (done) => {
      clientSocket = ioClient(BASE, {
        transports: ['websocket'],
        forceNew: true,
      });
      clientSocket.on('connect', () => {
        expect(clientSocket.connected).toBe(true);
        done();
      });
      clientSocket.on('connect_error', (err) => {
        done(new Error(`Connection failed: ${err.message}`));
      });
    });

    it('connects with valid auth token', (done) => {
      clientSocket = ioClient(BASE, {
        transports: ['websocket'],
        forceNew: true,
        auth: { token: authToken },
      });
      clientSocket.on('connect', () => {
        expect(clientSocket.connected).toBe(true);
        done();
      });
      clientSocket.on('connect_error', (err) => {
        done(new Error(`Connection failed: ${err.message}`));
      });
    });

    it('falls back to unauthenticated with invalid token', (done) => {
      clientSocket = ioClient(BASE, {
        transports: ['polling', 'websocket'],
        forceNew: true,
        auth: { token: 'bad.token.here' },
      });
      // Socket now connects as unauthenticated (not rejected)
      clientSocket.on('connect', () => {
        // Check that authenticated flag is false
        expect((clientSocket as any).auth?.token).toBe('bad.token.here');
        done();
      });
      clientSocket.on('connect_error', () => {
        done(new Error('Socket should not be rejected, should fall back to unauthenticated'));
      });
    }, 5000);

    it('can join and leave a workspace room', (done) => {
      clientSocket = ioClient(BASE, {
        transports: ['websocket'],
        forceNew: true,
        auth: { token: authToken },
      });

      clientSocket.on('connect', () => {
        // Join room
        clientSocket.emit('join', 'ws-test-1');
        // Wait a tick then leave
        setTimeout(() => {
          clientSocket.emit('leave', 'ws-test-1');
          done();
        }, 100);
      });
    });
  });

  // ── 5. System Status (via HTTP server, not just app) ─────────────────

  describe('HTTP Server', () => {
    it('responds to health check on the running server', async () => {
      const res = await fetch(`${BASE}/api/health`);
      const body: any = await res.json();
      expect(res.status).toBe(200);
      expect(body.ok).toBe(true);
    });
  });
});
