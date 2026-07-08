import DbRouter from '../../services/db/DbRouter';
import PostgresPool from '../../services/db/PostgresPool';

describe('DbRouter', () => {
  it('routes metadata queries to PG when enabled', () => {
    const pg = PostgresPool.getInstance();
    const target = DbRouter.resolveTarget('app_users');
    if (pg.isEnabled()) {
      expect(target).toBe('postgres');
    } else {
      expect(target).toBe('sqlite');
    }
  });

  it('routes workspace data to sqlite', () => {
    expect(DbRouter.resolveTarget('messages')).toBe('sqlite');
    expect(DbRouter.resolveTarget('accounts')).toBe('sqlite');
  });
});