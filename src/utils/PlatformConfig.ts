import * as path from 'path';
import * as os from 'os';
import * as crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;

export class PlatformConfig {
  private static instance: PlatformConfig;
  private dataDir: string;
  private cacheDir: string;
  private secretKey: Buffer;

  private constructor() {
    this.dataDir = process.env.DEPLAO_DATA_DIR || path.join(os.homedir(), '.deplao');
    this.cacheDir = process.env.DEPLAO_CACHE_DIR || path.join(os.homedir(), '.deplao', 'cache');
    const secret = process.env.SERVER_SECRET || 'deplao-default-insecure-key-32chr';
    this.secretKey = crypto.createHash('sha256').update(secret).digest();
  }

  public static getInstance(): PlatformConfig {
    if (!PlatformConfig.instance) {
      PlatformConfig.instance = new PlatformConfig();
    }
    return PlatformConfig.instance;
  }

  /** Directory for persistent data (DBs, config, cookies) */
  public static getDataDir(): string {
    return PlatformConfig.getInstance().dataDir;
  }

  /** Directory for cache files */
  public static getCacheDir(): string {
    return PlatformConfig.getInstance().cacheDir;
  }

  /** Returns false — we are never running inside Electron */
  public static isElectron(): boolean {
    return false;
  }

  /**
   * AES-256-GCM encrypt.
   * Returns "enc:<base64iv>:<base64cipher>:<base64tag>"
   */
  public static encrypt(plaintext: string): string {
    if (!plaintext) return plaintext;
    const cfg = PlatformConfig.getInstance();
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, cfg.secretKey, iv);
    let encrypted = cipher.update(plaintext, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    const tag = cipher.getAuthTag();
    return `enc:${iv.toString('base64')}:${encrypted}:${tag.toString('base64')}`;
  }

  /**
   * AES-256-GCM decrypt.
   * Input is "enc:<base64iv>:<base64cipher>:<base64tag>"
   * Falls back to plaintext for legacy unencrypted data.
   */
  public static decrypt(encryptedStr: string): string {
    if (!encryptedStr) return encryptedStr;
    if (!encryptedStr.startsWith('enc:')) {
      // Plaintext fallback (legacy data saved before encryption)
      return encryptedStr;
    }
    const parts = encryptedStr.split(':');
    if (parts.length !== 4) {
      throw new Error('Invalid encrypted string format');
    }
    const cfg = PlatformConfig.getInstance();
    const iv = Buffer.from(parts[1], 'base64');
    const encrypted = parts[2];
    const tag = Buffer.from(parts[3], 'base64');
    const decipher = crypto.createDecipheriv(ALGORITHM, cfg.secretKey, iv);
    decipher.setAuthTag(tag);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
