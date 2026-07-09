import WebServer from '../src/services/web/WebServer';
import PostgresInit from '../src/services/db/PostgresInit';

export function startWebIfEnabled(): void {
  if (process.env.WEB_ENABLED !== '1') return;
  const port = Number(process.env.WEB_PORT) || 8080;
  PostgresInit.run()
    .then(() => WebServer.start(port))
    .catch((e) => console.error('[web] failed to start:', e.message));
}