import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/contextAPI";
// import logo1 from "../../public/images/ui7.png";
// import logo2 from "../../public/images/ui3.png";
// import logo3 from "../../public/images/f3.png";

const cards = [
  {
    title: "Desktop",
    subtitle: "APP",
    subtitleColor: "text-yellow-400",
    image: "images/ui7.png",
  },
  {
    title: "Web",
    subtitle: "APP",
    subtitleColor: "text-yellow-400",
    image: "images/ui3.png",
  },
  {
    title: "Export",
    subtitle: "CODE BASE",
    subtitleColor: "text-blue-400",
    image: "images/f3.png",
  },
];

const ExportProjectsPage = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
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
    console.log("\u2705 Final App Setup:");
    console.log("App Idea:", appIdea);
    console.log("Theme Type:", themeType);
    console.log("Color Palette:", colorPalette);
    console.log("Theme Index:", theme);
    console.log("Selected Features:", selectedFeatures);
    alert("Project Exported, Please check console");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-br from-[#000] to-[#05253f] text-white overflow-hidden">
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

            {/* Cards Grid (Styled as Image Cards) */}
            <div className="flex justify-center items-center gap-4 flex-nowrap overflow-hidden max-w-5xl mx-auto">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`h-[400px] rounded-md overflow-hidden relative border-2 border-blue-500 transition-all duration-700 ease-in-out flex-shrink-0 ${
                    hoveredCardIndex === idx ? "flex-grow-[1]" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "175px",
                  }}
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  <div className="flex absolute bottom-4 items-center gap-10 left-4 z-10">
                    <div className="flex flex-col">
                      <h3 className="text-white text-xl font-bold">
                        {card.title}
                      </h3>
                      <p className={`text-sm font-bold ${card.subtitleColor}`}>
                        {card.subtitle}
                      </p>
                    </div>
                    {hoveredCardIndex === idx && (
                      <div className="">
                        <button className="bg-gradient-to-r from-blue-950 to-blue-500 px-[2rem] rounded-lg py-[.25rem] text-white">
                          Export
                        </button>
                      </div>
                    )}
                  </div>
                  <div
                    className={`absolute inset-0 bg-black ${
                      hoveredCardIndex === idx ? "opacity-20" : "opacity-60"
                    }`}
                  />
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
