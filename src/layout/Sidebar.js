const Sidebar = () => {
  return (
    <aside className="w-56 bg-black border-r border-gray-800 h-screen px-4 py-6 overflow-y-auto">
      <h2 className="text-2xl font-bold text-white mb-8">Forge Lab</h2>

      {/* Navigation menu */}
      <nav className="flex flex-col gap-4 text-sm">
        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-200">
          App type
        </a>
        <a href="#" className="text-blue-500 font-semibold">
          Features
        </a>
        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-200">
          UI components
        </a>
        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-200">
          Logic & workflow
        </a>
        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-200">
          Export
        </a>
      </nav>

    
    
    </aside>
  );
};

export default Sidebar;
