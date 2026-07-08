import { Router } from 'express';
import AuthService from './AuthService';
import PostgresPool from '../db/PostgresPool';

export const AuthRoutes = Router();

AuthRoutes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ success: false, error: 'Missing fields' });
  const pg = PostgresPool.getInstance();
  if (!pg.isEnabled()) return res.status(503).json({ success: false, error: 'PostgreSQL not configured' });
  const rows = await pg.query('SELECT * FROM app_users WHERE username = $1 AND is_active = TRUE', [username]);
  const user = rows[0];
  if (!user || !(await AuthService.verifyPassword(password, user.password_hash))) {
    return res.status(401).json({ success: false, error: 'Invalid credentials' });
  }
  const token = AuthService.signToken({ userId: user.id, role: user.role });
  await pg.query(
    'INSERT INTO app_sessions(token, user_id, expires_at, created_at) VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING',
    [token, user.id, Date.now() + 7 * 864e5, Date.now()]
  );
  res.json({ success: true, token, user: { id: user.id, username: user.username, role: user.role, displayName: user.display_name } });
});

AuthRoutes.post('/logout', async (req, res) => {
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) {
    await PostgresPool.getInstance().query('DELETE FROM app_sessions WHERE token = $1', [header.slice(7)]);
  }
  res.json({ success: true });
});

AuthRoutes.post('/register', async (req, res) => {
  const { username, password, displayName } = req.body;
  if (!username || !password) return res.status(400).json({ success: false, error: 'Missing fields' });
  const pg = PostgresPool.getInstance();
  if (!pg.isEnabled()) return res.status(503).json({ success: false, error: 'PostgreSQL required' });
  const existing = await pg.query('SELECT id FROM app_users WHERE username = $1', [username]);
  if (existing.length > 0) return res.status(409).json({ success: false, error: 'Username exists' });
  const hash = await AuthService.hashPassword(password);
  const now = Date.now();
  const result = await pg.query(
    'INSERT INTO app_users(username, password_hash, display_name, role, is_active, created_at, updated_at) VALUES($1,$2,$3,$4,TRUE,$5,$5) RETURNING id, username, role',
    [username, hash, displayName || username, 'admin', now]
  );
  const user = result[0];
  const token = AuthService.signToken({ userId: user.id, role: user.role });
  await pg.query('INSERT INTO app_sessions(token, user_id, expires_at, created_at) VALUES($1,$2,$3,$4)', [token, user.id, Date.now() + 7 * 864e5, now]);
  res.json({ success: true, token, user: { id: user.id, username: user.username, role: user.role, displayName: user.display_name || username } });
});