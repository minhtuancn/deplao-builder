import { NavLink } from 'react-router-dom';
import { useSocketStore } from '../store/socketStore';
import { useAuthStore } from '../store/authStore';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/crm', label: 'CRM', icon: '👥' },
  { to: '/erp', label: 'ERP', icon: '📋' },
  { to: '/workflow', label: 'Workflow', icon: '⚡' },
  { to: '/analytics', label: 'Analytics', icon: '📈' },
  { to: '/activity', label: 'Activity', icon: '📜' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

export default function Nav() {
  const connected = useSocketStore((s) => s.connected);
  const user = useAuthStore((s) => s.user);

  return (
    <nav className="w-56 bg-gray-800 text-white min-h-screen p-4 flex flex-col gap-2 border-r border-gray-700">
      <h2 className="text-lg font-bold mb-4 px-2">Deplao</h2>

      {/* Connection status */}
      <div className="flex items-center gap-2 px-3 py-1.5 mb-2 text-xs bg-gray-900/50 rounded-lg">
        <span
          className={`inline-block w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'}`}
          title={connected ? 'Đã kết nối' : 'Mất kết nối'}
        />
        <span className="text-gray-400">{connected ? 'Đã kết nối' : 'Đang kết nối...'}</span>
      </div>

      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded transition ${
              isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`
          }
        >
          <span>{l.icon}</span>
          <span>{l.label}</span>
        </NavLink>
      ))}

      {/* User info at bottom */}
      <div className="mt-auto pt-4 border-t border-gray-700 px-3">
        <p className="text-sm text-gray-400 truncate">{user?.username || 'Unknown'}</p>
      </div>
    </nav>
  );
}
