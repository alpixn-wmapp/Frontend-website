import React from "react";

const FeatureCard = ({ title, description, image, active, onToggle }) => {
  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-blue-800 via-blue-300 to-gray-300">
    

      <div className="bg-gradient-to-br from-[#06172d] to-[#0e2c4f] rounded-xl p-4 h-full  text-white">
        <img
          src={image}
          alt={title}
          className="w-full   h-40 object-cover rounded-md mb-3"
        />
        <h3 className="text-md  mb-1">{title}</h3>
        <p className="text-sm text-gray-300 pt-2 mb-4">{description}</p>

        {/* Toggle Switch */}
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={active}
            onChange={onToggle}
          />
          <div
            className={`w-11 h-6 rounded-full transition-colors duration-300 ${
              active ? "bg-blue-500" : "bg-gray-600"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                active ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FeatureCard;
