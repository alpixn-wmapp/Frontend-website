import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Apptype = () => {
   const navigate = useNavigate(); 
  const [appIdea, setAppIdea] = useState(
    `Smart Reminder Bot is an intelligent task assistant that adapts to user habits. Unlike basic reminder apps, it learns from your behavior and schedules context-aware alerts tailored to your routine. It integrates with calendars, emails, and messaging apps to provide timely nudges, ensuring you never miss a deadline or an important task.

With habit tracking, it recognizes patterns like reminding you to drink water at work or to prepare for meetings in advance. Users can customize notification intensity, from gentle nudges to urgent alerts. Voice-enabled interactions and a sleek UI make it a seamless companion for productivity.`
  );

  const [selectedStyle, setSelectedStyle] = useState("");

  return (
    <div
      className="flex h-screen text-white bg-[#0d1a2a]"
      style={{
        backgroundImage: `
          radial-gradient(circle at left top, rgb(0 0 0), transparent 40%),
          radial-gradient(circle at right center, rgb(9 37 76), transparent 40%),
          radial-gradient(circle at left bottom, rgb(3 21 44), transparent 40%),
          radial-gradient(circle at 85% 75%, rgb(7 22 41), transparent 50%)
        `,
      }}
    >
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />

        <div className="px-10 py-10 flex flex-col items-center">
          {/* Title & subtitle */}
          <h2 className="text-3xl font-semibold mb-3 text-center">
            Build Intelligent Apps At The Speed Of Thought
          </h2>
          <p className="text-center text-gray-300 mb-8 max-w-2xl">
            Describe, Customize, And Generate Fully-Functional AI-Powered Apps In Minutes. No Code, Just Pure Creativity.
          </p>

          {/* Grouped block with border */}
          <div className="rounded-xl p-4 w-full max-w-2xl mb-6 bg-gradient-to-br from-[#06172d] to-[#1f1e11] border-[1.5px] border-white/40 flex flex-col items-center">

            {/* App idea box */}
            <div className="bg-[#132c44] rounded-xl p-4 w-full border border-blue-500/20 mb-4">
              <textarea
                value={appIdea}
                onChange={(e) => setAppIdea(e.target.value)}
                className="w-full h-48 bg-transparent text-white text-sm resize-none focus:outline-none"
                placeholder="Describe your app idea here..."
              />
            </div>
             {/* Build button (inside border block) */}
            <button
              disabled={!selectedStyle}
              onClick={()=> navigate("/features")}
             className={`bg-gradient-to-r from-yellow-500 to-blue-600 font-light py-2 px-4 rounded-lg `}
             
            >
              <img className="inline mr-2" src="/images/star.svg" alt="" />
               Build With AI
            </button>

            {/* Style buttons */}
            <div className="flex gap-3 mb-1 mt-5">
              {["Minimalistic", "Classic", "Professional"].map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-3 py-1 text-xs rounded border transition ${
                    selectedStyle === style
                      ? "bg-white text-black"
                      : "border-gray-600 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>

           
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mb-5 mr-5 mt-10 pl-6 w-full max-w-5xl">
            <button
              onClick={() => navigate("/features")}
              className="px-4 py-2 text-sm text-white bg-transparent border border-white/30 rounded hover:border-white/60"
            >
              ← Back To Features
            </button>
            <button
              onClick={() => navigate("/logicworkflow")}
             className="bg-gradient-to-r from-yellow-500 to-blue-600 font-light py-2 px-4 rounded-lg"
            >
              Continue To Workflow Logic →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apptype;
