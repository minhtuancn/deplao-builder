import express, { Express } from 'express';
import { Server } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import * as path from 'path';
import * as fs from 'fs';
import { AuthRoutes } from '../auth/AuthRoutes';
import { WorkspaceRoutes } from '../workspace/WorkspaceRoutes';
import { CRMWebRoutes } from '../crm/CRMWebRoutes';
import { ErpWebRoutes } from '../erp/ErpWebRoutes';
import { WorkflowWebRoutes } from '../workflow/WorkflowWebRoutes';
import { AnalyticsWebRoutes } from '../analytics/AnalyticsWebRoutes';
import authMiddleware from '../auth/authMiddleware';
import AuthService from '../auth/AuthService';
import DatabaseService from '../database/DatabaseService';

class WebServer {
  private static io: SocketIOServer | null = null;

  public static createExpressApp(): Express {
    const app = express();
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true }));

    // Health
    app.get('/api/health', (_req, res) => res.json({ ok: true, ts: Date.now() }));

    // System status
    app.get('/api/system/status', authMiddleware, (_req, res) => {
      try {
        const db = DatabaseService.getInstance();
        const accounts = db.getAccounts ? db.getAccounts() : [];
        const wsCount = accounts.length;
        res.json({
          success: true,
          electron: typeof process.versions.electron !== 'undefined',
          node: process.version,
          platform: process.platform,
          dbReady: true,
          workspaceCount: wsCount,
          uptime: process.uptime(),
        });
      } catch (e: any) {
        res.json({ success: true, electron: false, node: process.version });
      }
    });

    // Serve media files from local storage
    app.get('/api/media/:zaloId/:filename(*)', (req, res) => {
      try {
        const { zaloId, filename } = req.params;
        const FileStorageService = require('../file/FileStorageService').default;
        const baseDir = FileStorageService.getBaseDir();
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

    // Public
    app.use('/api/auth', AuthRoutes);

    // Protected
    app.use('/api/workspace', authMiddleware, WorkspaceRoutes);
    app.use('/api/crm', authMiddleware, CRMWebRoutes);
    app.use('/api/erp', authMiddleware, ErpWebRoutes);
    app.use('/api/workflow', authMiddleware, WorkflowWebRoutes);
    app.use('/api/analytics', authMiddleware, AnalyticsWebRoutes);

    // Serve built SPA (production) — dist-web/ is at project root
    const distPath = path.join(__dirname, '../../dist-web');
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
        (socket as any).authenticated = false;
        next(new Error('Invalid token'));
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
