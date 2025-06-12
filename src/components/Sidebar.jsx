import React from "react";
import { FaCubes, FaLayerGroup, FaProjectDiagram, FaDownload, FaSignOutAlt } from "react-icons/fa";
import { TiExport } from "react-icons/ti";
const Sidebar = () => {
  const navItems = [
    { icon: FaCubes, label: "App Type" },
    { icon: FaLayerGroup, label: "Features" },
    { icon: FaProjectDiagram, label: "UI Components" },
    { icon: FaDownload, label: "Logic Workflow" },
    { icon: TiExport, label: "Export" },
  ];

  return (
    <aside className="w-64 bg-[#021122] flex flex-col border-r border-white justify-between py-6 px-4">
      <div>
        <h1 className="text-2xl font-bold mb-8 text-blue-400">NeuraForge</h1>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center text-white py-2 px-2 rounded hover:bg-[#0a2540] cursor-pointer }`}
            >
              <item.icon className="mr-3 " /> {item.label}
            </li>
          ))}
        </ul>
      </div>
      <button className="flex items-center text-gray-400 hover:text-white">
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
