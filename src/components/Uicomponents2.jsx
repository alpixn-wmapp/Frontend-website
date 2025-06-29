import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const uiThemes = [
  { title: "Light Theme", image: "/images/uitheme1.png" },
  { title: "Neon Theme", image: "/images/uitheme2.png" },
  { title: "Dark Theme", image: "/images/uitheme3.png" },
  { title: "Minimal Theme", image: "/images/uitheme4.png" },
];
const palettes = [
  [
    "#f0e5e0", // light warm beige
    "#d8c7be", // added warm light taupe
    "#b8a59a", // added muted brownish taupe
    "#777", 
    "#555",    // added darker gray for depth
    "#333", 
    "#fa5", 
    "#e65a3a"
  ],

  [
    "#b9e1dc", 
    "#6fcfc6", 
    "#3a8888", 
    "#2f6e6e", 
    "#1c6464", 
    "#0f4a4a", 
    "#0a3333", 
    "#062020"
  ],

  [
    "#031c32", 
    "#043456", 
    "#064570", 
    "#075e90", 
    "#0772b0", 
    "#1999d3", 
    "#68b8e0", 
    "#cfd9df"
  ],

  [
    "#1a1a1a", 
    "#2c3e50", 
    "#3e5870",  // added soft steel gray
    "#f39c12", 
    "#e67e22",  // added softer orange
    "#d35400", 
    "#c0392b", 
    "#992d22"   // added deep dark red
  ]
];



const Uicomponents2 = () => {
  const [selectedTheme, setSelectedTheme] = useState("Dark Theme");
  const [selectedPalette, setSelectedPalette] = useState(palettes[2]);
  const [selectedImage, setSelectedImage] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen text-white bg-[#0d1a2a]"
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
       <div className="px-10 py-8 relative">
  {/* Vertical Step Progress Line */}
  <div className="absolute left-0 top-28 h-[52%] ml-5 mt-9 w-6 flex flex-col items-center z-10">
    {/* Line */}
    <div className="w-[2px] bg-blue-500 flex-1 mt-2"></div>

    {/* Dots */}
    <div className="absolute  top-0 w-4 h-4 rounded-full bg-[#0d1a2a] border-4 border-blue-500"></div>
    <div className="absolute top-[13.5rem] w-4 h-4 rounded-full bg-[#0d1a2a] border-4 border-blue-500"></div>
    <div className="absolute top-[27rem] w-4 h-4 rounded-full bg-[#0d1a2a] border-4 border-blue-500"></div>
  </div>

  {/* Content */}
  <h2 className="text-2xl text-center  font-semibold mb-2">Style Your App Interface</h2>
  <p className="text-sm text-center text-white mt-5">
    Choose your visual theme, color palette, and brand images to match your.
  </p>
  <p className="text-sm text-center text-white mb-5 ">App’s personality</p>

  {/* --- UI Theme Cards --- */}
  <div className="mb-10 pl-6">
    <h3 className="text-md mb-2 font-medium">UI Theme Cards</h3>
    <div className="flex   gap-5">
      {uiThemes.map((themeObj, idx) => (
  <div
    key={idx}
    onClick={() => setSelectedTheme(themeObj.title)}
    className={`bg-gradient-to-br from-[#06172d] to-[#05101c] cursor-pointer border rounded-lg w-32  text-sm overflow-hidden transition-all duration-200 ${
      selectedTheme === themeObj.title
        ? "ring-2 ring-blue-400 ring-offset-1 ring-offset-[#0d1a2a]"
      :""
    }`}
  >
    <img
      src={themeObj.image}
      alt={themeObj.title}
      className="w-full p-2  rounded2xl h-30 object-cover"
    />
    <div className="px-2 py-2 text-center mt-2">
      {themeObj.title}
    </div>
  </div>
))}

    </div>
  </div>

  {/* --- Color Palette Grid --- */}
<div className="mb-10 pl-6">
  <h3 className="text-md  mb-2 font-medium">Color Palette Grid</h3>
  
  {/* Grid layout for 3 items per row */}
  <div className="grid pl-0 grid-cols-1   m-8 ml-0 px-6 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {palettes.map((palette, idx) => (
      <div
        key={idx}
        onClick={() => setSelectedPalette(palette)}
        className={`flex items-center px-1 py-1 rounded-lg cursor-pointer transition-all duration-200 ${
          selectedPalette === palette
            ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-[#0d1a2a]"
            : "hover:ring-1 hover:ring-white/30"
        }`}
        style={{ backgroundColor: "#06172d", border: "1px solid #1e3a5f" }}
      >
        <div className="rounded-xl flex flex-row">
          {palette.map((color, i) => (
            <div key={i} className="w-8 h-10" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      </div>
    ))}

    {/* Choose Own Palette Button */}
    <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm border rounded-lg text-white border-gray-600 bg-[#0d1a2a] hover:border-blue-400 transition-all duration-200">
      <img src="/images/pen.svg" alt="pen" />
      Choose Own Palette 
    </button>
  </div>
</div>



  {/* --- Themes Selection --- */}
  <div className="mb-10 pl-6">
    <h3 className="text-md mb-2 font-medium">Themes Selection</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {[1, 2, 3, 4].map((_, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedImage(idx)}
          className={`border rounded-lg overflow-hidden cursor-pointer ${
            selectedImage === idx ? "border-blue-500" : "border-gray-600 hover:border-blue-400"
          }`}
        >
          <img
            src={`/images/ui${idx + 1}.png`}
            alt="theme"
            className="h-24 w-full object-cover"
          />
          <p className="text-xs p-2 text-center bg-[#091c2b]">Lorem ipsum</p>
        </div>
      ))}
      <div className="flex items-center justify-center border rounded-lg h-34 cursor-pointer hover:border-blue-500">
        <span className="text-xs text-gray-400"> + Choose Image</span>
      </div>
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-between mt-10 pl-6">
    <button
      onClick={() => navigate("/features")}
      className="px-4 py-2 text-sm text-white bg-transparent border border-white/30 rounded hover:border-white/60"
    >
      ← Back To Features
    </button>
    <button
      onClick={() => navigate("/logicworkflow")}
     className="bg-gradient-to-r from-yellow-500 to-blue-600 font-light py-2 px-4 rounded-lg"
    >
      Continue To Workflow Logic →
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Uicomponents2;
