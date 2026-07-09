import { useAuthStore } from '../store/authStore';

export const api = {
  async get(path: string) {
    const token = useAuthStore.getState().token;
    const res = await fetch(`/api${path}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
    return res.json();
  },
  async post(path: string, body: any) {
    const token = useAuthStore.getState().token;
    const res = await fetch(`/api${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify(body),
    });
    return res.json();
  },
};