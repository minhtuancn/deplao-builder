import PostgresPool from './PostgresPool';

const PG_TABLES = new Set([
  'app_users', 'app_sessions', 'workspace_registry', 'audit_log',
]);

class DbRouter {
  public static resolveTarget(table: string): 'postgres' | 'sqlite' {
    if (PG_TABLES.has(table) && PostgresPool.getInstance().isEnabled()) {
      return 'postgres';
    }
    return 'sqlite';
  }

  public static isPgEnabled(): boolean {
    return PostgresPool.getInstance().isEnabled();
  }
}

export default DbRouter;