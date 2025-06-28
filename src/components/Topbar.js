import React from 'react';

const Topbar = () => {
  const profile = 'https://i.pravatar.cc/40?img=3'; // Random user face

  return (
    <div className="w-full h-14 bg-gradient-to-r from-[#021728] to-[#05253f] flex items-center justify-between px-8 shadow-md">
      
      {/* Left Empty or Logo (Optional) */}
      <div className="w-[150px]"></div>

      {/* Center Navigation Links */}
      <div className="flex gap-10 text-white text-sm font-light">
        <a href="#" className="hover:text-cyan-400 transition">Home</a>
        <a href="#" className="hover:text-cyan-400 transition">About</a>
        <a href="#" className="hover:text-cyan-400 transition">Services</a>
        <a href="#" className="hover:text-cyan-400 transition">Blog</a>
        <a href="#" className="hover:text-cyan-400 transition">Contact</a>
      </div>

      {/* Right Profile Icon */}
      <div className="w-[150px] flex justify-end">
        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full border border-white object-cover"
        />
      </div>
    </div>
  );
};

export default Topbar;
