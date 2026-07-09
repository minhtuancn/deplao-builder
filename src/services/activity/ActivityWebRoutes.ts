import { Router, Request, Response } from 'express';
import PostgresPool from '../db/PostgresPool';

export const ActivityWebRoutes = Router();

/**
 * GET /api/activity/logs
 * Returns recent activity/audit log entries.
 * Query params: limit (default 50), offset (default 0), action (optional filter)
 */
ActivityWebRoutes.get('/logs', async (req: Request, res: Response) => {
  const pg = PostgresPool.getInstance();
  if (!pg.isEnabled()) {
    return res.json({ success: true, logs: [] });
  }

  const limit = Math.min(Math.max(parseInt(req.query.limit as string) || 50, 1), 200);
  const offset = Math.max(parseInt(req.query.offset as string) || 0, 0);
  const actionFilter = req.query.action as string | undefined;

  try {
    let sql = `
      SELECT a.id, a.user_id, a.action, a.entity_type, a.entity_id, a.meta, a.created_at,
             COALESCE(u.display_name, u.username, 'Unknown') AS user_name
      FROM audit_log a
      LEFT JOIN app_users u ON u.id = a.user_id
    `;
    const params: any[] = [];

    if (actionFilter) {
      sql += ` WHERE a.action LIKE $1`;
      params.push(`%${actionFilter}%`);
    }

    sql += ` ORDER BY a.created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const rows = await pg.query(sql, params);
    res.json({ success: true, logs: rows, total: rows.length });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});
