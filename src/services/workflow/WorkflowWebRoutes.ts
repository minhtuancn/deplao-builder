import { Router } from 'express';
import WorkflowEngineService from '../workflow/WorkflowEngineService';

export const WorkflowWebRoutes = Router();

WorkflowWebRoutes.get('/list', async (req, res) => {
  try {
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    res.json({ success: true, workflows: wfs });
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
    const id = WorkflowEngineService.getInstance().reloadWorkflow(wf.id); // reload or create
    res.json({ success: true, id: wf.id });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});

WorkflowWebRoutes.post('/:id/toggle', async (req, res) => {
  try {
    // Toggle enable/disable via reload (workflow should have enabled property)
    const wfs = WorkflowEngineService.getInstance().getWorkflows();
    const wf = wfs.find(w => w.id === req.params.id);
    if (wf) {
      wf.enabled = !!req.body.enabled;
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

WorkflowWebRoutes.get('/:id/logs', async (req, res) => {
  try {
    // Logs not directly accessible via service, return empty
    res.json({ success: true, logs: [] });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});