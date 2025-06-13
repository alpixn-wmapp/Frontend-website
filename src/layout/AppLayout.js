// src/layout/AppLayout.js

import Sidebar from './Sidebar';

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default AppLayout;
