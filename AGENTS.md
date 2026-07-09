# Deplao Builder - Agent Instructions

Desktop app for managing Zalo & Facebook accounts with CRM, ERP, Workflow, AI Assistant. Electron + React + TypeScript.

## Key Commands

```bash
# Install deps (must use legacy-peer-deps)
npm install --legacy-peer-deps

# Development
npm run dev                    # Runs predev (builds E2EE bridge) + dev (concurrently Vite + tsc watch + Electron)

# Production build
npm run production            # Builds bridge + tsc prod + strip-console + vite build + electron-builder

# Individual build steps
npm run build:bridge-e2ee     # Build Go E2EE bridge (fbchat-bridge-e2ee)
npm run build:electron        # tsc -p tsconfig.electron.json
npm run build:renderer        # vite build
```

## Architecture

### Processes
- **Main** (`electron/main.ts`): Electron main process. Registers all IPC handlers, manages windows/tray, starts background services (relay server, workflow engine, webhook gateway, CRM queue, tracking, auto-update).
- **Renderer** (`src/ui/`): React + Vite. Communicates via `window.electronAPI` (preload.ts exposes typed IPC).

### Key Services (Main Process)
| Service | Purpose |
|---------|---------|
| `DatabaseService` | SQLite (better-sqlite3), WAL mode, per-workspace DB |
| `WorkspaceManager` | Multi-workspace (local/remote), switches DB path |
| `HttpConnectionManager` | Employee ↔ Boss REST + Socket.IO (port 9900) |
| `HttpRelayService` | Boss relay server for employee connections |
| `WorkflowEngineService` | Drag-drop workflows, cron triggers, AI nodes |
| `WebhookGatewayService` | Incoming webhooks (port 9889) → workflow triggers |
| `IntegrationRegistry` | 3rd-party adapters (KiotViet, Haravan, Sapo, GHN, GHTK, etc.) |
| `CRMQueueService` | Campaign sending queue with rate limiting |
| `LoginService` | Zalo QR/cookie login via zca-js |
| `ZaloService` | Zalo API wrapper (messages, groups, contacts) |
| `FacebookService` | FB Messenger via fbchat-v2 (E2EE via Go bridge) |
| `EventBroadcaster` | Main → Renderer events (messages, connections, etc.) |

### IPC Pattern
All communication via `electron/ipc/*.ts` → registered in `main.ts` → exposed in `preload.ts` → typed in `src/ui/lib/ipc.ts`. Use `ipcRenderer.invoke` (request/response) or `ipcRenderer.on` (events).

### Data Access
- **Boss/Local**: Direct IPC → DatabaseService
- **Employee**: REST API via `DataAccessor` (auto-routes: IPC if local, REST if remote)
- Media cascade: local cache → Boss → CDN

## Workspace Modes
- **Local (Boss/Standalone)**: Own SQLite DB, runs Zalo listeners, relay server optional
- **Remote (Employee)**: Connects to Boss via HTTP/Socket.IO, no local Zalo listeners, caches data

## Build Specifics

### E2EE Bridge (Go)
- Location: `src/bridge-e2ee/`
- Binary: `src/bridge-e2ee/build/fbchat-bridge-e2ee[.exe]`
- Required for Facebook Secret Conversations
- Auto-built in `predev` and CI (Ubuntu job installs Go)

### Production Build Steps
1. `npm run build:bridge-e2ee` - Go binary
2. `tsc -p tsconfig.electron.prod.json` - Main process
3. `node scripts/strip-console.js` - Remove console.* from dist-electron
4. `vite build` - Renderer (obfuscated in prod)
5. `electron-builder` - Packages app

### CI (`.github/workflows/build-all.yml`)
- Windows (x64), macOS (arm64), Ubuntu (x64 - AppImage + deb)
- Matrix builds in parallel, publishes to GitHub Releases on tag push

## Important Files

| File | Purpose |
|------|---------|
| `electron/main.ts` | App entry, IPC registration, service startup |
| `electron/preload.ts` | Secure IPC exposure to renderer |
| `src/configs/BuildConfig.ts` | Build flags (IS_DEV_BUILD, SHOW_DEV_TOOLS) |
| `src/utils/WorkspaceManager.ts` | Multi-workspace management |
| `src/services/database/DatabaseService.ts` | SQLite operations (7.5k lines) |
| `src/ui/store/appStore.ts` | Global Zustand store (UI state, cache) |
| `src/ui/lib/ipc.ts` | Typed IPC wrappers for React components |
| `src/ui/lib/data/DataAccessor.ts` | Auto-routes IPC/REST by workspace mode |

## Dev Gotchas

- **Must use `--legacy-peer-deps`** - dependency conflicts otherwise
- **Go ≥ 1.24 required** for E2EE bridge build
- **Dev port**: 27799 (Vite), hardcoded in `vite.config.ts` and `main.ts`
- **Single instance lock** - second launch focuses existing window
- **Hardware acceleration ON** - disabling causes black screen/freeze (see main.ts comment)
- **Anti-debug in prod** - quits if DevTools attached
- **Console stripped in prod** - `strip-console.js` runs after tsc
- **Custom protocols**: `local-media://` (file serving), `deplao://` (deep links)
- **App hides to tray on close** - `window:close` IPC hides, `window:quit` exits

## Testing

```bash
npm test    # Jest + ts-jest, tests in src/__tests__/**/*.test.ts
```

## Key Dependencies

- `zca-js` - Zalo protocol
- `fbchat-v2` - Facebook Messenger (with E2EE Go bridge)
- `better-sqlite3` - Native SQLite
- `electron-store` - Encrypted settings/cookies
- `zustand` - React state
- `reactflow` - Workflow editor
- `recharts` - Analytics charts
- `quill` / `react-quill-new` - Rich text editor

## Environment

- Node 18+ (CI uses 22)
- Electron 41
- Vite 6, React 18, TypeScript 5
- SQLite local-first, no external DB required

---

## Fork & Git Workflow (Cho agent làm việc trên fork)

Repo này là **fork** của `babyvibe/deplao-builder`. Workflow dưới đây giữ thay đổi riêng tách biệt với upstream, dễ sync bản mới.

### Remote
- `origin` → fork của bạn (`minhtuancn/deplao-builder`) — push thay đổi riêng lên đây
- `upstream` → repo gốc (`babyvibe/deplao-builder`) — chỉ fetch, KHÔNG push

Thiết lập upstream (chưa có):
```bash
git remote add upstream https://github.com/babyvibe/deplao-builder.git
git remote -v
```

### Cấu trúc nhánh

```
main        ← chỉ sync với upstream (base thật), KHÔNG chỉnh sửa trực tiếp
  └─ custom ← nhánh làm việc riêng: main + thay đổi của bạn
       └─ custom/<tính-năng>  ← feature branch (tuỳ chọn)
```

### Quy ước bắt buộc
- **KHÔNG** commit/push thay đổi riêng lên `main`. `main` chỉ dùng để sync upstream.
- **KHÔNG** `git push --force` lên `main` hoặc `custom` (nếu đã share).
- Mọi chỉnh sửa bắt đầu từ `custom`, merge upstream vào `custom` khi cần cập nhật.

### Workflow chuẩn

1. **Bắt đầu tính năng mới:**
   ```bash
   git checkout custom
   git checkout -b custom/ten-tinh-nang
   # ... làm việc ...
   git checkout custom && git merge custom/ten-tinh-nang
   git push origin custom
   ```

2. **Cập nhật từ upstream (repo chính có bản mới):**
   ```bash
   git stash                          # stash nếu đang dirty
   git checkout main
   git fetch upstream
   git merge upstream/main            # hoặc rebase nếu muốn lịch sử thẳng
   git push origin main               # sync main lên fork (optional)
   git checkout custom
   git merge main                     # gộp upstream vào custom, giải quyết conflict
   git push origin custom
   git stash pop                       # restore nếu đã stash
   npm run production                 # verify build sau merge
   ```

3. **Theo dõi upstream thủ công:**
   ```bash
   git fetch upstream
   git log origin/main..upstream/main --oneline    # xem upstream có gì mới
   ```

### Lưu ý khi merge upstream
- Conflict thường ở `package.json`, `package-lock.json`, `README*.md`. Giữ cả hai phía rồi `npm install --legacy-peer-deps` để khôi phục lockfile.
- Sau khi merge, **luôn test** `npm run dev` và `npm run production` trước khi release.
- Nếu upstream đổi schema DB (`DatabaseService`), kiểm tra migration logic trước khi chạy app lên data cũ.
- File `src/bridge-e2ee/build/*` là binary build từ Go — không merge nhầm binary upstream vào fork (build lại bằng `npm run build:bridge-e2ee`).