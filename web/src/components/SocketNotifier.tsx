import { useEffect, useRef } from 'react';
import { useSocketStore } from '../store/socketStore';
import { useSocketEvent } from '../lib/useSocket';
import { toast } from '../store/toastStore';

/**
 * Global Socket.IO event → Toast notification bridge.
 *
 * Listens for broadcast events and shows non-intrusive toasts.
 * Auto-joins workspace rooms when connected.
 * Manages socket lifecycle: connects when token is available, disconnects on logout.
 */
export default function SocketNotifier() {
  const connected = useSocketStore((s) => s.connected);
  const socket = useSocketStore((s) => s.socket);
  const connect = useSocketStore((s) => s.connect);
  const disconnect = useSocketStore((s) => s.disconnect);
  const joinWorkspace = useSocketStore((s) => s.joinWorkspace);
  const token = localStorage.getItem('deplao_token');

  // Track which workspaces we've joined
  const joinedRef = useRef<Set<string>>(new Set());

  // Auto-connect when token is present
  useEffect(() => {
    if (token) {
      connect();
    } else {
      disconnect();
    }
    return () => disconnect();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-join default workspace when connected
  useEffect(() => {
    if (connected && socket && !joinedRef.current.has('default')) {
      joinWorkspace('default');
      joinedRef.current.add('default');
    }
    if (!connected) {
      joinedRef.current.clear();
    }
  }, [connected, socket, joinWorkspace]);

  // ─── Notification handlers ──────────────────────────────────────────

  // Campaign events
  useSocketEvent<any>('crm:campaignChanged', (data) => {
    const action = data?.action || 'updated';
    const name = data?.campaign?.name || data?.campaign || 'Chiến dịch';
    if (action === 'save') toast.success(`✅ ${name}: đã cập nhật`);
    else if (action === 'delete') toast.info(`🗑️ ${name}: đã xóa`);
  });

  // Note events
  useSocketEvent<any>('crm:noteChanged', (data) => {
    const action = data?.action || 'updated';
    if (action === 'save') toast.info('📝 Ghi chú đã được lưu');
    else if (action === 'delete') toast.info('🗑️ Ghi chú đã xóa');
  });

  // Tag events
  useSocketEvent<any>('crm:tagChanged', (data) => {
    const action = data?.action || 'updated';
    const tagName = data?.tag?.name || 'Tag';
    if (action === 'create') toast.success(`🏷️ Tag "${tagName}" đã tạo`);
    else if (action === 'delete') toast.info(`🗑️ Tag "${tagName}" đã xóa`);
  });

  // Contact / conversation events
  useSocketEvent<any>('db:contactFlagsChanged', () => {
    // Silently refresh — no toast needed for flag changes
  });

  // Connection status logging
  useEffect(() => {
    if (connected) {
      console.debug('[SocketNotifier] connected');
    } else {
      console.debug('[SocketNotifier] disconnected');
    }
  }, [connected]);

  return null;
}
