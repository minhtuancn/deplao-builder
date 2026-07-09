/**
 * SecureSettingsService.ts
 * Mã hóa data nhạy cảm trong SQLite dùng AES-256-GCM (PlatformConfig).
 * Không phụ thuộc Electron safeStorage.
 */
import { PlatformConfig } from '../../utils/PlatformConfig';
import DatabaseService from '../database/DatabaseService';
import Logger from '../../utils/Logger';

/**
 * Lưu value được mã hóa vào SQLite settings.
 */
export function secureSet(key: string, value: string): void {
    if (!value && value !== '') {
        DatabaseService.getInstance().setSetting(key, '');
        return;
    }
    try {
        const encrypted = PlatformConfig.encrypt(value);
        DatabaseService.getInstance().setSetting(key, encrypted);
    } catch (err: any) {
        Logger.error(`[SecureSettings] Encrypt failed for "${key}": ${err.message}`);
        // Fallback to plaintext rather than losing data
        DatabaseService.getInstance().setSetting(key, value);
    }
}

/**
 * Đọc và giải mã value từ SQLite settings.
 * Trả về null nếu không tồn tại hoặc không giải mã được.
 */
export function secureGet(key: string): string | null {
    const raw = DatabaseService.getInstance().getSetting(key);
    if (!raw) return null;

    try {
        return PlatformConfig.decrypt(raw);
    } catch (err: any) {
        Logger.warn(`[SecureSettings] Decrypt failed for "${key}": ${err.message}`);
        return null;
    }
}

/**
 * Xóa secure setting.
 */
export function secureDelete(key: string): void {
    DatabaseService.getInstance().setSetting(key, '');
}


