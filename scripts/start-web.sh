#!/bin/bash
set -e

# ── Deplao Web Server — production startup script ──

# Load .env if present
if [ -f .env ]; then
  set -a; source .env; set +a
fi

# Ensure data directories exist
DATA_DIR="${DEPLAO_DATA_DIR:-$HOME/.deplao}"
CACHE_DIR="${DEPLAO_CACHE_DIR:-$HOME/.deplao/cache}"
mkdir -p "$DATA_DIR" "$CACHE_DIR"

# Build E2EE bridge if binary missing (Facebook)
BRIDGE_BIN="src/bridge-e2ee/build/fbchat-bridge-e2ee"
if [ ! -f "$BRIDGE_BIN" ]; then
  echo "[start-web] E2EE bridge binary not found — building..."
  node scripts/build-bridge-e2ee.js || echo "[start-web] WARN: E2EE bridge build failed (Facebook E2EE disabled)"
fi

# Seed DB on first run (optional)
if [ "$DB_SEED" = "1" ]; then
  echo "[start-web] Seeding database..."
  node scripts/seed-admin.js || echo "[start-web] WARN: DB seed failed (may already be seeded)"
fi

# Start server
PORT="${WEB_PORT:-8080}"
echo "[start-web] Starting Deplao Web Server on port $PORT..."
exec node dist/server.js
