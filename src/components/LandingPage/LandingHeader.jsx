import React from "react";

const LandingHeader = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-[#0b1522] via-[#071b33] to-[#163256] py-3 px-6  border-gray-700 flex items-center justify-between">
        <div className="h-[50px]">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="h-full object-contain"
          />
        </div>
        <nav className="flex gap-10 justify-center text-md">
          <a href="#" className="hover:underline text-white">
            Home
          </a>
          <a href="#" className="hover:underline text-white">
            About
          </a>
          <a href="#" className="hover:underline text-white">
            Services
          </a>
          <a href="#" className="hover:underline text-white">
            Blog
          </a>
          <a href="#" className="hover:underline text-white">
            Contact
          </a>
        </nav>

        <div className="flex p-1 gap-2">
          <button className="rounded-md px-2 py-1 text-white outline-none border-none transition duration-300 hover:bg-blue-600 ">
            Sign In
          </button>
          <button className="rounded-md px-2 py-1 bg-white text-black outline-none border-none transition duration-300 hover:bg-gray-200">
            Register
          </button>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
