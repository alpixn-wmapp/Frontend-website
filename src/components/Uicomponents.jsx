import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import initialFeatures from "../data/features2";
import { useAppContext } from "../context/contextAPI";

const categories = [
  "Landing Pages",
  "Fonts Library",
  "Color UI Templates",
  "Themes Templates",
  "Website Pages",
  "Header Sections",
  "Dashboard Templates",
  "See All",
];

const Uicomponents = () => {
  const [features, setFeatures] = useState(initialFeatures);
  const [activeCategory, setActiveCategory] = useState("Landing Pages");
  // const [selectedCard, setSelectedCard] = useState(null);
  const { theme, setTheme } = useAppContext();
  const navigate = useNavigate();

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
        backgroundColor: "rgb(4 10 17)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />

        <div className="px-10 pt-10 relative">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 justify-start mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-2 py-1 rounded-md border transition ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "text-gray-300 border-gray-600 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setTheme(idx)}
                className={`cursor-pointer bg-[#06172d] border rounded-xl overflow-hidden shadow-lg transition-all ${
                  theme === idx
                    ? "border-blue-500 border-[2px]"
                    : "border-blue-500/10 hover:border-blue-500/40"
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-1">
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 text-sm text-white border border-white/20 rounded hover:border-blue-500 hover:text-blue-400 transition">
              Load More Templates
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mb-6 mt-4">
            <button
              onClick={() => navigate("/ui-components2")}
              className="px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200"
            >
              ← Back to App Interface
            </button>
            <button
              onClick={() => navigate("/logic-workflow")}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Continue to Logic Workflow →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uicomponents;
