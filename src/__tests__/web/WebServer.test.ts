// Mock uuid (ESM-only in v13) so ts-jest can transform it
jest.mock('uuid', () => ({ v4: () => 'test-uuid-mock' }));

// Mock ERP services
jest.mock('../../services/erp/ErpTaskService', () => ({
  __esModule: true,
  default: {
    getInstance: () => ({
      listTasks: jest.fn(() => [{ id: '1', title: 'Test Task', status: 'todo' }]),
      getTaskDetail: jest.fn(() => null),
      createTask: jest.fn(() => ({ id: '1', title: 'New Task' })),
      updateTask: jest.fn(() => ({ id: '1', title: 'Updated', status: 'done' })),
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
      listNotes: jest.fn(() => [{ id: '1', title: 'Note', content: 'Content' }]),
      getNote: jest.fn(() => null),
      createNote: jest.fn(() => ({ id: '1', title: 'New Note' })),
      deleteNote: jest.fn(),
    }),
  },
}));

// Mock WorkflowEngineService
jest.mock('../../services/workflow/WorkflowEngineService', () => ({
  __esModule: true,
  default: {
    getInstance: () => ({
      getWorkflows: jest.fn(() => [
        { id: 'wf1', name: 'Test WF', enabled: true },
        { id: 'wf2', name: 'Disabled WF', enabled: false },
      ]),
      reloadWorkflow: jest.fn(() => 'wf1'),
      executeWorkflow: jest.fn(() => Promise.resolve(null)),
    }),
  },
}));

// Mock DatabaseService — use __esModule for ts-jest compatibility
const mockDbInstance = {
  getActivityStats: jest.fn(() => ({
    sentCount: 42,
    messageCount: 100,
    conversationCount: 5,
    receivedCount: 58,
  })),
  getMessageVolume: jest.fn(() => [{ date: '2026-07-01', count: 10 }]),
  getAIAnalytics: jest.fn(() => []),
  getCampaignComparison: jest.fn(() => []),
  getWorkflowAnalytics: jest.fn(() => []),
  getCRMCampaigns: jest.fn(() => [
    { id: 1, name: 'Campaign 1', status: 'active', owner_zalo_id: 'default' },
  ]),
  saveCRMCampaign: jest.fn(() => 1),
  updateCRMCampaignStatus: jest.fn(),
  deleteCRMCampaign: jest.fn(),
  getAccounts: jest.fn(() => []),
};
jest.mock('../../services/database/DatabaseService', () => ({
  __esModule: true,
  default: {
    getInstance: () => mockDbInstance,
  },
}));

import express from 'express';
import request from 'supertest';
import WebServer from '../../services/web/WebServer';
import AuthService from '../../services/auth/AuthService';
import { CRMWebRoutes } from '../../services/crm/CRMWebRoutes';
import { ErpWebRoutes } from '../../services/erp/ErpWebRoutes';
import { WorkflowWebRoutes } from '../../services/workflow/WorkflowWebRoutes';
import { AnalyticsWebRoutes } from '../../services/analytics/AnalyticsWebRoutes';

/** Helper: create a test Express app with the given routes mounted at /api/* under a simple auth stub */
function createTestApp() {
  const app = express();
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.get('/api/health', (_req, res) => res.json({ ok: true, ts: Date.now() }));

  // Use simple auth stub that always passes
  const authStub: express.RequestHandler = (_req, _res, next) => next();

  app.use('/api/crm', authStub, CRMWebRoutes);
  app.use('/api/erp', authStub, ErpWebRoutes);
  app.use('/api/workflow', authStub, WorkflowWebRoutes);
  app.use('/api/analytics', authStub, AnalyticsWebRoutes);

  return app;
}

describe('WebServer Routes', () => {
  let app: express.Express;

  beforeAll(() => {
    app = createTestApp();
  });

  describe('Health', () => {
    it('GET /api/health returns ok', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.ok).toBe(true);
      expect(res.body.ts).toBeDefined();
    });
  });

  describe('System Status', () => {
    let statusApp: express.Express;
    let authToken: string;

    beforeAll(() => {
      statusApp = WebServer.createExpressApp();
      authToken = AuthService.signToken({ userId: 1, role: 'admin' });
    });

    it('GET /api/system/status returns system info', async () => {
      const res = await request(statusApp)
        .get('/api/system/status')
        .set('Authorization', `Bearer ${authToken}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.node).toBeDefined();
      expect(res.body.platform).toBeDefined();
      expect(res.body.uptime).toBeDefined();
    });

    it('GET /api/system/status includes memory info', async () => {
      const res = await request(statusApp)
        .get('/api/system/status')
        .set('Authorization', `Bearer ${authToken}`);
      expect(res.status).toBe(200);
      expect(res.body.memory).toBeDefined();
      expect(res.body.memory.rss).toMatch(/MB$/);
      expect(res.body.memory.heapUsed).toMatch(/MB$/);
      expect(res.body.timestamp).toBeDefined();
    });
  });

  describe('CRM Routes', () => {
    it('GET /api/crm/campaigns returns campaigns', async () => {
      const res = await request(app).get('/api/crm/campaigns?zaloId=default');
      expect(res.status).toBe(200);
      expect(res.body.campaigns).toHaveLength(1);
    });

    it('GET /api/crm/campaigns requires zaloId', async () => {
      const res = await request(app).get('/api/crm/campaigns');
      expect(res.status).toBe(400);
    });

    it('POST /api/crm/campaign creates campaign', async () => {
      const res = await request(app).post('/api/crm/campaign').send({ zaloId: 'default', name: 'New' });
      expect(res.status).toBe(200);
      expect(res.body.id).toBe(1);
    });

    it('POST /api/crm/campaign fails without name', async () => {
      const res = await request(app).post('/api/crm/campaign').send({ zaloId: 'default' });
      expect(res.status).toBe(400);
    });

    it('PUT /api/crm/campaign/:id updates campaign status', async () => {
      const res = await request(app).put('/api/crm/campaign/1').send({ zaloId: 'default', status: 'paused' });
      expect(res.status).toBe(200);
    });

    it('DELETE /api/crm/campaign/:id deletes campaign', async () => {
      const res = await request(app).delete('/api/crm/campaign/1?zaloId=default');
      expect(res.status).toBe(200);
    });

    it('GET /api/crm/stats returns stats', async () => {
      const res = await request(app).get('/api/crm/stats?zaloId=default');
      expect(res.status).toBe(200);
      expect(res.body.totalCampaigns).toBe(1);
      expect(res.body.activeCampaigns).toBe(1);
    });
  });

  describe('ERP Routes', () => {
    it('GET /api/erp/tasks returns tasks', async () => {
      const res = await request(app).get('/api/erp/tasks');
      expect(res.status).toBe(200);
      expect(res.body.tasks).toHaveLength(1);
    });

    it('POST /api/erp/task creates task', async () => {
      const res = await request(app).post('/api/erp/task').send({ title: 'New Task' });
      expect(res.status).toBe(200);
    });

    it('PUT /api/erp/task/:id updates task', async () => {
      const res = await request(app).put('/api/erp/task/1').send({ completed: true });
      expect(res.status).toBe(200);
    });

    it('DELETE /api/erp/task/:id deletes task', async () => {
      const res = await request(app).delete('/api/erp/task/1');
      expect(res.status).toBe(200);
    });

    it('GET /api/erp/notes returns notes', async () => {
      const res = await request(app).get('/api/erp/notes');
      expect(res.status).toBe(200);
    });

    it('POST /api/erp/note creates note', async () => {
      const res = await request(app).post('/api/erp/note').send({ title: 'New Note', content: 'Content' });
      expect(res.status).toBe(200);
    });

    it('DELETE /api/erp/note/:id deletes note', async () => {
      const res = await request(app).delete('/api/erp/note/1');
      expect(res.status).toBe(200);
    });
  });

  describe('Workflow Routes', () => {
    it('GET /api/workflow/list returns workflows', async () => {
      const res = await request(app).get('/api/workflow/list');
      expect(res.status).toBe(200);
      expect(res.body.workflows).toHaveLength(2);
    });

    it('GET /api/workflow/templates returns templates', async () => {
      const res = await request(app).get('/api/workflow/templates');
      expect(res.status).toBe(200);
      expect(res.body.templates).toHaveLength(3);
    });

    it('POST /api/workflow/toggle toggles workflow', async () => {
      const res = await request(app).post('/api/workflow/toggle').send({ workflowId: 'wf1' });
      expect(res.status).toBe(200);
    });

    it('POST /api/workflow/run runs workflow', async () => {
      const res = await request(app).post('/api/workflow/run').send({ workflowId: 'wf1' });
      expect(res.status).toBe(200);
    });

    it('DELETE /api/workflow/:id deletes workflow', async () => {
      const res = await request(app).delete('/api/workflow/wf1');
      expect(res.status).toBe(200);
    });

    it('GET /api/workflow/logs returns logs', async () => {
      const res = await request(app).get('/api/workflow/logs');
      expect(res.status).toBe(200);
      expect(res.body.logs).toBeDefined();
    });
  });

  describe('Analytics Routes', () => {
    it('GET /api/analytics/dashboard returns stats', async () => {
      const res = await request(app).get('/api/analytics/dashboard?zaloId=default');
      expect(res.status).toBe(200);
    });

    it('GET /api/analytics/message-volume returns data', async () => {
      const res = await request(app).get('/api/analytics/message-volume?zaloId=default&days=7');
      expect(res.status).toBe(200);
    });
  });
});
