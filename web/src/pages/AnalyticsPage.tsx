import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { useSocketRefresh } from '../lib/useSocket';

interface DashboardSummary {
  totalMessages?: number;
  totalSent?: number;
  totalContacts?: number;
  totalFriends?: number;
  activeCampaigns?: number;
  aiQueries?: number;
}

interface VolumePoint {
  date: string;
  count: number;
}

interface CampaignCompare {
  name: string;
  sent: number;
  delivered: number;
}

export default function AnalyticsPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [volume, setVolume] = useState<VolumePoint[]>([]);
  const [days, setDays] = useState(7);
  const [campaignCompare, setCampaignCompare] = useState<CampaignCompare[]>([]);
  const [loading, setLoading] = useState(true);

  const ZALO_ID = 'default';

  const fetchData = useCallback(async (d?: number) => {
    const period = d ?? days;
    setLoading(true);
    try {
      const [s, v, cc] = await Promise.all([
        api.get(`/analytics/dashboard?zaloId=${ZALO_ID}`),
        api.get(`/analytics/message-volume?zaloId=${ZALO_ID}&days=${period}`),
        api.get(`/analytics/campaign-comparison?zaloId=${ZALO_ID}`).catch(() => ({ campaigns: [] })),
      ]);
      setSummary(s);
      setVolume(v.data || v || []);
      setCampaignCompare(cc.campaigns || cc || []);
    } catch (err) {
      console.error('Analytics fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Auto-refresh on relevant events
  useSocketRefresh('crm:campaignChanged', useCallback(() => fetchData(), [fetchData]));
  useSocketRefresh('crm:noteChanged', useCallback(() => fetchData(), [fetchData]));

  const maxVol = Math.max(...volume.map((v) => v.count), 1);
  const maxCmp = Math.max(...campaignCompare.map((c) => c.sent), 1);

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">📈 Analytics</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Khoảng:</span>
            {[7, 14, 30].map((n) => (
              <button
                key={n}
                onClick={() => setDays(n)}
                className={`px-3 py-1 rounded-lg text-sm transition ${
                  days === n ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {n} ngày
              </button>
            ))}
            <button
              onClick={() => fetchData()}
              className="ml-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg transition"
              title="Làm mới"
            >
              🔄
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
        ) : (
          <div className="space-y-6">
            {/* Summary cards */}
            {summary && (
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { label: 'Tổng tin nhắn', value: summary.totalMessages ?? 0, color: 'bg-blue-600' },
                  { label: 'Đã gửi', value: summary.totalSent ?? 0, color: 'bg-green-600' },
                  { label: 'Liên hệ', value: summary.totalContacts ?? 0, color: 'bg-purple-600' },
                  { label: 'Bạn bè', value: summary.totalFriends ?? 0, color: 'bg-orange-600' },
                  { label: 'AI queries', value: summary.aiQueries ?? 0, color: 'bg-pink-600' },
                ].map((c) => (
                  <div key={c.label} className={`${c.color} p-4 rounded-xl`}>
                    <div className="text-xl font-bold">{c.value.toLocaleString()}</div>
                    <div className="text-xs opacity-80 mt-1">{c.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Message volume bar chart */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h2 className="font-semibold mb-4">📊 Lượng tin nhắn ({days} ngày)</h2>
              {volume.length === 0 ? (
                <p className="text-gray-500 text-sm">Chưa có dữ liệu</p>
              ) : (
                <div className="flex items-end gap-1 h-48">
                  {volume.map((v, i) => {
                    const pct = (v.count / maxVol) * 100;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                        <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                          {v.count}
                        </div>
                        <div
                          className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer"
                          style={{ height: `${Math.max(pct, 2)}%` }}
                          title={`${v.date}: ${v.count} tin nhắn`}
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

            {/* Campaign comparison */}
            {campaignCompare.length > 0 && (
              <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
                <h2 className="font-semibold mb-4">📬 So sánh chiến dịch</h2>
                <div className="space-y-3">
                  {campaignCompare.map((c, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{c.name}</span>
                        <span className="text-gray-400">{c.sent} gửi / {c.delivered} nhận</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-500"
                          style={{ width: `${(c.delivered / Math.max(c.sent, 1)) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Usage */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h2 className="font-semibold mb-2">🤖 Sử dụng AI</h2>
              <p className="text-gray-400 text-sm">
                Tổng số truy vấn AI: <span className="text-white font-bold">{summary?.aiQueries ?? 0}</span>
              </p>
            </div>
          </div>
        )}
      </main>
  );
}
