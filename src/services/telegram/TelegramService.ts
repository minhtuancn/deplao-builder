import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import { PlatformConfig } from '../../utils/PlatformConfig';
import Logger from '../../utils/Logger';
import * as fs from 'fs';
import * as path from 'path';

const API_ID = Number(process.env.TELEGRAM_API_ID) || 0;
const API_HASH = process.env.TELEGRAM_API_HASH || '';
const PHONE = process.env.TELEGRAM_PHONE || '';
const PASSWORD = process.env.TELEGRAM_PASSWORD || '';

export class TelegramService {
  private static client: TelegramClient | null = null;
  private static sessionPath: string = '';
  private static connected = false;

  public static async initialize(): Promise<void> {
    if (!API_ID || !API_HASH) {
      Logger.warn('[Telegram] TELEGRAM_API_ID / TELEGRAM_API_HASH not set — skipping');
      return;
    }

    this.sessionPath = path.join(PlatformConfig.getDataDir(), 'telegram-session.txt');

    let session = new StringSession('');
    if (fs.existsSync(this.sessionPath)) {
      const saved = fs.readFileSync(this.sessionPath, 'utf-8').trim();
      if (saved) {
        session = new StringSession(saved);
      }
    }

    this.client = new TelegramClient(session, API_ID, API_HASH, {
      connectionRetries: 5,
    });

    await this.client.start({
      phoneNumber: async () => {
        if (!PHONE) throw new Error('TELEGRAM_PHONE not set');
        return PHONE;
      },
      password: async () => PASSWORD,
      phoneCode: async () => {
        const code = process.env.TELEGRAM_CODE || '';
        if (!code) throw new Error('TELEGRAM_CODE required for login (set env var or use /api/telegram/code)');
        return code;
      },
      onError: (err: Error) => {
        Logger.error('[Telegram] Login error:', err.message);
      },
    });

    // Save session for future use
    fs.writeFileSync(this.sessionPath, session.save());
    this.connected = true;
    Logger.log('[Telegram] ✅ Connected');

    // Start message event handler
    this.client.addEventHandler((event: any) => {
      Logger.log('[Telegram] New event:', event.className);
      // TODO: handle messages — post to activity log, trigger webhooks, etc.
    });
  }

  public static isConnected(): boolean {
    return this.client !== null && this.connected;
  }

  public static getStatus(): { connected: boolean; apiConfigured: boolean } {
    return {
      connected: this.isConnected(),
      apiConfigured: !!(API_ID && API_HASH),
    };
  }

  public static async sendMessage(chatId: string, message: string): Promise<void> {
    if (!this.client) throw new Error('Telegram not initialized');
    await this.client.sendMessage(chatId, { message });
  }

  public static async getDialogs(): Promise<Array<{ id: string; name: string; unreadCount: number }>> {
    if (!this.client) throw new Error('Telegram not initialized');
    const dialogs = await this.client.getDialogs();
    return dialogs.map((d: any) => ({
      id: String(d.id),
      name: d.name || d.title || String(d.id),
      unreadCount: d.unreadCount || 0,
    }));
  }

  /** Submit the phone code during login (if not set via env) */
  public static async submitCode(code: string): Promise<void> {
    process.env.TELEGRAM_CODE = code;
    if (this.client && !this.connected) {
      await this.initialize();
    }
  }
}
