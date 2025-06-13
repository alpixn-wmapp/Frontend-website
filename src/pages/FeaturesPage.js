// src/pages/FeaturesPage.js

import { useState } from 'react';
import FeatureToggle from '../components/FeatureToggle';

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

  const handleToggle = (feature) => {
    setEnabled((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  return (
    <div className="p-6 text-white min-h-screen bg-black"> {/* 🟢 Set background here */}
      <h1 className="text-3xl font-bold mb-6">Select Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresList.map((feature) => (
          <FeatureToggle
            key={feature}
            title={feature}
            enabled={enabled[feature]}
            onToggle={() => handleToggle(feature)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
