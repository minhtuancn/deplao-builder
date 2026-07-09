import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: any;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('deplao_token'),
  user: JSON.parse(localStorage.getItem('deplao_user') || 'null'),
  login: async (username, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem('deplao_token', data.token);
      localStorage.setItem('deplao_user', JSON.stringify(data.user));
      set({ token: data.token, user: data.user });
      return true;
    }
    return false;
  },
  logout: () => {
    const token = useAuthStore.getState().token;
    if (token) {
      fetch('/api/auth/logout', { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
    }
    localStorage.removeItem('deplao_token');
    localStorage.removeItem('deplao_user');
    set({ token: null, user: null });
  },
}));