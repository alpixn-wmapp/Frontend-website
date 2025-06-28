import React, { useRef, useEffect } from "react";
import { CiCamera } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { PiCalculatorThin, PiGlobeLight, PiStarFourFill } from "react-icons/pi";
import "../../../src/custom.css";

const Hero = () => {
  const videoRef = useRef(null);
  const buttons = [
    { icon: <CiCamera size={20} />, label: "Clone a Screenshot" },
    { icon: <FaFigma size={18} />, label: "Import from Figma" },
    { icon: <MdOutlineDashboard size={18} />, label: "Landing Page" },
    { icon: <PiCalculatorThin size={18} />, label: "Calculate Factorial" },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] z-20">
        <img
          src="/images/orb.png"
          alt="rotating orb"
          className="w-full border-2 h-full object-contain"
        />
      </div> */}
      <div className="absolute top-[68%] left-[15%] -translate-x-1/2 w-[1000px] h-[1000px] rounded-full z-20 bg-[conic-gradient(at_center,_#2d7cf0,_#f3cc30,_#fca5f1,_#2d7cf0)] orb-spin shadow-[0_0_150px_60px_rgba(37,99,235,0.8)]" />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />
      {/* Top Center Dark Gradient Overlay */}
      <div className="h-[1000px] w-[1000px] rounded-full top-[-90%] left-1/2 -translate-x-1/2 absolute blur-[150px] z-0 bg-[radial-gradient(circle,_#000000_30%,_#010f1a_70%,_transparent_100%)]" />

      <PiStarFourFill className="absolute top-20 left-60 text-yellow-400 text-xl z-20 " />
      <PiStarFourFill className="absolute top-40 right-60 text-blue-400 text-xl z-20" />
      <PiStarFourFill className="absolute top-60 left-80 text-blue-400 text-xl z-20" />
      <PiStarFourFill className="absolute bottom-80 right-80 text-yellow-400 text-xl z-20" />

      {/* Overlay Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            What do you want to{" "}
            <span className="bg-gradient-to-r from-[#2d96d2] via-[#eeb011] to-[#2d96d2] bg-clip-text text-transparent">
              Forge?
            </span>
          </h1>
          <p className="text-xl">
            Prompt, run, edit, and deploy full-stack web and mobile apps.
          </p>
        </div>

        {/* Input Card */}
        <div className="w-full flex flex-col gap-2 bg-white/5 backdrop-blur-[5px] border-2 border-blue-100/75 rounded-2xl p-4 max-w-[50%] mt-16">
          {/* <div className="text-white text-sm mb-4">
            Ask us to create a prototype...
          </div> */}
          <div className="w-full">
            <textarea
              rows={5}
              className="outline-none border-none w-full bg-transparent appearance-none resize-none overflow-y-auto thin-scrollbar"
              placeholder="Ask us to create a prototype..."
            />
          </div>

          <div className="flex items-center justify-end gap-4">
            {/* Top right buttons */}
            <div className="flex gap-3 items-center text-sm">
              <button className="flex items-center text-sm gap-1 text-white/80 hover:text-white">
                <FiPaperclip /> <button>Add file</button>
              </button>
            </div>
            {/* Bottom right send */}
            <div className=" flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white">
                <PiGlobeLight size={20} /> Public
              </button>
              <button className="bg-white text-black rounded-full p-2 shadow-md transition">
                <FaArrowUpLong />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-6 flex gap-3 flex-wrap justify-center">
          {buttons.map((btn, index) => (
            <div
              key={index}
              className="flex h-[35px] items-center bg-gray-800/80 rounded-lg px-3 gap-2 text-sm font-medium text-white shadow-md hover:opacity-80 transition"
            >
              {btn.icon}
              <button>{btn.label}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
