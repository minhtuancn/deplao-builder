import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { toast } from '../store/toastStore';
import { useSocketRefresh } from '../lib/useSocket';
import ConfirmDialog, { type ConfirmDialogOptions } from '../components/ConfirmDialog';

interface Campaign {
  id: string;
  name: string;
  status: string;
  createdAt?: string;
}

interface CampaignStats {
  totalCampaigns?: number;
  activeCampaigns?: number;
  totalSent?: number;
}

export default function CrmPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState<CampaignStats | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  // Confirm dialog state
  const [confirm, setConfirm] = useState<{ open: boolean; options: ConfirmDialogOptions; onConfirm: () => void }>({
    open: false,
    options: { title: '', message: '' },
    onConfirm: () => {},
  });

  const ZALO_ID = 'default';

  const fetchData = async () => {
    const [camps, st] = await Promise.all([
      api.get(`/crm/campaigns?zaloId=${ZALO_ID}`),
      api.get(`/crm/stats?zaloId=${ZALO_ID}`),
    ]);
    setCampaigns(camps.campaigns || []);
    setStats(st);
  };

  useEffect(() => { fetchData(); }, []);

  // Auto-refresh on broadcast events
  useSocketRefresh('crm:campaignChanged', useCallback(() => fetchData(), []));
  useSocketRefresh('crm:noteChanged', useCallback(() => fetchData(), []));

  const createCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) { setError('Vui lòng nhập tên chiến dịch'); return; }
    setSaving(true);
    setError('');
    try {
      await api.post('/crm/campaign', { zaloId: ZALO_ID, name: formName.trim() });
      setFormName('');
      setShowForm(false);
      toast.success('Tạo chiến dịch thành công');
      await fetchData();
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message || 'Lỗi tạo chiến dịch');
    } finally {
      setSaving(false);
    }
  };

  const toggleStatus = async (id: string, current: string) => {
    try {
      const newStatus = current === 'active' ? 'paused' : 'active';
      await api.put(`/crm/campaign/${id}`, { zaloId: ZALO_ID, status: newStatus });
      toast.success(current === 'active' ? 'Đã tạm dừng chiến dịch' : 'Đã kích hoạt chiến dịch');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi cập nhật trạng thái');
    }
  };

  const doDeleteCampaign = async (id: string) => {
    try {
      await api.del(`/crm/campaign/${id}?zaloId=${ZALO_ID}`);
      toast.success('Đã xóa chiến dịch');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi xóa chiến dịch');
    }
  };

  const promptDelete = (id: string, name: string) => {
    setConfirm({
      open: true,
      options: {
        title: 'Xóa chiến dịch',
        message: `Bạn có chắc chắn muốn xóa chiến dịch "${name}"? Hành động này không thể hoàn tác.`,
        confirmLabel: 'Xóa',
        cancelLabel: 'Huỷ',
        variant: 'danger',
      },
      onConfirm: () => {
        setConfirm((c) => ({ ...c, open: false }));
        doDeleteCampaign(id);
      },
    });
  };

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">👥 CRM</h1>
          <button
            onClick={() => { setShowForm(!showForm); setError(''); }}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            {showForm ? '✕ Đóng' : '+ Tạo chiến dịch'}
          </button>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <div className="text-gray-400 text-sm">Tổng chiến dịch</div>
              <div className="text-2xl font-bold">{stats.totalCampaigns ?? 0}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <div className="text-gray-400 text-sm">Đang chạy</div>
              <div className="text-2xl font-bold text-green-400">{stats.activeCampaigns ?? 0}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <div className="text-gray-400 text-sm">Đã gửi</div>
              <div className="text-2xl font-bold text-blue-400">{stats.totalSent ?? 0}</div>
            </div>
          </div>
        )}

        {/* Create form */}
        {showForm && (
          <form onSubmit={createCampaign} className="bg-gray-800 p-4 rounded-xl border border-gray-700 mb-6">
            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
            <div className="flex gap-3">
              <input
                className="flex-1 p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                placeholder="Tên chiến dịch..."
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                disabled={saving}
                autoFocus
              />
              <button
                type="submit"
                disabled={saving}
                className="bg-green-600 hover:bg-green-500 disabled:bg-gray-600 px-4 py-2 rounded-lg text-sm transition"
              >
                {saving ? '⏳' : 'Lưu'}
              </button>
            </div>
          </form>
        )}

        {/* Campaign list */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          {campaigns.length === 0 ? (
            <p className="p-6 text-gray-500 text-center">Chưa có chiến dịch nào</p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-700 text-left text-sm text-gray-300">
                <tr>
                  <th className="p-3">Tên chiến dịch</th>
                  <th className="p-3">Trạng thái</th>
                  <th className="p-3">Ngày tạo</th>
                  <th className="p-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {campaigns.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-700/50 transition">
                    <td className="p-3 font-medium">{c.name}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          c.status === 'active' ? 'bg-green-900 text-green-300' : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {c.status === 'active' ? 'Đang chạy' : c.status === 'paused' ? 'Tạm dừng' : c.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-400">{c.createdAt ? new Date(c.createdAt).toLocaleDateString('vi-VN') : '-'}</td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => toggleStatus(c.id, c.status)}
                        className="text-sm px-3 py-1 rounded bg-yellow-700 hover:bg-yellow-600 transition"
                      >
                        {c.status === 'active' ? 'Tạm dừng' : 'Kích hoạt'}
                      </button>
                      <button
                        onClick={() => promptDelete(c.id, c.name)}
                        className="text-sm px-3 py-1 rounded bg-red-800 hover:bg-red-700 transition"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <ConfirmDialog
          open={confirm.open}
          options={confirm.options}
          onConfirm={confirm.onConfirm}
          onCancel={() => setConfirm((c) => ({ ...c, open: false }))}
        />
      </main>
  );
}
