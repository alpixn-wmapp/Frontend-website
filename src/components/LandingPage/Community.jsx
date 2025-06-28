import React, { useState } from "react";
import Card from "./Card";

const Community = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const CardData = [
    {
      image: "/images/ui6.png",
      title: "Floating Bubbles",
      description:
        "This playful interface uses floating elements to engage users visually. With dynamic colors and fluid motion, it creates an immersive experience designed to delight. It’s perfect for landing pages or interactive sections of a modern UI project.",
      avatar: "/images/ui1.png",
      projectName: "Floating Bubbles",
      forks: "4.4K Forks",
    },
    {
      image: "/images/ui2.png",
      title: "Neura UI Kit",
      description:
        "Neura UI Kit provides a robust set of reusable components, crafted with a focus on accessibility and design aesthetics. It includes buttons, cards, forms, and modals, helping developers build production-ready UIs faster and with better consistency across pages.",
      avatar: "/images/ui2.png",
      projectName: "Neura UI Kit",
      forks: "2.3K Forks",
    },
    {
      image: "/images/ui3.png",
      title: "Gradient Galaxy",
      description:
        "Gradient Galaxy showcases beautiful background gradients with smooth blends of colors. This component works well for hero sections, splash screens, or decorative UI. It uses TailwindCSS for styling and supports responsive design out of the box.",
      avatar: "/images/ui3.png",
      projectName: "Gradient Galaxy",
      forks: "3.1K Forks",
    },
    {
      image: "/images/ui4.png",
      title: "Floating Bubbles",
      description:
        "An animated background design that features colorful bubbles floating around the screen. Great for modern and engaging presentations or product showcases. Lightweight, customizable, and easy to integrate into any front-end application using React.",
      avatar: "/images/ui1.png",
      projectName: "Floating Bubbles",
      forks: "4.4K Forks",
    },
    {
      image: "/images/ui5.png",
      title: "Neura UI Kit",
      description:
        "Designed for rapid UI development, this kit includes neatly styled elements ready for integration. Whether building a dashboard or a marketing site, Neura UI Kit gives developers clean and elegant components to elevate design and functionality.",
      avatar: "/images/ui2.png",
      projectName: "Neura UI Kit",
      forks: "2.3K Forks",
    },
    {
      image: "/images/ui6.png",
      title: "Gradient Galaxy",
      description:
        "Gradient Galaxy combines art and function by blending soothing colors in radial and linear formats. It's optimized for performance and ideal for backgrounds, call-to-action sections, or to simply add visual depth to your application.",
      avatar: "/images/ui3.png",
      projectName: "Gradient Galaxy",
      forks: "3.1K Forks",
    },
    {
      image: "/images/ui3.png",
      title: "Gradient Galaxy",
      description:
        "Gradient Galaxy showcases beautiful background gradients with smooth blends of colors. This component works well for hero sections, splash screens, or decorative UI. It uses TailwindCSS for styling and supports responsive design out of the box.",
      avatar: "/images/ui3.png",
      projectName: "Gradient Galaxy",
      forks: "3.1K Forks",
    },
    {
      image: "/images/ui4.png",
      title: "Floating Bubbles",
      description:
        "An animated background design that features colorful bubbles floating around the screen. Great for modern and engaging presentations or product showcases. Lightweight, customizable, and easy to integrate into any front-end application using React.",
      avatar: "/images/ui1.png",
      projectName: "Floating Bubbles",
      forks: "4.4K Forks",
    },
  ];

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
