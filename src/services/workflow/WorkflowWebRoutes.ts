import { Router } from 'express';
import WorkflowEngineService from '../workflow/WorkflowEngineService';

export const WorkflowWebRoutes = Router();

// Templates: list available workflow templates
const WORKFLOW_TEMPLATES = [
  { id: 'auto-reply', name: 'Tự động trả lời', description: 'Tự động gửi tin nhắn trả lời khi nhận tin nhắn mới' },
  { id: 'crm-followup', name: 'CRM theo dõi', description: 'Gửi tin nhắn theo dõi cho khách hàng sau 24h' },
  { id: 'daily-report', name: 'Báo cáo hàng ngày', description: 'Tổng hợp và gửi báo cáo hoạt động mỗi ngày' },
];

WorkflowWebRoutes.get('/templates', async (_req, res) => {
  res.json({ success: true, templates: WORKFLOW_TEMPLATES });
});

WorkflowWebRoutes.get('/list', async (_req, res) => {
  try {
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    res.json({ success: true, workflows: wfs });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Static routes BEFORE :id to avoid param catch-all
WorkflowWebRoutes.get('/logs', async (_req, res) => {
  try {
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const logs: any[] = [];
    for (const wf of wfs) {
      logs.push({
        timestamp: new Date().toISOString(),
        level: 'info',
        message: `Workflow "${wf.name}" is ${wf.enabled ? 'active' : 'disabled'}`,
        event: '',
      });
    }
    res.json({ success: true, logs });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

WorkflowWebRoutes.get('/:id', async (req, res) => {
  try {
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const wf = wfs.find(w => w.id === req.params.id);
    if (!wf) return res.status(404).json({ success: false, error: 'Not found' });
    res.json({ success: true, workflow: wf });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

WorkflowWebRoutes.post('/save', async (req, res) => {
  try {
    const wf = req.body.workflow;
    const id = WorkflowEngineService.getInstance().reloadWorkflow(wf.id);
    res.json({ success: true, id: wf.id });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Simple toggle endpoint (used by web client)
WorkflowWebRoutes.post('/toggle', async (req, res) => {
  try {
    const { workflowId, zaloId } = req.body;
    if (!workflowId) return res.status(400).json({ success: false, error: 'workflowId required' });
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const wf = wfs.find(w => w.id === workflowId);
    if (wf) {
      wf.enabled = !wf.enabled;
      WorkflowEngineService.getInstance().reloadWorkflow(wf.id);
    }
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Simple run endpoint (used by web client)
WorkflowWebRoutes.post('/run', async (req, res) => {
  try {
    const { workflowId, triggerData } = req.body;
    if (!workflowId) return res.status(400).json({ success: false, error: 'workflowId required' });
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const wf = wfs.find(w => w.id === workflowId);
    if (!wf) return res.status(404).json({ success: false, error: 'Not found' });
    await WorkflowEngineService.getInstance().executeWorkflow(wf, triggerData || {}, 'manual');
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

WorkflowWebRoutes.post('/:id/toggle', async (req, res) => {
  try {
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const wf = wfs.find(w => w.id === req.params.id);
    if (wf) {
      wf.enabled = req.body.enabled !== undefined ? !!req.body.enabled : !wf.enabled;
      WorkflowEngineService.getInstance().reloadWorkflow(wf.id);
    }
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

WorkflowWebRoutes.post('/:id/run', async (req, res) => {
  try {
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const wf = wfs.find(w => w.id === req.params.id);
    if (!wf) return res.status(404).json({ success: false, error: 'Not found' });
    await WorkflowEngineService.getInstance().executeWorkflow(wf, req.body.triggerData || {}, 'manual');
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

WorkflowWebRoutes.delete('/:id', async (req, res) => {
  try {
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const idx = wfs.findIndex(w => w.id === req.params.id);
    if (idx < 0) return res.status(404).json({ success: false, error: 'Not found' });
    wfs.splice(idx, 1);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

WorkflowWebRoutes.get('/:id/logs', async (req, res) => {
  try {
    res.json({ success: true, logs: [] });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});
