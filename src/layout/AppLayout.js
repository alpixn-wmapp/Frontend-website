// src/layout/AppLayout.js

import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Sidebar takes fixed space */}
      <Sidebar />

      {/* Main content with left margin and padding */}
      <main className="flex-1 ml-60 px-10 py-8 relative">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
