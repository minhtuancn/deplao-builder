import { create } from 'zustand';
import { disconnectSocket } from '../lib/socket';

interface User {
  id: string;
  username: string;
  role?: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('deplao_token'),
  user: JSON.parse(localStorage.getItem('deplao_user') || 'null'),
  loading: false,

  login: async (username, password) => {
    set({ loading: true });
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { ok: false, error: data.error || data.message || 'Đăng nhập thất bại' };
      }
      if (data.success) {
        localStorage.setItem('deplao_token', data.token);
        localStorage.setItem('deplao_user', JSON.stringify(data.user));
        set({ token: data.token, user: data.user, loading: false });
        return { ok: true };
      }
      return { ok: false, error: 'Sai tài khoản hoặc mật khẩu' };
    } catch (err: any) {
      return { ok: false, error: err.message || 'Lỗi kết nối đến máy chủ' };
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    const token = useAuthStore.getState().token;
    if (token) {
      // Fire-and-forget logout request
      fetch('/api/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }).catch(() => {});
    }
    disconnectSocket();
    localStorage.removeItem('deplao_token');
    localStorage.removeItem('deplao_user');
    set({ token: null, user: null });
  },
}));
