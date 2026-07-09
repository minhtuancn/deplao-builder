import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAuthStore((s) => s.login);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const ok = await login(username, password);
    if (!ok) setError('Sai tài khoản hoặc mật khẩu');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={onSubmit} className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-2xl text-white mb-6 font-bold">Deplao Web</h1>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <input className="w-full mb-3 p-2 rounded bg-gray-700 text-white" placeholder="Username"
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" className="w-full mb-4 p-2 rounded bg-gray-700 text-white" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500" type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}