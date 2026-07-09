#!/usr/bin/env node

/**
 * Deplao Web Server — Standalone mode (no Electron)
 *
 * Usage:
 *   node start-web.js
 *   # or
 *   WEB_ENABLED=1 WEB_PORT=8080 node start-web.js
 *
 * Requires PostgreSQL running (docker-compose up -d)
 * Requires compiled JS in dist-electron/
 */

const path = require('path');

// Ensure required env vars
process.env.WEB_ENABLED = process.env.WEB_ENABLED || '1';
process.env.WEB_PORT = process.env.WEB_PORT || '8080';

async function main() {
  console.log(`[start-web] Starting Deplao Web Server (port ${process.env.WEB_PORT})...`);

  // Initialize PostgreSQL schema
  try {
    const PostgresInit = require('./dist-electron/src/services/db/PostgresInit').default;
    await PostgresInit.run();
    console.log('[start-web] PostgreSQL schema ready');
  } catch (err) {
    console.error('[start-web] PostgreSQL init failed:', err.message);
    console.error('[start-web] Make sure PostgreSQL is running: docker-compose up -d');
    process.exit(1);
  }

  // Start the Express + Socket.IO web server
  try {
    const WebServer = require('./dist-electron/src/services/web/WebServer').default;
    const httpServer = WebServer.start(Number(process.env.WEB_PORT) || 8080);
    console.log(`[start-web] ✅ Deplao Web Server running at http://localhost:${process.env.WEB_PORT || 8080}`);
    console.log(`[start-web]   Health: http://localhost:${process.env.WEB_PORT || 8080}/api/health`);
  } catch (err) {
    console.error('[start-web] Web server start failed:', err.message);
    console.error('[start-web] Make sure to build first: npm run build:electron');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[start-web] Fatal error:', err);
  process.exit(1);
});
