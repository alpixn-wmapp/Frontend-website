import {
  FaShapes,
  FaCubes,
  FaList,
  FaProjectDiagram,
  FaFileExport,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useLocation, Navigate } from "react-router-dom";

const navItems = [
  { name: "App Type", icon: <FaShapes />, path: "/app-type" },
  { name: "Features", icon: <FaCubes />, path: "/features" },
  { name: "UI Components", icon: <FaList />, path: "/ui-components" },
  { name: "Logic Workflow", icon: <FaProjectDiagram />, path: "/logic-workflow" },
  { name: "Export", icon: <FaFileExport />, path: "/export" },
];

const Sidebar = () => {
  const location = useLocation();

  // Default to /export if at root
  if (location.pathname === "/") {
    return <Navigate to="/export" replace />;
  }

  return (
    <div className="bg-gradient-to-b from-[#021728] to-[#05253f] h-screen w-[220px] p-4 flex flex-col justify-between">
      {/* Top: NeuraForge logo text */}
      <div>
        <div className="text-white text-lg font-bold mb-6 ml-2 select-none">
          <span className="text-[#00bcd4]">Neura</span>
          <span className="text-yellow-400">Forge</span>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          {navItems.map(({ name, icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-white text-blue-500 font-semibold shadow"
                    : "text-white hover:bg-[#0a324f]"
                }`
              }
            >
              <span className="text-lg">{icon}</span>
              <span className="text-sm">{name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="mb-2">
        <button className="flex items-center gap-3 px-4 py-2 text-white hover:text-red-400 transition">
          <FaSignOutAlt className="text-lg" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
