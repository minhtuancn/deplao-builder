import { Pool } from 'pg';

class PostgresPool {
  private static instance: PostgresPool;
  private pool: Pool | null = null;
  private enabled: boolean = false;

  private constructor() {
    const url = process.env.POSTGRES_URL;
    if (url) {
      this.pool = new Pool({ connectionString: url, max: 20, idleTimeoutMillis: 30000 });
      this.enabled = true;
    }
  }

  /** Reset instance (for testing). Call before getInstance() to re-init with new env. */
  public static reset(): void {
    PostgresPool.instance = undefined as any;
  }

  public static getInstance(): PostgresPool {
    if (!PostgresPool.instance) {
      PostgresPool.instance = new PostgresPool();
    }
    return PostgresPool.instance;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public getPool(): Pool {
    if (!this.pool) throw new Error('PostgreSQL not configured (POSTGRES_URL missing)');
    return this.pool;
  }

  public async query<T = any>(text: string, params?: any[]): Promise<T[]> {
    if (!this.pool) return [];
    const res = await this.pool.query(text, params);
    return res.rows as T[];
  }
}

export default PostgresPool;
