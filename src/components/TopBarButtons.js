// src/components/TopBarButtons.jsx
import { FaRegStickyNote } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const TopBarButtons = () => {
  return (
    <div className="flex items-start justify-between mb-9 w-full">
      <div className="text-left">
        <h2 className="text-md text-gray-400">Untitled</h2>
        <p className="text-sm text-gray-500">Last edited just now</p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md bg-black text-white hover:border-blue-500 hover:text-blue-400 transition">
          <FaRegStickyNote />
          <span>Edit Notes</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md bg-black text-white hover:border-blue-500 hover:text-blue-400 transition">
          <FiUpload />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default TopBarButtons;
