import { Router } from 'express';
import ErpTaskService from '../erp/ErpTaskService';
import ErpCalendarService from '../erp/ErpCalendarService';
import ErpNoteService from '../erp/ErpNoteService';

export const ErpWebRoutes = Router();

// ─── Tasks ────────────────────────────────────────────────────────────────────
ErpWebRoutes.get('/tasks', (req, res) => {
  try {
    const tasks = ErpTaskService.getInstance().listTasks(req.query as any);
    res.json({ success: true, tasks });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

ErpWebRoutes.get('/tasks/:id', (req, res) => {
  try {
    const task = ErpTaskService.getInstance().getTaskDetail(req.params.id);
    if (!task) return res.status(404).json({ success: false, error: 'Not found' });
    res.json({ success: true, task });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

ErpWebRoutes.post('/tasks/create', (req, res) => {
  try {
    const { input, reporterId } = req.body;
    const task = ErpTaskService.getInstance().createTask(input, reporterId || 'system');
    res.json({ success: true, task });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

ErpWebRoutes.post('/tasks/:id/update', (req, res) => {
  try {
    const { patch, actorId } = req.body;
    const task = ErpTaskService.getInstance().updateTask(req.params.id, patch, actorId || 'system');
    res.json({ success: true, task });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

// ─── Calendar ──────────────────────────────────────────────────────────────────
ErpWebRoutes.get('/calendar/events', (req, res) => {
  try {
    const { from, to, organizerId, attendeeId, limit, offset } = req.query as any;
    const events = ErpCalendarService.getInstance().listEvents({
      from: from ? Number(from) : Date.now() - 30 * 864e5,
      to: to ? Number(to) : Date.now() + 30 * 864e5,
      organizerId, attendeeId, limit, offset,
    });
    res.json({ success: true, events });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

ErpWebRoutes.post('/calendar/create', (req, res) => {
  try {
    const { input, organizerId } = req.body;
    const event = ErpCalendarService.getInstance().createEvent(input, organizerId || 'system');
    res.json({ success: true, event });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

ErpWebRoutes.delete('/calendar/:id', (req, res) => {
  try {
    ErpCalendarService.getInstance().deleteEvent(req.params.id);
    res.json({ success: true });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

// ─── Notes ─────────────────────────────────────────────────────────────────────
ErpWebRoutes.get('/notes', (req, res) => {
  try {
    const notes = ErpNoteService.getInstance().listNotes(req.query as any);
    res.json({ success: true, notes });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

ErpWebRoutes.get('/notes/:id', (req, res) => {
  try {
    const note = ErpNoteService.getInstance().getNote(req.params.id);
    if (!note) return res.status(404).json({ success: false, error: 'Not found' });
    res.json({ success: true, note });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});

ErpWebRoutes.post('/notes/create', (req, res) => {
  try {
    const { input, authorId } = req.body;
    const note = ErpNoteService.getInstance().createNote(input, authorId || 'system');
    res.json({ success: true, note });
  } catch (e: any) { res.status(500).json({ success: false, error: e.message }); }
});