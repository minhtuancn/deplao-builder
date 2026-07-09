import { Router } from 'express';
import { TelegramService } from './TelegramService';

const router = Router();

// GET /api/telegram/status
router.get('/status', (_req, res) => {
  res.json({ success: true, data: TelegramService.getStatus() });
});

// GET /api/telegram/dialogs
router.get('/dialogs', async (_req, res) => {
  try {
    const dialogs = await TelegramService.getDialogs();
    res.json({ success: true, data: dialogs });
  } catch (e) {
    res.status(500).json({ success: false, error: (e as Error).message });
  }
});

// POST /api/telegram/send
router.post('/send', async (req, res) => {
  const { chatId, message } = req.body;
  if (!chatId || !message) {
    return res.status(400).json({ success: false, error: 'chatId and message required' });
  }
  try {
    await TelegramService.sendMessage(chatId, message);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, error: (e as Error).message });
  }
});

// POST /api/telegram/code — submit login code
router.post('/code', async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ success: false, error: 'code required' });
  }
  try {
    await TelegramService.submitCode(code);
    res.json({ success: true, message: 'Code submitted' });
  } catch (e) {
    res.status(500).json({ success: false, error: (e as Error).message });
  }
});

export default router;
