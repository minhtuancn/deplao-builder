/**
 * Legacy socket helpers — re-exported from socketStore for backwards compat.
 *
 * Prefer using the store directly or the useSocket hooks in new code:
 *   import { useSocketStore } from '../store/socketStore';
 *   import { useSocketEvent } from '../lib/useSocket';
 */

import { useSocketStore } from '../store/socketStore';

/** Get or create the global Socket.IO instance. */
export function getSocket() {
  const { socket, connect } = useSocketStore.getState();
  if (!socket || !socket.connected) connect();
  return useSocketStore.getState().socket;
}

/** Disconnect socket (on logout). */
export function disconnectSocket() {
  useSocketStore.getState().disconnect();
}

/** Subscribe to an event filtered by workspace room. */
export function onWorkspaceEvent<T = unknown>(
  zaloId: string,
  event: string,
  handler: (data: T) => void,
) {
  const { socket } = useSocketStore.getState();
  if (!socket) return;
  const listener = (payload: { room?: string; event?: string; data: T }) => {
    if (payload.room === `ws:${zaloId}` || payload.event === event) {
      handler(payload.data);
    }
  };
  socket.on(event, listener);
  // Return unsubscribe
  return () => socket.off(event, listener);
}

/** Remove a listener. */
export function offWorkspaceEvent(event: string) {
  useSocketStore.getState().socket?.off(event);
}
