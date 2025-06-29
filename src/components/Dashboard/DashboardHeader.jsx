import React from "react";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-20 bg-transparent backdrop-blur-sm border-b-[1px] gap-[50px] py-4 justify-end border-gray-700 flex items-center">
      <div className="flex w-[60%] items-center justify-between  mr-[5%]">
        <nav className="flex gap-10 text-md">
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

        {/* <div className="flex p-1 gap-2"> */}
        <button className="rounded-md px-6 py-2 bg-white text-black outline-none border-none transition duration-300 hover:bg-gray-200">
          Learn More
        </button>
        {/* </div> */}
      </div>
    </header>
  );
};

export default DashboardHeader;
