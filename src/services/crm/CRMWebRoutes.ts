import { Router } from 'express';
import DatabaseService from '../database/DatabaseService';

export const CRMWebRoutes = Router();

CRMWebRoutes.get('/campaigns', async (req, res) => {
  const zaloId = req.query.zaloId as string;
  if (!zaloId) return res.status(400).json({ success: false, error: 'zaloId required' });
  try {
    const db = DatabaseService.getInstance();
    const campaigns = db.getCRMCampaigns(zaloId);
    res.json({ success: true, campaigns });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

CRMWebRoutes.post('/campaigns/save', async (req, res) => {
  const { zaloId, campaign } = req.body;
  if (!zaloId || !campaign) return res.status(400).json({ success: false, error: 'Missing' });
  try {
    const db = DatabaseService.getInstance();
    const id = db.saveCRMCampaign(campaign);
    res.json({ success: true, id });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

CRMWebRoutes.get('/stats', async (req, res) => {
  const zaloId = req.query.zaloId as string;
  const sinceTs = Number(req.query.sinceTs) || Date.now() - 864e5;
  const untilTs = Number(req.query.untilTs) || Date.now();
  try {
    const db = DatabaseService.getInstance();
    const stats = db.getActivityStats(zaloId, sinceTs, untilTs);
    res.json({ success: true, ...stats });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});