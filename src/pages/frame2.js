import React from "react";

const DashboardPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-black">
        {/* Logo */}
        <div className="text-cyan-400 text-xl font-bold">
          NeuroForge
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pravatar.cc/40" // placeholder profile image
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-center text-xl font-semibold bg-gray-800 px-4 py-2 rounded w-fit mx-auto border-b-2 border-blue-400">
          Dashboard
        </h1>

        {/* Recent Interactions */}
        <section className="mt-10">
          <h2 className="text-lg mb-4">Recent Interactions</h2>
          <div className="border border-blue-500 rounded-md p-6 w-64 text-center">
            <div className="text-white text-md font-medium mb-2">Forge A New Project</div>
            <div className="text-sm text-blue-400 underline cursor-pointer">Understand With Demo</div>
          </div>
        </section>

        {/* All Projects */}
        <section className="mt-10">
          <h2 className="text-lg mb-4">All Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 h-32 rounded-md p-4">
              <p className="text-white">Web App Chat</p>
              <p className="text-gray-400 text-sm">jaf-for</p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-700" />

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 h-32 rounded-md flex items-center justify-center text-center p-4">
            <div>
              <p className="text-white">Explore a demo Project</p>
            </div>
          </div>

          <div className="bg-gray-800 h-32 rounded-md p-4">
            <p className="text-white font-medium mb-1">
              NeuroForge projects are containers for your apps
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Apps are isolated. They feature live editing, databases and hosting.
            </p>
            <a href="#" className="text-blue-400 text-sm underline">
              Learn more
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-xs text-gray-500 mt-10">
          Support · Terms · Privacy policy
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
