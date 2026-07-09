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

CRMWebRoutes.post('/campaign', async (req, res) => {
  const { zaloId, name } = req.body;
  if (!zaloId || !name) return res.status(400).json({ success: false, error: 'zaloId and name required' });
  try {
    const db = DatabaseService.getInstance();
    const campaign = {
      owner_zalo_id: zaloId,
      name,
      template_message: '',
      friend_request_message: '',
      campaign_type: 'message' as const,
      status: 'draft' as const,
      delay_seconds: 5,
      created_at: Date.now(),
    };
    const id = db.saveCRMCampaign(campaign);
    res.json({ success: true, id, campaign: { ...campaign, id } });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

CRMWebRoutes.put('/campaign/:id', async (req, res) => {
  const { zaloId, status } = req.body;
  const { id } = req.params;
  if (!zaloId) return res.status(400).json({ success: false, error: 'zaloId required' });
  if (!id) return res.status(400).json({ success: false, error: 'campaign id required' });

  try {
    const db = DatabaseService.getInstance();
    if (status) {
      db.updateCRMCampaignStatus(Number(id), status);
    }
    const campaigns = db.getCRMCampaigns(zaloId);
    const updated = campaigns.find((c: any) => String(c.id) === id);
    res.json({ success: true, campaign: updated });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

CRMWebRoutes.delete('/campaign/:id', async (req, res) => {
  const zaloId = req.query.zaloId as string;
  const { id } = req.params;
  if (!zaloId) return res.status(400).json({ success: false, error: 'zaloId required' });
  try {
    const db = DatabaseService.getInstance();
    // Note: deleteCRMCampaign(campaignId, ownerZaloId)
    db.deleteCRMCampaign(Number(id), zaloId);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

CRMWebRoutes.get('/stats', async (req, res) => {
  const zaloId = req.query.zaloId as string;
  const sinceTs = Number(req.query.sinceTs) || Date.now() - 864e5;
  const untilTs = Number(req.query.untilTs) || Date.now();
  if (!zaloId) return res.status(400).json({ success: false, error: 'zaloId required' });
  try {
    const db = DatabaseService.getInstance();
    const campaigns = db.getCRMCampaigns(zaloId) || [];
    const stats = db.getActivityStats(zaloId, sinceTs, untilTs);
    res.json({
      success: true,
      totalCampaigns: campaigns.length,
      activeCampaigns: campaigns.filter((c: any) => c.status === 'active').length,
      totalSent: stats?.sentCount || 0,
      ...stats,
    });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});
