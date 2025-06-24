import React from 'react';
import { FaEdit, FaDownload } from 'react-icons/fa';

const BgLayout = ({ children }) => {
  return (
   <div className="p-6 bg-gradient-to-br from-[#010b15] to-[#00060f] h-full text-white relative overflow-auto">

      
      {/* Header section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Visual Workflow Builder</h2>
          <p className="text-sm text-gray-300 mt-1">
            Build And Connect Your AI Logic With Simple, Visual Steps.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">
            <FaEdit /> Edit Notes
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition">
            <FaDownload /> Export Flow
          </button>
        </div>
      </div>

      {/* Workflow children passed from parent */}
      {children}

      {/* Save status */}
      <p className="text-xs mt-6 text-gray-400">Last Saved 2 Mins Ago</p>
    </div>
  );
};

export default BgLayout;
