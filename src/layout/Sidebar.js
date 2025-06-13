// src/layout/Sidebar.js

const Sidebar = () => {
  return (
    <div className="w-56 bg-black border-r border-gray-800 h-screen px-4 py-6">
      <h2 className="text-xl font-bold mb-8">Forge Lab</h2>
      <nav className="space-y-4">
        <a href="#" className="block text-white hover:text-blue-500">App type</a>
        <a href="#" className="block text-blue-500 font-semibold">Features</a>
        <a href="#" className="block text-white hover:text-blue-500">UI components</a>
        <a href="#" className="block text-white hover:text-blue-500">Logic & workflow</a>
        <a href="#" className="block text-white hover:text-blue-500">Export</a>
      </nav>
    </div>
  );
};

export default Sidebar;
