import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- add this
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import { CiExport } from "react-icons/ci";
import initialFeatures from "../data/features1";
import { FiEdit } from "react-icons/fi";

function Features() {
  const [features, setFeatures] = useState(initialFeatures);
  const navigate = useNavigate(); // <-- add this

  const toggleFeature = (index) => {
    const updated = features.map((feature, i) =>
      i === index ? { ...feature, active: !feature.active } : feature
    );
    setFeatures(updated);
  };

  return (
    <div
      className="flex h-screen text-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at left top, rgb(0 0 0), transparent 40%),
          radial-gradient(circle at right center, rgb(9 37 76), transparent 40%),
          radial-gradient(circle at left bottom, rgb(3 21 44), transparent 40%),
          radial-gradient(circle at 85% 75%, rgb(7 22 41), transparent 50%)
        `,
        backgroundColor: "rgb(4 10 17)",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <div className="p-6">
          <h1 className="text-3xl mt-10 text-center font-sans mb-2 font-semibold tracking-wide">
            Select Functional Features For Your App
          </h1>
          <p className="mb-6 mt-4 text-center text-md text-gray-300">
            Choose The Building Blocks Your App Needs. You Can Add, Remove, Or Customize Features At Any Time.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => navigate("/apptype")}
              className="bg-gradient-to-r from-yellow-500 to-blue-600 font-light py-2 px-4 rounded-lg"
            >
              <FiEdit className="inline mr-2 mb-1 text-2xl" />
              Edit App Details
            </button>
            <button
              onClick={() => navigate("/uicomponents")}
              className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black"
            >
              <CiExport className="inline mr-2 mb-1 text-2xl" />
              Export Setup
            </button>
          </div>

          <div className="ml-10">
            <h2 className="text-xl font-semibold mb-2">New</h2>
            <p className="text-sm text-gray-400 mb-4">The Latest And Greatest Submissions.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} onToggle={() => toggleFeature(idx)} />
              ))}
            </div>
          </div>
           <div className="flex justify-between mt-10 pl-6">
    <button
      onClick={() => navigate("/apptype")}
      className="px-4 py-2 text-sm text-white bg-transparent border border-white/30 rounded hover:border-white/60"
    >
      ←Back to App Type
    </button>
    <button
      onClick={() => navigate("/uicomponents")}
     className="bg-gradient-to-r from-yellow-500 to-blue-600 font-light py-2 px-4 rounded-lg"
    >
      Continue To Ui Components →
    </button>
  </div>
        </div>
        
      </div>
    </div>
  );
}

export default Features;
