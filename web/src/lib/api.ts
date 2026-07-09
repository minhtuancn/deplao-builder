import { useAuthStore } from '../store/authStore';

const BASE = '/api';

async function request(method: string, path: string, body?: unknown) {
  const token = useAuthStore.getState().token;
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  // Handle 401 — token expired
  if (res.status === 401) {
    useAuthStore.getState().logout();
    throw new Error('Phiên đăng nhập hết hạn');
  }

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || data.message || `Lỗi ${res.status}`);
  return data;
}

export const api = {
  get: (path: string) => request('GET', path),
  post: (path: string, body?: unknown) => request('POST', path, body),
  put: (path: string, body?: unknown) => request('PUT', path, body),
  del: (path: string) => request('DELETE', path),
};
