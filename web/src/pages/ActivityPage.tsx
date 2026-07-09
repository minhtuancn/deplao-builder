import { useEffect, useState, useCallback, useRef } from 'react';
import { api } from '../lib/api';
import { useSocketEvent } from '../lib/useSocket';
import { useSocketStore } from '../store/socketStore';

interface ActivityEntry {
  id: number;
  user_id: number;
  action: string;
  entity_type: string | null;
  entity_id: string | null;
  meta: Record<string, unknown> | null;
  created_at: number;
  user_name: string;
}

/** Human-readable label for activity actions */
const ACTION_LABELS: Record<string, string> = {
  'password.change': 'Đổi mật khẩu',
  'user.login': 'Đăng nhập',
  'user.logout': 'Đăng xuất',
  'crm.campaign.create': 'Tạo chiến dịch',
  'crm.campaign.update': 'Cập nhật chiến dịch',
  'crm.campaign.delete': 'Xóa chiến dịch',
  'crm.note.create': 'Tạo ghi chú',
  'crm.note.delete': 'Xóa ghi chú',
  'crm.tag.create': 'Tạo tag',
  'crm.tag.delete': 'Xóa tag',
  'erp.task.create': 'Tạo công việc',
  'erp.task.update': 'Cập nhật công việc',
  'erp.task.delete': 'Xóa công việc',
  'erp.note.create': 'Tạo ghi chú ERP',
  'erp.note.delete': 'Xóa ghi chú ERP',
  'workflow.create': 'Tạo workflow',
  'workflow.run': 'Chạy workflow',
  'workflow.toggle': 'Bật/tắt workflow',
  'workflow.delete': 'Xóa workflow',
};

function formatAction(action: string): string {
  return ACTION_LABELS[action] || action.replace(/\./g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function getActionIcon(action: string): string {
  if (action.includes('password')) return '🔑';
  if (action.includes('login')) return '🔓';
  if (action.includes('logout')) return '🔒';
  if (action.includes('campaign')) return '📢';
  if (action.includes('note')) return '📝';
  if (action.includes('tag')) return '🏷️';
  if (action.includes('task')) return '✅';
  if (action.includes('workflow')) return '⚡';
  return '📌';
}

export default function ActivityPage() {
  const [logs, setLogs] = useState<ActivityEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  const fetchLogs = useCallback(async () => {
    try {
      const data = await api.get('/activity/logs?limit=100');
      setLogs(data.logs || []);
    } catch (err) {
      console.error('Activity fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchLogs(); }, [fetchLogs]);

  // Real-time: prepend new activity events when they arrive
  const connected = useSocketStore((s) => s.connected);
  useSocketEvent<any>('crm:campaignChanged', (data) => {
    if (!autoRefresh) return;
    const action = data?.action === 'save' ? 'crm.campaign.update' : 'crm.campaign.delete';
    const entry: ActivityEntry = {
      id: Date.now(),
      user_id: 0,
      action,
      entity_type: 'campaign',
      entity_id: data?.campaign?.id || data?.campaignId || null,
      meta: data,
      created_at: Date.now(),
      user_name: 'Hệ thống',
    };
    setLogs((prev) => [entry, ...prev].slice(0, 200));
  });

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📜 Lịch sử hoạt động</h1>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded accent-blue-500"
            />
            Tự động cập nhật
          </label>
          <div className="flex items-center gap-1.5 text-xs">
            <span className={`inline-block w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'}`} />
            <span className="text-gray-500">{connected ? 'Live' : 'Offline'}</span>
          </div>
          <button
            onClick={fetchLogs}
            className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg transition"
          >
            🔄 Làm mới
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      ) : logs.length === 0 ? (
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-10 text-center">
          <p className="text-gray-500">Chưa có hoạt động nào</p>
        </div>
      ) : (
        <div ref={listRef} className="bg-gray-800 rounded-xl border border-gray-700 divide-y divide-gray-700 overflow-hidden">
          {logs.map((entry) => (
            <div key={entry.id} className="flex items-start gap-3 p-4 hover:bg-gray-700/50 transition">
              <span className="text-lg mt-0.5">{getActionIcon(entry.action)}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-sm">{formatAction(entry.action)}</span>
                  {entry.entity_type && entry.entity_id && (
                    <span className="text-xs text-gray-500">
                      #{entry.entity_type}:{entry.entity_id}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-500">
                  <span>{entry.user_name}</span>
                  <span>·</span>
                  <span>{new Date(entry.created_at).toLocaleString('vi-VN')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
