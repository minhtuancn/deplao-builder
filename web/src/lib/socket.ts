import { io, Socket } from 'socket.io-client';
import { useAuthStore } from '../store/authStore';

let socket: Socket | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | null = null;

/** Get or create the global Socket.IO instance (with auth token). */
export function getSocket(): Socket {
  const token = useAuthStore.getState().token;
  if (socket && socket.connected) return socket;

  if (socket) {
    socket.disconnect();
    socket = null;
  }

  socket = io({
    path: '/socket.io',
    auth: { token },
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 2000,
    reconnectionDelayMax: 15000,
  });

  socket.on('connect', () => {
    console.log('[socket] connected', socket?.id);
    if (reconnectTimer) clearTimeout(reconnectTimer);
  });

  socket.on('disconnect', (reason) => {
    console.log('[socket] disconnected:', reason);
  });

  socket.on('connect_error', (err) => {
    console.error('[socket] connect error:', err.message);
    // If token is invalid, logout
    if (err.message.includes('auth') || err.message.includes('401')) {
      useAuthStore.getState().logout();
    }
  });

  return socket;
}

/** Disconnect socket (on logout). */
export function disconnectSocket() {
  if (socket) {
    socket.removeAllListeners();
    socket.disconnect();
    socket = null;
  }
  if (reconnectTimer) {
    clearTimeout(reconnectTimer);
    reconnectTimer = null;
  }
}

/**
 * Subscribe to a broadcast event for a workspace.
 * Server emits events to room `ws:<zaloId>`.
 */
export function onWorkspaceEvent<T = unknown>(
  zaloId: string,
  event: string,
  handler: (data: T) => void,
) {
  const s = getSocket();
  s.on(event, (payload: { room?: string; event?: string; data: T }) => {
    if (payload.room === `ws:${zaloId}` || payload.event === event) {
      handler(payload.data);
    }
  });
}

/** Remove a listener. */
export function offWorkspaceEvent(event: string) {
  const s = getSocket();
  s.off(event);
}
