import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/crm', label: 'CRM', icon: '👥' },
  { to: '/erp', label: 'ERP', icon: '📋' },
  { to: '/workflow', label: 'Workflow', icon: '⚡' },
  { to: '/analytics', label: 'Analytics', icon: '📈' },
];

export default function Nav() {
  return (
    <nav className="w-56 bg-gray-800 text-white min-h-screen p-4 flex flex-col gap-2 border-r border-gray-700">
      <h2 className="text-lg font-bold mb-4 px-2">Deplao</h2>
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
    </nav>
  );
}