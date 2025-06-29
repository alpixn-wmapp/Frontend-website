import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Topbar = () => {
  const profile = 'https://i.pravatar.cc/40?img=3';
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 text-white text-sm font-light">
      {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
        <a
          key={link}
          href="#"
          className="hover:text-cyan-400 transition px-3 py-1 border border-transparent rounded hover:border-cyan-400"
          onClick={() => setShowMobileMenu(false)}
        >
          {link}
        </a>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-r from-[#021728] to-[#05253f] px-6 py-3 flex items-center justify-between shadow-md relative border-b border-blue-500">
      
      {/* Left Spacer or Logo (Optional) */}
      <div className="w-[150px] text-white font-bold hidden lg:block">
        {/* Add logo if needed */}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <FaBars />
      </div>

      {/* Center Nav Links (Desktop) */}
      <div className="hidden lg:flex">{navLinks}</div>

      {/* Right Profile Image */}
      <div className="w-[150px] flex justify-end">
        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full border border-white object-cover"
        />
      </div>

      {/* Mobile Nav (Dropdown) */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-[#021728] px-6 py-4 flex flex-col gap-4 z-30 border-t border-blue-500">
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default Topbar;
