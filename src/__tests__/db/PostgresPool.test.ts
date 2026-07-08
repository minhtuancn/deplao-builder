import PostgresPool from '../../services/db/PostgresPool';

describe('PostgresPool', () => {
  it('returns a singleton pool instance', () => {
    PostgresPool.reset();
    const a = PostgresPool.getInstance();
    const b = PostgresPool.getInstance();
    expect(a).toBe(b);
  });

  it('isEnabled reflects env var', () => {
    PostgresPool.reset();
    process.env.POSTGRES_URL = 'postgresql://user:pass@localhost:5432/deplao';
    const pool = PostgresPool.getInstance();
    expect(pool.isEnabled()).toBe(true);
  });
});
