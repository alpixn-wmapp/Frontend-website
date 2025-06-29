import React, { useState } from "react";
import Card from "./Card";
import { CardData } from "../../data/landing";

const Community = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="bg-gradient-to-br from-[#000] via-[#0e213a] to-[#000000] pb-[30%] text-white py-[80px]">
      <div className="text-center">
        <h1 className="text-[2.5rem] font-[600]">From the Community</h1>
        <p className="text-lg">
          Explore what the community is building with NeuraForge.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 px-[8%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {CardData.slice(0, visibleCount).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < CardData.length && (
        <button
          onClick={handleLoadMore}
          className="px-4 py-2 rounded-lg mt-12 bg-gradient-to-r block mx-auto from-[#0d9af0] to-[#daae27]"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Community;
