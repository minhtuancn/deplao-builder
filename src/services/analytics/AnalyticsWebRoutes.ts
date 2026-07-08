import { Router } from 'express';
import DatabaseService from '../database/DatabaseService';

export const AnalyticsWebRoutes = Router();

const safe = (fn: () => any) => {
  try { return fn(); } catch (e: any) { return { error: e.message }; }
};

AnalyticsWebRoutes.get('/dashboard', (req, res) => {
  const zaloId = req.query.zaloId as string;
  const db = DatabaseService.getInstance();
  res.json({ success: true, ...safe(() => db.getActivityStats(zaloId, Date.now() - 30 * 864e5)) });
});

AnalyticsWebRoutes.get('/message-volume', (req, res) => {
  const zaloId = req.query.zaloId as string;
  const sinceTs = Number(req.query.sinceTs) || Date.now() - 864e5;
  const untilTs = Number(req.query.untilTs) || Date.now();
  const db = DatabaseService.getInstance();
  res.json({ success: true, data: safe(() => db.getMessageVolume(zaloId, sinceTs, untilTs, 'day')) });
});

AnalyticsWebRoutes.get('/ai-usage', (req, res) => {
  const sinceTs = Number(req.query.sinceTs) || Date.now() - 864e5;
  const untilTs = Number(req.query.untilTs) || Date.now();
  const db = DatabaseService.getInstance();
  res.json({ success: true, data: safe(() => db.getAIAnalytics(sinceTs, untilTs)) });
});

AnalyticsWebRoutes.get('/campaign-comparison', (req, res) => {
  const zaloId = req.query.zaloId as string;
  if (!zaloId) return res.status(400).json({ success: false, error: 'zaloId required' });
  const db = DatabaseService.getInstance();
  res.json({ success: true, data: safe(() => db.getCampaignComparison(zaloId)) });
});

AnalyticsWebRoutes.get('/workflow', (req, res) => {
  const zaloId = req.query.zaloId as string;
  const sinceTs = Number(req.query.sinceTs) || Date.now() - 864e5;
  const untilTs = Number(req.query.untilTs) || Date.now();
  if (!zaloId) return res.status(400).json({ success: false, error: 'zaloId required' });
  const db = DatabaseService.getInstance();
  res.json({ success: true, data: safe(() => db.getWorkflowAnalytics(zaloId, sinceTs, untilTs)) });
});