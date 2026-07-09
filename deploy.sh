#!/usr/bin/env bash
set -euo pipefail

# ─── Deplao Web Server — Deploy Script ───────────────────────────────
# Usage:
#   ./deploy.sh              # Full deploy (build + docker + start)
#   ./deploy.sh build        # Build only (Electron + Web)
#   ./deploy.sh docker       # Start PostgreSQL only
#   ./deploy.sh start        # Start web server only
#   ./deploy.sh stop         # Stop web server + PostgreSQL
#   ./deploy.sh logs         # View PostgreSQL logs
#   ./deploy.sh clean        # Remove all volumes (DATA LOSS!)
# ──────────────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

info()  { echo -e "${GREEN}[INFO]${NC} $1"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Defaults
WEB_PORT="${WEB_PORT:-8080}"

case "${1:-all}" in
  build)
    info "Building web SPA..."
    cd web && npm ci --legacy-peer-deps && npm run build && cd ..
    info "✅ Web SPA built (dist-web/)"

    info "Building Electron main process..."
    npx tsc -p tsconfig.electron.json
    info "✅ Electron main process built (dist-electron/)"
    ;;

  docker)
    info "Starting PostgreSQL..."
    docker compose up -d postgres
    info "✅ PostgreSQL started (port ${POSTGRES_PORT:-5432})"
    ;;

  start)
    info "Starting web server on port ${WEB_PORT}..."
    export WEB_ENABLED=1
    export WEB_PORT
    node start-web.js
    ;;

  stop)
    info "Stopping web server + PostgreSQL..."
    docker compose down
    info "✅ Stopped"
    ;;

  logs)
    docker compose logs -f postgres
    ;;

  clean)
    warn "This will DELETE ALL DATA in PostgreSQL volumes!"
    read -rp "Continue? (y/N) " confirm
    if [[ "$confirm" == "y" || "$confirm" == "Y" ]]; then
      docker compose down -v
      info "✅ Volumes removed"
    else
      info "Cancelled"
    fi
    ;;

  all|*)
    # Full deploy
    if [ ! -f "docker-compose.yml" ]; then
      error "docker-compose.yml not found. Run from project root."
      exit 1
    fi

    # Check for .env
    if [ ! -f ".env" ]; then
      warn ".env file not found. Copying from .env.example..."
      cp .env.example .env
      warn "Edit .env with your settings before running in production."
    fi

    info "=== Step 1: Build ==="
    "$0" build

    info "=== Step 2: Start PostgreSQL ==="
    "$0" docker

    info "=== Step 3: Start Web Server ==="
    "$0" start
    ;;
esac
