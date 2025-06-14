// components/TopBarButtons.jsx
import { FaRegStickyNote } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const TopBarButtons = () => (
  <div className="absolute top-4 right-6 flex gap-3 z-10">
    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md bg-black text-white hover:border-blue-500 hover:text-blue-400 transition">
      <FaRegStickyNote />
      <span>Edit Notes</span>
    </button>
    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md bg-black text-white hover:border-blue-500 hover:text-blue-400 transition">
      <FiUpload />
      <span>Export</span>
    </button>
  </div>
);
export default TopBarButtons;