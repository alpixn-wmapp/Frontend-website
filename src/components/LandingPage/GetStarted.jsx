import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";

const GetStarted = () => {
  return (
    <div className="absolute top-[-45%] left-1/2 translate-x-[-50%] z-10 w-[80%] h-[350px] overflow-hidden border-2 border-blue-300/50 rounded-3xl shadow-2xl">
      <img
        src="/images/getStarted.webp"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="flex justify-center items-center absolute inset-0 bg-black/50 text-center">
        <div className="flex flex-col gap-2 items-center w-fit mx-auto">
          <p className="uppercase text-lg font-[600]">get started</p>
          <p className="text-[2rem]">Let's Make Something Great Together !</p>
          <div className="flex mt-4 cursor-pointer bg-white text-black w-fit items-center mx-auto gap-2 px-4 py-2 rounded-lg">
            <p>Contact Us</p>
            <LuMoveRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
