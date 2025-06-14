import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'App type', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'UI components', path: '/ui-components' },
    { name: 'Logic & workflow', path: '/frame10' },
    { name: 'Export', path: '/frame11' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-black border-r border-gray-800 px-6 py-8 z-20">
      <h2 className="text-2xl font-bold text-white mb-10">Forge Lab</h2>

      {/* Navigation menu */}
      <nav className="flex flex-col gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? 'text-blue-500 font-semibold' : 'text-white hover:text-blue-500'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
