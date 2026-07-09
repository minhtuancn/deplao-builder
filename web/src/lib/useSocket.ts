import { useEffect, useCallback, useRef } from 'react';
import { useSocketStore } from '../store/socketStore';

/**
 * Subscribe to a socket event and call handler when it fires.
 * Cleans up on unmount or when deps change.
 */
export function useSocketEvent<T = unknown>(
  event: string,
  handler: (data: T) => void,
  deps: unknown[] = [],
) {
  const socket = useSocketStore((s) => s.socket);
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!socket) return;
    const listener = (data: T) => handlerRef.current(data);
    socket.on(event, listener);
    return () => {
      socket.off(event, listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, event, ...deps]);
}

/**
 * Auto-refresh data when a socket event fires.
 * Calls `fetcher` whenever `event` is received.
 */
export function useSocketRefresh(
  event: string,
  fetcher: () => void | Promise<void>,
  deps: unknown[] = [],
) {
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  useSocketEvent(
    event,
    useCallback(() => {
      fetcherRef.current();
    }, []),
    deps,
  );
}
