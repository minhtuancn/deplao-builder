import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import { useAuthStore } from './authStore';

interface SocketState {
  connected: boolean;
  socket: Socket | null;
  connect: () => void;
  disconnect: () => void;
  joinWorkspace: (wsId: string) => void;
  leaveWorkspace: (wsId: string) => void;
}

export const useSocketStore = create<SocketState>((set, get) => ({
  connected: false,
  socket: null,

  connect: () => {
    const existing = get().socket;
    if (existing?.connected) return;
    if (existing) existing.disconnect();

    const token = useAuthStore.getState().token;
    if (!token) return; // can't connect without token

    const s: Socket = io({
      auth: { token },
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 2000,
      reconnectionDelayMax: 15000,
    });

    s.on('connect', () => {
      set({ connected: true });
    });

    s.on('disconnect', () => {
      set({ connected: false });
    });

    s.on('connect_error', (err: Error) => {
      console.debug('[socket] connect_error:', err.message);
      if (err.message.includes('auth') || err.message.includes('401') || err.message.includes('Invalid token')) {
        // Don't logout here — token might be temporarily invalid
        // If token is genuinely bad, authStore.login error will handle it
      }
    });

    set({ socket: s });
  },

  disconnect: () => {
    const s = get().socket;
    if (s) {
      s.removeAllListeners();
      s.disconnect();
    }
    set({ socket: null, connected: false });
  },

  joinWorkspace: (wsId: string) => {
    get().socket?.emit('join', wsId);
  },

  leaveWorkspace: (wsId: string) => {
    get().socket?.emit('leave', wsId);
  },
}));
