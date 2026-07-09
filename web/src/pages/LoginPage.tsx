import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string; general?: string }>({});
  const login = useAuthStore((s) => s.login);
  const loading = useAuthStore((s) => s.loading);
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const validate = (): boolean => {
    const errs: typeof errors = {};
    if (!username.trim()) errs.username = 'Vui lòng nhập tên đăng nhập';
    else if (username.trim().length < 3) errs.username = 'Tên đăng nhập tối thiểu 3 ký tự';
    if (!password) errs.password = 'Vui lòng nhập mật khẩu';
    else if (password.length < 4) errs.password = 'Mật khẩu tối thiểu 4 ký tự';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!validate()) return;

    const result = await login(username.trim(), password);
    if (!result.ok) {
      setErrors({ general: result.error || 'Đăng nhập thất bại' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <form
        onSubmit={onSubmit}
        noValidate
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-96 border border-gray-700"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl text-white font-bold tracking-tight">Deplao Web</h1>
          <p className="text-gray-400 text-sm mt-1">Quản lý CRM, ERP, Workflow</p>
        </div>

        {errors.general && (
          <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-2 rounded-lg mb-4 text-sm">
            {errors.general}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-1" htmlFor="username">
            Tên đăng nhập
          </label>
          <input
            id="username"
            ref={usernameRef}
            className={`w-full p-2.5 rounded-lg bg-gray-700 text-white border ${
              errors.username ? 'border-red-500' : 'border-gray-600'
            } focus:outline-none focus:border-blue-500 transition`}
            placeholder="Nhập tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
            autoComplete="username"
          />
          {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-1" htmlFor="password">
            Mật khẩu
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPw ? 'text' : 'password'}
              className={`w-full p-2.5 rounded-lg bg-gray-700 text-white border ${
                errors.password ? 'border-red-500' : 'border-gray-600'
              } focus:outline-none focus:border-blue-500 transition pr-10`}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 text-sm"
              tabIndex={-1}
            >
              {showPw ? 'Ẩn' : 'Hiện'}
            </button>
          </div>
          {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
        </div>

        <button
          className={`w-full p-2.5 rounded-lg font-semibold text-white transition ${
            loading
              ? 'bg-blue-800 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700'
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12" cy="12" r="10"
                  stroke="currentColor" strokeWidth="4" fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Đang đăng nhập...
            </span>
          ) : (
            'Đăng nhập'
          )}
        </button>
      </form>
    </div>
  );
}
