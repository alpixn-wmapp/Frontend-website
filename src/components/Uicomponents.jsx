import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ React Router hook
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import initialFeatures from "../data/features2";

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

  const navigate = useNavigate(); // ✅ Initialize navigation

  const toggleFeature = (index) => {
    const updated = features.map((feature, i) =>
      i === index ? { ...feature, active: !feature.active } : feature
    );
    setFeatures(updated);
  };

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
          {/* Top Navigation Buttons */}
          

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
                className="bg-[#06172d] border border-blue-500/10 hover:border-blue-500/40 rounded-xl overflow-hidden shadow-lg transition-all"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-1">
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
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
          <div className="flex justify-between mb-6">
            <button
              onClick={() => navigate("/features")}
              className="px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200"
            >
              ← Back to Features
            </button>
            <button
              onClick={() => navigate("/uicomponents2")}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Continue to Theme Setup →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uicomponents;
