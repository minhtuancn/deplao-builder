import * as fs from 'fs';
import * as path from 'path';
import PostgresPool from './PostgresPool';

class PostgresInit {
  public static async run(): Promise<void> {
    const pg = PostgresPool.getInstance();
    if (!pg.isEnabled()) return;
    const sqlPath = path.join(__dirname, 'schema', 'postgres-init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    const statements = sql.split(';').map(s => s.trim()).filter(Boolean);
    for (const stmt of statements) {
      await pg.query(stmt);
    }
  }
}

export default PostgresInit;