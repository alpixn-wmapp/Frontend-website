// src/pages/FeaturesPage.js

import { useState } from 'react';
import { FaRegStickyNote } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import FeatureToggle from '../components/feature/FeatureToggle';


const featuresList = [
  "Database (Cloud or Local)",
  "Chat (Real-time Messaging)",
  "Payments (Stripe)",
  "File Upload",
  "API Integration",
  "Add More Features/Customize",
];

const FeaturesPage = () => {
  const [enabled, setEnabled] = useState({});
  const navigate = useNavigate();

  const handleToggle = (feature) => {
    setEnabled((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const handleNext = () => {
    navigate('/frame3');
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-6">
      
      {/* ✅ Top-left title */}
      <div className="mb-4">
        <h2 className="text-md text-gray-400">Untitled</h2>
        <p className="text-sm text-gray-500">Last edited just now</p>
      </div>

      {/* ✅ Top-right buttons */}
      <div className="absolute top-6 right-6 flex gap-3 z-10">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md bg-black text-white hover:border-blue-500 hover:text-blue-400 transition">
          <FaRegStickyNote />
          <span>Edit Notes</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md bg-black text-white hover:border-blue-500 hover:text-blue-400 transition">
          <FiUpload />
          <span>Export</span>
        </button>
      </div>

      {/* ✅ Main content */}
      <div className="pt-8">
        <h1 className="text-3xl font-bold mb-6">Select Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
          {featuresList.map((feature) => (
            <FeatureToggle
              key={feature}
              title={feature}
              enabled={enabled[feature]}
              onToggle={() => handleToggle(feature)}
              isCustom={feature === "Add More Features/Customize"}
            />
          ))}
        </div>
      </div>

      {/* ✅ Next button */}
      <button
        onClick={handleNext}
        className="fixed bottom-6 right-6 border border-gray-600 text-white hover:border-blue-500 hover:text-blue-400 px-6 py-2 rounded-md transition"
      >
        Next
      </button>
    </div>
  );
};

export default FeaturesPage;
