import React, { useState } from "react";
import {
  FaShapes,
  FaCubes,
  FaList,
  FaProjectDiagram,
  FaFileExport,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { NavLink, useLocation, Navigate } from "react-router-dom";

// Navigation items
const navItemsTop = [
  { name: "App Type", icon: <FaShapes />, path: "/app-type" },
  { name: "Features", icon: <FaCubes />, path: "/features" },
  { name: "UI Components", icon: <FaList />, path: "/ui-components" },
];

const navItemsBottom = [
  { name: "Logic Workflow", icon: <FaProjectDiagram />, path: "/logic-workflow" },
  { name: "Export", icon: <FaFileExport />, path: "/export-projects" },
];

// Reusable NavItem
const NavItem = ({ name, icon, path, onClick, collapsed }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap overflow-hidden ${
        isActive
          ? "bg-white text-blue-500 font-semibold shadow"
          : "text-white hover:bg-[#0a324f]"
      }`
    }
    onClick={onClick}
  >
    <span className="text-lg">{icon}</span>
    {!collapsed && <span className="text-sm">{name}</span>}
  </NavLink>
);

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar toggle
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop collapse

  // Redirect root path
  if (location.pathname === "/") {
    return <Navigate to="/export-projects" replace />;
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("Logged out");
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl bg-[#021728] p-2 rounded"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full ${
          isCollapsed ? "w-[70px]" : "w-[220px]"
        } p-4 overflow-y-auto bg-gradient-to-b from-[#021728] to-[#05253f] 
        transition-all duration-300 ease-in-out border-r border-gray-700
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:block`}
      >
        {/* Collapse Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white text-sm hover:text-yellow-400 transition"
          >
            {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
          </button>
        </div>

        {/* Logo */}
        {!isCollapsed && (
          <div className="text-white text-lg font-bold mb-6 ml-2 select-none">
            <span className="text-[#00bcd4]">Neura</span>
            <span className="text-yellow-400">Forge</span>
          </div>
        )}

        {/* Top Nav Items */}
        <div className="flex flex-col gap-3">
          {navItemsTop.map((item) => (
            <NavItem
              key={item.name}
              {...item}
              onClick={() => setIsOpen(false)}
              collapsed={isCollapsed}
            />
          ))}
        </div>

        <div className="h-6" />

        {/* Bottom Nav Items */}
        <div className="flex flex-col gap-3">
          {navItemsBottom.map((item) => (
            <NavItem
              key={item.name}
              {...item}
              onClick={() => setIsOpen(false)}
              collapsed={isCollapsed}
            />
          ))}
        </div>

        {/* Logout Button */}
        <div className={`absolute bottom-4 ${isCollapsed ? "left-2" : "left-4"}`}>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-2 py-2 text-white hover:text-red-400 transition"
          >
            <FaSignOutAlt className="text-lg" />
            {!isCollapsed && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
