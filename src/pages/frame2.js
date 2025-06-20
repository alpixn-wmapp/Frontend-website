import React from "react";

const DashboardPage = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-black h-16 flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <img src="/logo192.png" alt="logo" className="h-6 w-6" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 text-xl font-logo">
            NeuraForge
          </span>
        </div>
        <div className="flex items-center space-x-4">
              <img
                src="https://i.pravatar.cc/40" // placeholder profile image
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-600"
              />
        </div>
      </header>
  
      {/* Main content */}
      <main className="mt-[-40px] px-6 py-10 max-w-6xl mx-auto">
        <div className="w-full">
          <h1 className="text-center text-2xl font-normal bg-zinc-800 px-8 py-4 rounded-t-md w-fit mx-auto border-b-[3px] border-b-blue-600">
            Dashboard
          </h1>
        </div>


        {/* Recent Interactions */}
        <section className="mt-10">
          <h2 className="text-lg mb-4">Recent Interactions</h2>
          <div className="bg-black border border-blue-500 rounded-md p-6 w-64 h-54 text-center pt-10">
            <div className="text-white text-sm font-medium mb-20">Forge A New Project</div>
            <div className="flex justify-center mb-14 mt-[-64px]">
              <img src="/logo192.png" alt="logo" className="h-8 w-8" />
            </div>
            <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 cursor-pointer">
              Understand With Demo
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="mt-10">
          <h2 className="text-lg mb-4">All Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-black h-52 w-64 rounded-md p-4">
              <p className="text-white text-sm">Web App Chat</p>
              <p className="text-zinc-600 text-[12px] font-light">jaf-for</p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-400" />

        {/* Bottom Cards */}
       <div>
        <div className="inline-block bg-black h-40 w-64 rounded-md p-4 align-top mr-10 text-center">
          {/* React icon in center */}
          <div className="flex justify-center mb-3 mt-4">
            <img src="/logo192.png" alt="logo" className="h-8 w-8" />
          </div>

          {/* Two-line centered text */}
          <p className="text-white text-xs leading-snug">
            Explore a demo <br /> Project
          </p>
        </div>


        <div className="inline-block bg-black h-40 rounded-md p-4 w-64 align-top">
          <p className="text-white text-xs font-thin mb-1">
            NeuroForge projects are containers for your apps
          </p>
          <p className="text-zinc-600 text-[8px] mb-2">
            Apps are isolated. They feature live editing, databases and hosting.
          </p>
          <a href="#" className="ml-44 text-zinc-600 text-[9px]">
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
