import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaCubes,
  FaLayerGroup,
  FaProjectDiagram,
  FaDownload,
  FaSignOutAlt,
} from "react-icons/fa";
import { TiExport } from "react-icons/ti";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: FaCubes, label: "App Type", route: "apptype" },
    { icon: FaLayerGroup, label: "Features", route: "features" },
    { icon: FaProjectDiagram, label: "UI Components", route: "uicomponents" },
    { icon: FaDownload, label: "Logic Workflow", route: "logicworkflow" },
    { icon: TiExport, label: "Export", route: "export" },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-[#0b1522] via-[#071b33] to-[#163256] flex flex-col border-r border-white/10 justify-between py-6 px-4">
      <div>
        <img className="mb-8 size-100" src="/images/logo.svg" alt="NeuraForge Logo" />
        <ul className="space-y-1">
          {navItems.map(({ icon: Icon, label, route }, index) => {
            const isActive = location.pathname.includes(route);
            return (
              <li
                key={index}
                onClick={() => navigate(`/${route}`)}
                className={`flex items-center py-2 px-3 rounded cursor-pointer transition duration-200
                  ${isActive ? "bg-[#0a2540] text-blue-400" : "text-white hover:bg-[#0a2540]"}`}
              >
                <Icon className="mr-3 text-lg" />
                <span className="text-sm">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="flex items-center  text-gray-400 hover:text-white mt-8 transition">
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;


