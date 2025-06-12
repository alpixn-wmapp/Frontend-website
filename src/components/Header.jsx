import React from "react";

const Header = () => {
  return (
  <header className="bg-[#00162e] py-4 px-6 border-b border-gray-700 flex items-center justify-between">
 

  {/* Centered navigation links */}
  <nav className="flex gap-10 justify-center text-sm flex-1">
    <a href="#" className="hover:underline text-white">Home</a>
    <a href="#" className="hover:underline text-white">About</a>
    <a href="#" className="hover:underline text-white">Services</a>
    <a href="#" className="hover:underline text-white">Blog</a>
    <a href="#" className="hover:underline text-white">Contact</a>
  </nav>
  
  <div className="w-10 h-10 rounded-full bg-gray-500"></div>

  {/* Placeholder div to balance the flex layout */}
  <div className="w-10 h-10"></div>
</header>

  );
};

export default Header;