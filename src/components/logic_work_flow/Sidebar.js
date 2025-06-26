import React from 'react';
import { FaCogs, FaProjectDiagram, FaSignOutAlt, FaLayerGroup, FaBoxOpen } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-41 h-screen bg-gradient-to-b from-[#041424] to-[#0b1f32] text-white flex flex-col justify-between py-6">
      
      {/* Top Section: Logo + Menu */}
      <div className="px-4">
        <div className="text-xl font-bold mb-8 text-[#39d0ff]">NeuraForge</div>
        
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-sm">
            <FaLayerGroup /> <span>App Type</span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <FaBoxOpen /> <span>Features</span>
          </li>
          <li className="text-sm mt-4 text-gray-400">UI Components</li>
          <li className="bg-white text-[#007BFF] font-semibold px-4 py-2 rounded-lg flex items-center gap-3">
            <FaProjectDiagram /> <span>Logic Workflow</span>
          </li>
          <li className="flex items-center gap-3 text-sm mt-2">
            <FaCogs /> <span>Export</span>
          </li>
        </ul>
      </div>

      {/* Bottom Section: Logout */}
      <div className="px-4">
        <div className="flex items-center gap-3 text-sm cursor-pointer">
          <FaSignOutAlt /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
