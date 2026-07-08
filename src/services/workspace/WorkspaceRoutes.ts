import { Router } from 'express';
import PostgresPool from '../db/PostgresPool';
import WorkspaceManager from '../../utils/WorkspaceManager';

export const WorkspaceRoutes = Router();

WorkspaceRoutes.get('/list', async (req, res) => {
  const pg = PostgresPool.getInstance();
  if (!pg.isEnabled()) {
    const wss = WorkspaceManager.getInstance().listWorkspaces();
    return res.json({ success: true, workspaces: wss });
  }
  const rows = await pg.query('SELECT * FROM workspace_registry ORDER BY created_at DESC');
  res.json({ success: true, workspaces: rows });
});

WorkspaceRoutes.post('/create', async (req, res) => {
  const { name, type, dbPath, bossUrl, relayPort } = req.body;
  if (!name || !type) return res.status(400).json({ success: false, error: 'Missing name/type' });
  const pg = PostgresPool.getInstance();
  if (!pg.isEnabled()) return res.status(503).json({ success: false, error: 'PostgreSQL required' });
  const id = `ws_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = Date.now();
  await pg.query(
    `INSERT INTO workspace_registry(id, name, type, db_path, boss_url, relay_port, relay_enabled, created_at, updated_at)
     VALUES($1,$2,$3,$4,$5,$6,FALSE,$7,$7)`,
    [id, name, type, dbPath || `${id}.db`, bossUrl || null, relayPort || null, now]
  );
  res.json({ success: true, workspace: { id, name, type, dbPath, bossUrl, relayPort } });
});

WorkspaceRoutes.delete('/:id', async (req, res) => {
  const pg = PostgresPool.getInstance();
  if (pg.isEnabled()) {
    await pg.query('DELETE FROM workspace_registry WHERE id = $1', [req.params.id]);
  }
  res.json({ success: true });
});

WorkspaceRoutes.get('/:id', async (req, res) => {
  const pg = PostgresPool.getInstance();
  if (!pg.isEnabled()) return res.status(503).json({ success: false, error: 'PostgreSQL required' });
  const rows = await pg.query('SELECT * FROM workspace_registry WHERE id = $1', [req.params.id]);
  if (!rows[0]) return res.status(404).json({ success: false, error: 'Not found' });
  res.json({ success: true, workspace: rows[0] });
});