import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { toast } from '../store/toastStore';
import { useAuthStore } from '../store/authStore';

interface UserProfile {
  id: number;
  username: string;
  display_name: string | null;
  role: string;
  created_at: number;
}

export default function SettingsPage() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNew, setConfirmNew] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/user/profile')
      .then((data) => setProfile(data.user))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmNew) {
      toast.warning('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if (newPassword !== confirmNew) {
      toast.error('Mật khẩu mới không khớp');
      return;
    }
    if (newPassword.length < 6) {
      toast.error('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }
    setSaving(true);
    try {
      await api.put('/auth/change-password', { oldPassword, newPassword });
      toast.success('✅ Mật khẩu đã được thay đổi');
      setOldPassword('');
      setNewPassword('');
      setConfirmNew('');
    } catch (err: any) {
      toast.error(err.message || 'Lỗi đổi mật khẩu');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen overflow-auto">
      <h1 className="text-2xl font-bold mb-6">⚙️ Cài đặt</h1>

      <div className="max-w-xl space-y-6">
        {/* Profile info */}
        <section className="bg-gray-800 p-5 rounded-xl border border-gray-700">
          <h2 className="font-semibold mb-4">Thông tin tài khoản</h2>
          {loading ? (
            <p className="text-gray-400 text-sm">Đang tải...</p>
          ) : profile ? (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Tên đăng nhập:</span>
                <span>{profile.username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tên hiển thị:</span>
                <span>{profile.display_name || profile.username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Vai trò:</span>
                <span className="capitalize">{profile.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Ngày tạo:</span>
                <span>{profile.created_at ? new Date(profile.created_at).toLocaleDateString('vi-VN') : '-'}</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">Không thể tải thông tin</p>
          )}
        </section>

        {/* Change password */}
        <section className="bg-gray-800 p-5 rounded-xl border border-gray-700">
          <h2 className="font-semibold mb-4">Đổi mật khẩu</h2>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Mật khẩu cũ</label>
              <input
                type="password"
                className="w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Mật khẩu mới</label>
              <input
                type="password"
                className="w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="new-password"
                minLength={6}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Xác nhận mật khẩu mới</label>
              <input
                type="password"
                className="w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                value={confirmNew}
                onChange={(e) => setConfirmNew(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 px-5 py-2 rounded-lg text-sm transition"
            >
              {saving ? '⏳ Đang lưu...' : 'Đổi mật khẩu'}
            </button>
          </form>
        </section>

        {/* Logout */}
        <section className="bg-gray-800 p-5 rounded-xl border border-gray-700">
          <h2 className="font-semibold mb-2">Phiên đăng nhập</h2>
          <p className="text-sm text-gray-400 mb-3">Đăng xuất khỏi tất cả các thiết bị</p>
          <button
            onClick={logout}
            className="bg-red-700 hover:bg-red-600 px-5 py-2 rounded-lg text-sm transition"
          >
            🚪 Đăng xuất
          </button>
        </section>
      </div>
    </main>
  );
}
