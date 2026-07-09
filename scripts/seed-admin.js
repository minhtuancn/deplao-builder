/**
 * Seed admin user into PostgreSQL.
 *
 * Usage:
 *   node scripts/seed-admin.js [username] [password] [displayName]
 *
 * Environment:
 *   POSTGRES_URL  — PostgreSQL connection string (required)
 *
 * If arguments omitted, defaults: admin / admin123 / Admin
 */

const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

async function main() {
  const url = process.env.POSTGRES_URL;
  if (!url) {
    console.error('ERROR: POSTGRES_URL environment variable is required.');
    console.error('  Usage: POSTGRES_URL=postgresql://user:pass@host:5432/db node scripts/seed-admin.js');
    process.exit(1);
  }

  const username = process.argv[2] || 'admin';
  const password = process.argv[3] || 'admin123';
  const displayName = process.argv[4] || 'Admin';

  const pool = new Pool({ connectionString: url });
  const client = await pool.connect();

  try {
    // Check if user exists
    const existing = await client.query(
      'SELECT id FROM app_users WHERE username = $1',
      [username],
    );

    if (existing.rows.length > 0) {
      console.log(`ℹ️  User "${username}" already exists (id=${existing.rows[0].id})`);
      return;
    }

    const hash = await bcrypt.hash(password, 10);
    const now = Date.now();
    const result = await client.query(
      `INSERT INTO app_users(username, password_hash, display_name, role, is_active, created_at, updated_at)
       VALUES($1, $2, $3, 'admin', TRUE, $4, $4)
       RETURNING id`,
      [username, hash, displayName, now],
    );

    console.log(`✅ Admin user created:`);
    console.log(`   Username:    ${username}`);
    console.log(`   Password:    ${password}`);
    console.log(`   DisplayName: ${displayName}`);
    console.log(`   ID:          ${result.rows[0].id}`);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
