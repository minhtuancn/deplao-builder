/**
 * Deplao Web Server — standalone entry point
 *
 * Boots all services without Electron:
 * 1. Platform config (data dir, AES crypto)
 * 2. PostgreSQL (if POSTGRES_URL set)
 * 3. SQLite (DatabaseService)
 * 4. Web server (Express + Socket.IO on WEB_PORT)
 * 5. Zalo listeners (zca-js)
 * 6. Facebook listeners (fbchat-v2 + E2EE bridge)
 * 7. Telegram listener (gramjs)
 * 8. Background workers (lazy init)
 */

import { PlatformConfig } from './utils/PlatformConfig';
import PostgresPool from './services/db/PostgresPool';
import PostgresInit from './services/db/PostgresInit';
import WebServer from './services/web/WebServer';
import DatabaseService from './services/database/DatabaseService';
import Logger from './utils/Logger';

const TAG = '[Bootstrap]';

async function bootstrap(): Promise<void> {
  // ── 1. Platform init ─────────────────────────────────
  Logger.log(`${TAG} PlatformConfig initialized`);
  const dataDir = PlatformConfig.getDataDir();
  Logger.log(`${TAG} Data dir: ${dataDir}`);

  // ── 2. PostgreSQL (optional — for multi-user auth) ──
  if (process.env.POSTGRES_URL) {
    Logger.log(`${TAG} PostgreSQL URL found — initializing...`);
    try {
      await PostgresInit.run();
      Logger.log(`${TAG} PostgreSQL initialized`);
    } catch (e) {
      Logger.warn(`${TAG} PostgreSQL init failed: ${(e as Error).message} — running in SQLite-only mode`);
    }
  } else {
    Logger.log(`${TAG} No POSTGRES_URL — running in single-user (SQLite-only) mode`);
  }

  // ── 3. SQLite (DatabaseService singleton) ───────────
  const db = DatabaseService.getInstance();
  await db.initialize();
  Logger.log(`${TAG} SQLite database ready`);

  // ── 4. WorkspaceManager ─────────────────────────────
  try {
    const { default: WorkspaceManager } = await import('./utils/WorkspaceManager');
    const wm = WorkspaceManager.getInstance();
    wm.initialize();
    Logger.log(`${TAG} WorkspaceManager ready`);
  } catch (e) {
    Logger.warn(`${TAG} WorkspaceManager init failed: ${(e as Error).message}`);
  }

  // ── 5. Start web server ─────────────────────────────
  const port = Number(process.env.WEB_PORT) || 8080;
  WebServer.start(port);
  Logger.log(`${TAG} Web server listening on port ${port}`);

  // ── 6. Start Zalo listeners ─────────────────────────
  await startZaloListeners();

  // ── 7. Start Facebook listeners ─────────────────────
  await startFacebookListeners();

  // ── 8. Start Telegram listener ─────────────────────
  await startTelegramListener();

  // ── 9. Background services ──────────────────────────
  startBackgroundServices();

  Logger.log(`${TAG} ✅ All services started. System ready.`);
}

async function startZaloListeners(): Promise<void> {
  try {
    const { default: ZaloService } = await import('./services/zalo/ZaloService');
    // ZaloService auto-loads accounts and starts listeners
    Logger.log(`${TAG} Zalo listeners loaded`);
  } catch (e) {
    Logger.warn(`${TAG} Zalo listeners not available: ${(e as Error).message}`);
  }
}

async function startFacebookListeners(): Promise<void> {
  try {
    const { default: FacebookService } = await import('./services/facebook/FacebookService');
    Logger.log(`${TAG} Facebook listeners loaded`);
  } catch (e) {
    Logger.warn(`${TAG} Facebook listeners not available: ${(e as Error).message}`);
  }
}

async function startTelegramListener(): Promise<void> {
  try {
    const { TelegramService } = await import('./services/telegram/TelegramService');
    await TelegramService.initialize();
    Logger.log(`${TAG} Telegram listener started`);
  } catch (e) {
    Logger.warn(`${TAG} Telegram init failed: ${(e as Error).message}`);
  }
}

function startBackgroundServices(): void {
  // CRM queue, workflow engine, webhook gateway auto-init on first use
  Logger.log(`${TAG} Background services ready (lazy init)`);
}

// ── Graceful shutdown ─────────────────────────────────
async function shutdown(signal: string): Promise<void> {
  Logger.log(`${TAG} ${signal} received — shutting down...`);
  try {
    await PostgresPool.getInstance().close();
  } catch {}
  process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

bootstrap().catch((err) => {
  console.error(`${TAG} ❌ Fatal error:`, err);
  process.exit(1);
});
