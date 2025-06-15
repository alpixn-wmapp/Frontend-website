import React from 'react';

const FeatureToggle = ({ title, enabled, onToggle }) => {
  return (
    <div
      className={`bg-[#111827] rounded-xl p-6 text-white w-full sm:w-64 h-36 cursor-pointer 
                  flex flex-col justify-between transition border 
                  ${enabled ? 'border-blue-500 shadow-lg' : 'border-gray-700'}`}
      onClick={onToggle}
    >
      <div className="text-lg font-semibold">{title}</div>
      <div
        className={`w-10 h-5 bg-gray-700 rounded-full flex items-center transition-all`}
      >
        <div
          className={`w-4 h-4 rounded-full transition-all ml-1 
                      ${enabled ? 'translate-x-5 bg-blue-500' : 'bg-gray-400'}`}
        />
      </div>
    </div>
  );
};

export default FeatureToggle;
