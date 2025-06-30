import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/contextAPI";

const cards = [
  {
    title: "Smart Support Chatbot",
    description: "AI-powered assistant for customer queries.",
    progress: 95,
  },
  {
    title: "E-commerce Recommender",
    description: "Suggests products based on user behavior.",
    progress: 88,
  },
  {
    title: "Medical FAQ Assistant",
    description: "Health-related questions with accuracy.",
    progress: 85,
  },
];

const ExportProjectsPage = () => {
  const navigate = useNavigate();
  const {
    appIdea,
    setAppIdea,
    themeType,
    colorPalette,
    theme,
    selectedFeatures,
  } = useAppContext();

  const handleExport = () => {
    console.log("✅ Final App Setup:");
    console.log("App Idea:", appIdea);
    console.log("Theme Type:", themeType);
    console.log("Color Palette:", colorPalette);
    console.log("Theme Index:", theme);
    console.log("Selected Features:", selectedFeatures);
    alert("Project Exported, Please check console");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#021728] text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 py-6">
          <div className="max-w-screen-xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Launch-Ready Projects
                </h2>
                <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                  Review, refine, and export your intelligent apps. These
                  projects are trained, tested, and ready to go live.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:opacity-90 text-black font-semibold px-4 py-2 rounded shadow text-sm w-full sm:w-auto"
                  onClick={() => {
                    navigate("/app-type");
                    setAppIdea("");
                  }}
                >
                  + Create New App
                </button>
                <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm w-full sm:w-auto">
                  Refresh Projects
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#0f1d2d] border border-blue-400 rounded-xl p-4 w-full max-w-[270px] shadow-lg"
                >
                  <div className="h-36 w-full bg-gray-800 rounded-md mb-3 flex items-center justify-center text-sm text-gray-400">
                    Project Image
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {card.description}
                  </p>
                  <p className="text-sm mb-1">
                    Progress:{" "}
                    <span className="text-green-400 font-bold">
                      {card.progress}%
                    </span>
                  </p>
                  <div className="w-full h-2 bg-gray-700 rounded-full mb-3">
                    <div
                      className="h-2 bg-green-400 rounded-full"
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                  <button className="bg-white text-black w-full py-1 rounded hover:bg-gray-200 transition text-sm">
                    Launch Project
                  </button>
                </div>
              ))}
            </div>

            {/* Bulk Export Button */}
            <div className="flex justify-center mt-10">
              <button
                className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition text-sm"
                onClick={handleExport}
              >
                Bulk Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportProjectsPage;
