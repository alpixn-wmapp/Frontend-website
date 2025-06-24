import React from 'react';

const ProjectCard = ({ title, description, image, progress }) => {
  return (
    <div className="bg-[#0f1d2d] rounded-xl border border-blue-300 p-4 w-[300px] text-white shadow-md">
      <img src={image} alt={title} className="rounded-md mb-3 h-36 w-full object-cover" />
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-300 mb-3">{description}</p>
      <p className="text-sm mb-1">Progress: <span className="text-green-400 font-bold">{progress}%</span></p>
      <button className="bg-white text-black w-full mt-2 py-1 rounded hover:bg-gray-200 transition">
        Launch Project
      </button>
    </div>
  );
};

export default ProjectCard;
