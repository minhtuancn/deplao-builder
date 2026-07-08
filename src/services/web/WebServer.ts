import express, { Express } from 'express';
import { Server } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { AuthRoutes } from '../auth/AuthRoutes';
import { WorkspaceRoutes } from '../workspace/WorkspaceRoutes';
import { CRMWebRoutes } from '../crm/CRMWebRoutes';
import { ErpWebRoutes } from '../erp/ErpWebRoutes';
import { WorkflowWebRoutes } from '../workflow/WorkflowWebRoutes';
import { AnalyticsWebRoutes } from '../analytics/AnalyticsWebRoutes';
import authMiddleware from '../auth/authMiddleware';
import * as path from 'path';

class WebServer {
  private static io: SocketIOServer | null = null;

  public static createExpressApp(): Express {
    const app = express();
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.get('/api/health', (_req, res) => res.json({ ok: true, ts: Date.now() }));

    // Public
    app.use('/api/auth', AuthRoutes);

    // Protected
    app.use('/api/workspace', authMiddleware, WorkspaceRoutes);
    app.use('/api/crm', authMiddleware, CRMWebRoutes);
    app.use('/api/erp', authMiddleware, ErpWebRoutes);
    app.use('/api/workflow', authMiddleware, WorkflowWebRoutes);
    app.use('/api/analytics', authMiddleware, AnalyticsWebRoutes);

    // Serve built SPA (production)
    const distPath = path.join(__dirname, '../dist-web');
    app.use(express.static(distPath));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api')) return next();
      res.sendFile(path.join(distPath, 'index.html'));
    });
    return app;
  }

  public static start(port = 8080): Server {
    const app = WebServer.createExpressApp();
    const httpServer = new Server(app);
    WebServer.io = new SocketIOServer(httpServer, { cors: { origin: '*' } });

    // Forward EventBroadcaster events to web clients
    WebServer.io.on('connection', (socket) => {
      socket.on('join', (wsId: string) => socket.join(`ws:${wsId}`));
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
  public static emitToWorkspace(wsId: string, event: string, data: any): void {
    WebServer.io?.to(`ws:${wsId}`).emit(event, data);
  }
}

export default WebServer;