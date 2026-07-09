import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSocketStore } from '../store/socketStore';
import { useAuthStore } from '../store/authStore';
import { useWorkspaceStore } from '../store/workspaceStore';
import { api } from '../lib/api';

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
  const joinWorkspace = useSocketStore((s) => s.joinWorkspace);
  const leaveWorkspace = useSocketStore((s) => s.leaveWorkspace);
  const selectedId = useWorkspaceStore((s) => s.selectedId);
  const workspaces = useWorkspaceStore((s) => s.workspaces);
  const setSelected = useWorkspaceStore((s) => s.setSelected);
  const loadWorkspaces = useWorkspaceStore((s) => s.loadWorkspaces);

  // Load workspaces on mount
  useEffect(() => {
    loadWorkspaces(() => api.get('/workspace/list'));
  }, [loadWorkspaces]);

  // Join workspace room when connected or selection changes
  useEffect(() => {
    if (!connected) return;
    joinWorkspace(selectedId);
  }, [selectedId, connected, joinWorkspace]);

  return (
    <nav className="w-56 bg-gray-800 text-white min-h-screen p-4 flex flex-col gap-2 border-r border-gray-700">
      <h2 className="text-lg font-bold mb-2 px-2">Deplao</h2>

      {/* Connection status */}
      <div className="flex items-center gap-2 px-3 py-1.5 mb-1 text-xs bg-gray-900/50 rounded-lg">
        <span
          className={`inline-block w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'}`}
          title={connected ? 'Đã kết nối' : 'Mất kết nối'}
        />
        <span className="text-gray-400">{connected ? 'Đã kết nối' : 'Đang kết nối...'}</span>
      </div>

      {/* Workspace selector */}
      <div className="px-3 py-1.5 mb-2">
        <label className="text-[10px] uppercase tracking-wider text-gray-500 block mb-1">Workspace</label>
        <select
          value={selectedId}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full text-sm bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 outline-none focus:border-blue-500"
        >
          <option value="default">Mặc định</option>
          {workspaces.map((ws) => (
            <option key={ws.id} value={ws.id}>
              {ws.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 flex flex-col gap-1">
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
      </div>

      {/* User info at bottom */}
      <div className="pt-4 border-t border-gray-700 px-3">
        <p className="text-sm text-gray-400 truncate">{user?.username || 'Unknown'}</p>
      </div>
    </nav>
  );
}
