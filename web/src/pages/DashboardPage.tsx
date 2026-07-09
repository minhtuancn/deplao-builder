import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { getSocket } from '../lib/socket';
import Nav from '../components/Nav';

interface DashboardStats {
  totalMessages?: number;
  totalSent?: number;
  totalContacts?: number;
  totalFriends?: number;
  activeCampaigns?: number;
  pendingTasks?: number;
}

interface VolumePoint {
  date: string;
  count: number;
}

const ZALO_ID = 'default';
const MAX_BARS = 14;

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({});
  const [volume, setVolume] = useState<VolumePoint[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const [dash, vol] = await Promise.all([
        api.get(`/analytics/dashboard?zaloId=${ZALO_ID}`),
        api.get(`/analytics/message-volume?zaloId=${ZALO_ID}&days=${MAX_BARS}`),
      ]);
      setStats(dash);
      setVolume(vol.data || vol || []);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();

    // Real-time updates via Socket.IO
    const socket = getSocket();
    const handler = (payload: any) => {
      // Refresh stats when we get an update
      api.get(`/analytics/dashboard?zaloId=${ZALO_ID}`).then(setStats).catch(() => {});
    };
    socket.on('stats:update', handler);
    socket.on('message:new', handler);

    return () => {
      socket.off('stats:update', handler);
      socket.off('message:new', handler);
    };
  }, [fetchData]);

  const cards = [
    { label: 'Tin nhắn', value: stats.totalMessages ?? 0, color: 'bg-blue-600', icon: '💬' },
    { label: 'Đã gửi', value: stats.totalSent ?? 0, color: 'bg-green-600', icon: '📤' },
    { label: 'Liên hệ', value: stats.totalContacts ?? 0, color: 'bg-purple-600', icon: '👥' },
    { label: 'Bạn bè', value: stats.totalFriends ?? 0, color: 'bg-orange-600', icon: '👤' },
  ];

  const maxCount = Math.max(...volume.map((v) => v.count), 1);

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={fetchData}
            className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded transition"
          >
            🔄 Làm mới
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        ) : (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {cards.map((card) => (
                <div key={card.label} className={`${card.color} p-5 rounded-xl shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">{card.value.toLocaleString()}</div>
                      <div className="text-sm mt-1 opacity-80">{card.label}</div>
                    </div>
                    <span className="text-3xl opacity-60">{card.icon}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra mini cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <span className="text-gray-400 text-sm">Chiến dịch đang chạy</span>
                <div className="text-2xl font-bold mt-1">{stats.activeCampaigns ?? 0}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                <span className="text-gray-400 text-sm">Công việc chờ</span>
                <div className="text-2xl font-bold mt-1">{stats.pendingTasks ?? 0}</div>
              </div>
            </div>

            {/* Message volume bar chart */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h2 className="font-semibold mb-4">📊 Lượng tin nhắn ({volume.length} ngày qua)</h2>
              {volume.length === 0 ? (
                <p className="text-gray-500 text-sm">Chưa có dữ liệu</p>
              ) : (
                <div className="flex items-end gap-2 h-40">
                  {volume.map((v, i) => {
                    const pct = (v.count / maxCount) * 100;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                        <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                          {v.count}
                        </div>
                        <div
                          className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-300 hover:opacity-80"
                          style={{ height: `${Math.max(pct, 2)}%` }}
                        />
                        <div className="text-[10px] text-gray-500 -rotate-45 origin-left whitespace-nowrap mt-1">
                          {v.date?.slice(5) || ''}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
