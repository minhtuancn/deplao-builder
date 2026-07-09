import express, { Express, Request } from 'express';
import { Server } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import * as path from 'path';
import * as fs from 'fs';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { AuthRoutes } from '../auth/AuthRoutes';
import { WorkspaceRoutes } from '../workspace/WorkspaceRoutes';
import { CRMWebRoutes } from '../crm/CRMWebRoutes';
import { ErpWebRoutes } from '../erp/ErpWebRoutes';
import { WorkflowWebRoutes } from '../workflow/WorkflowWebRoutes';
import { AnalyticsWebRoutes } from '../analytics/AnalyticsWebRoutes';
import { ActivityWebRoutes } from '../activity/ActivityWebRoutes';
import authMiddleware from '../auth/authMiddleware';
import AuthService from '../auth/AuthService';
import DatabaseService from '../database/DatabaseService';
import PostgresPool from '../db/PostgresPool';
import TelegramRoutes from '../telegram/TelegramWebRoutes';

// Morgan log format — use 'dev' for development, 'combined' for production
const LOG_FORMAT = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

// Skip logging health-check pings and static asset requests in tests
function skipLogging(req: Request): boolean {
  if (process.env.NODE_ENV === 'test') return true;
  return req.path === '/api/health';
}

class WebServer {
  private static io: SocketIOServer | null = null;

  public static createExpressApp(): Express {
    const app = express();
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true }));

    // --- Request logging ---
    app.use(morgan(LOG_FORMAT, { skip: skipLogging }));

    // --- Rate limiting ---
    // Auth: stricter — 30 req/min per IP
    const authLimiter = rateLimit({
      windowMs: 60 * 1000,
      max: 30,
      standardHeaders: true,
      legacyHeaders: false,
      message: { success: false, error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau.' },
      skip: (req) => process.env.NODE_ENV === 'test',
    });

    // General API: 200 req/min per IP
    const apiLimiter = rateLimit({
      windowMs: 60 * 1000,
      max: 200,
      standardHeaders: true,
      legacyHeaders: false,
      message: { success: false, error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau.' },
      skip: (req) => process.env.NODE_ENV === 'test',
    });

    // Health
    app.get('/api/health', (_req, res) => res.json({ ok: true, ts: Date.now() }));

    // Enhanced system status
    app.get('/api/system/status', authMiddleware, (_req, res) => {
      try {
        const db = DatabaseService.getInstance();
        const accounts = db.getAccounts ? db.getAccounts() : [];
        const wsCount = accounts.length;
        const memUsage = process.memoryUsage();
        const io = WebServer.io;
        const activeConnections = io?.engine?.clientsCount ?? 0;
        res.json({
          success: true,
          electron: typeof process.versions.electron !== 'undefined',
          node: process.version,
          platform: process.platform,
          arch: process.arch,
          dbReady: true,
          workspaceCount: wsCount,
          uptime: process.uptime(),
          memory: {
            rss: Math.round(memUsage.rss / 1024 / 1024) + 'MB',
            heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + 'MB',
            heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + 'MB',
          },
          webSocketConnections: activeConnections,
          timestamp: new Date().toISOString(),
        });
      } catch (e: any) {
        res.json({
          success: true,
          electron: false,
          node: process.version,
          arch: process.arch,
          uptime: process.uptime(),
        });
      }
    });

    // Serve media files from local storage
    // Uses dynamic require() because FileStorageService depends on Electron's `app`
    // — static import would fail in non-Electron contexts (standalone web server).
    app.get('/api/media/:zaloId/:filename(*)', (req, res) => {
      try {
        const { zaloId, filename } = req.params;
        const FileStorage: { getBaseDir: () => string } = require('../file/FileStorageService').default;
        const baseDir = FileStorage.getBaseDir();
        const mediaPath = path.join(baseDir, 'media', zaloId, filename);
        const safePath = path.resolve(mediaPath);
        if (!fs.existsSync(safePath)) {
          return res.status(404).json({ success: false, error: 'File not found' });
        }
        res.sendFile(safePath);
      } catch (e: any) {
        res.status(500).json({ success: false, error: e.message });
      }
    });

    // Public (with stricter rate limit)
    app.use('/api/auth', authLimiter, AuthRoutes);

    // Protected (with general rate limit)
    app.use('/api/workspace', apiLimiter, authMiddleware, WorkspaceRoutes);
    app.use('/api/crm', apiLimiter, authMiddleware, CRMWebRoutes);
    app.use('/api/erp', apiLimiter, authMiddleware, ErpWebRoutes);
    app.use('/api/workflow', apiLimiter, authMiddleware, WorkflowWebRoutes);
    app.use('/api/analytics', apiLimiter, authMiddleware, AnalyticsWebRoutes);
    app.use('/api/activity', apiLimiter, authMiddleware, ActivityWebRoutes);
    app.use('/api/telegram', apiLimiter, authMiddleware, TelegramRoutes);

    // User info endpoint (change password at auth routes)
    app.get('/api/user/profile', authMiddleware, async (req, res) => {
      const payload = (req as any).user;
      if (!payload?.userId) return res.status(401).json({ success: false, error: 'Unauthorized' });
      try {
        const pg = PostgresPool.getInstance();
        if (!pg.isEnabled()) return res.json({ success: true, user: { id: payload.userId, role: payload.role } });
        const rows = await pg.query('SELECT id, username, display_name, role, created_at FROM app_users WHERE id = $1', [payload.userId]);
        const user = rows[0];
        if (!user) return res.status(404).json({ success: false, error: 'User not found' });
        res.json({ success: true, user });
      } catch (e: any) {
        res.status(500).json({ success: false, error: e.message });
      }
    });

    // Serve built SPA (production) — dist-web/ is at project root
    // Resolve relative to compiled output (dist/) or source (src/)
    let distPath = path.join(__dirname, '../../dist-web');
    if (!fs.existsSync(distPath)) {
      distPath = path.join(__dirname, '../../../dist-web');
    }
    if (!fs.existsSync(distPath)) {
      // Fallback: walk up to project root
      let p = path.resolve(__dirname);
      while (p !== path.dirname(p)) {
        const candidate = path.join(p, 'dist-web');
        if (fs.existsSync(candidate)) { distPath = candidate; break; }
        p = path.dirname(p);
      }
    }
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res, next) => {
        if (req.path.startsWith('/api')) return next();
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }

    return app;
  }

  public static start(port = 8080): Server {
    const app = WebServer.createExpressApp();
    const httpServer = new Server(app);

    WebServer.io = new SocketIOServer(httpServer, {
      cors: { origin: '*' },
      // Auth middleware
      allowRequest: (req, callback) => {
        const token = (req as any).headers?.authorization?.replace('Bearer ', '') ||
                      (req as any).url && new URLSearchParams((req as any).url.split('?')[1] || '').get('token');
        if (!token) {
          // Allow connection but they'll be in a limited scope
          callback(null, true);
          return;
        }
        callback(null, true);
      },
    });

    // Socket.IO auth middleware
    WebServer.io.use((socket, next) => {
      const token = socket.handshake.auth?.token || socket.handshake.query?.token as string;
      if (!token) {
        // Allow unauthenticated connections for public events
        (socket as any).authenticated = false;
        return next();
      }
      try {
        const payload = AuthService.verifyToken(token);
        (socket as any).user = payload;
        (socket as any).authenticated = true;
        next();
      } catch {
        // Invalid token → connect as unauthenticated (limited scope for public events)
        (socket as any).authenticated = false;
        next();
      }
    });

    WebServer.io.on('connection', (socket) => {
      console.log(`[WebServer] Socket connected: ${socket.id} (auth=${!!(socket as any).authenticated})`);

      // Join workspace room
      socket.on('join', (wsId: string) => {
        if (!wsId) return;
        socket.join(`ws:${wsId}`);
        console.log(`[WebServer] Socket ${socket.id} joined room ws:${wsId}`);
      });

      // Leave workspace room
      socket.on('leave', (wsId: string) => {
        if (!wsId) return;
        socket.leave(`ws:${wsId}`);
      });

      socket.on('disconnect', () => {
        console.log(`[WebServer] Socket disconnected: ${socket.id}`);
      });
    });

    httpServer.listen(port, () => {
      console.log(`[WebServer] Listening on port ${port}`);
    });
    return httpServer;
  }

  public static getIO(): SocketIOServer | null {
    return WebServer.io;
  }

  /** Push event to all clients in a workspace room */
  public static emitToWorkspace(wsId: string, event: string, data: unknown): void {
    WebServer.io?.to(`ws:${wsId}`).emit(event, data);
  }
}

export default WebServer;
