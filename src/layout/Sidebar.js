// src/components/Sidebar.jsx

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/app-type', label: 'App type' },
    { path: '/features', label: 'Features' },
    { path: '/ui-components', label: 'UI components' },
    { path: '/logic-workflow', label: 'Logic & workflow' },
    { path: '/export', label: 'Export' },
  ];

  return (
    <aside className="w-56 bg-black border-r border-gray-800 h-screen px-4 py-6 overflow-y-auto fixed left-0 top-0">
      <h2 className="text-2xl font-bold text-white mb-8">Forge Lab</h2>

      <nav className="flex flex-col gap-4 text-sm">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? 'text-blue-500 font-semibold'
                  : 'text-white hover:text-blue-400'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
