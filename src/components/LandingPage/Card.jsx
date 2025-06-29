import React from "react";
import { CgGitFork } from "react-icons/cg";
import { LuUtensilsCrossed } from "react-icons/lu"; // or any fork icon you prefer

const Card = ({ image, title, description, avatar, projectName, forks }) => {
  // Function to truncate description after 30 words
  const truncateDescription = (text) => {
    const words = text.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className=" flex flex-col justify-between w-full h-[475px] max-w-md bg-[linear-gradient(to_bottom_left,_#231f0c,_#061927,_#231f0c)] p-4 rounded-2xl shadow-xl text-white">
      <div>
        <div className=" rounded-xl overflow-hidden min-h-[60%] mb-4">
          <img src={image} alt={title} className="w-full object-cover" />
        </div>
        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed ">
          {truncateDescription(description)}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 ">
        <img
          src={avatar}
          alt={projectName}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="text-sm">
          <div className="font-semibold">{projectName}</div>
          <div className="flex items-center text-xs text-gray-400 gap-1">
            <CgGitFork size={14} />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
