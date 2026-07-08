import PostgresInit from '../../services/db/PostgresInit';
import PostgresPool from '../../services/db/PostgresPool';

describe('PostgresInit', () => {
  it('initializes schema when enabled', async () => {
    if (!PostgresPool.getInstance().isEnabled()) return;
    await PostgresInit.run();
    const rows = await PostgresPool.getInstance().query('SELECT table_name FROM information_schema.tables WHERE table_schema = $1', ['public']);
    const names = rows.map((r: any) => r.table_name);
    expect(names).toContain('app_users');
    expect(names).toContain('workspace_registry');
  });
});