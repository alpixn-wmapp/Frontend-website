import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const ExportProjectsPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content with Topbar and background */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Background area */}
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/image3.png")' }}
        >
          {/* No text, just background */}
        </div>
      </div>
    </div>
  );
};

export default ExportProjectsPage;
