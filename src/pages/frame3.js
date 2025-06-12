import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import { CiExport } from "react-icons/ci";
import initialFeatures from "../data/features1";
import { FiEdit } from "react-icons/fi";
function App() {
  const [features, setFeatures] = useState(initialFeatures);

  const toggleFeature = (index) => {
    const updated = features.map((feature, i) =>
      i === index ? { ...feature, active: !feature.active } : feature
    );
    setFeatures(updated);
  };
  return (
    <div
      className="flex h-screen text-white"
      style={{
        backgroundImage: `
      radial-gradient(at left top, #0d1a2a, transparent 30%),
      radial-gradient(at right top, #3e6ca8, transparent 30%),
      radial-gradient(at left bottom, #3e6ca8, transparent 30%),
      radial-gradient(at right bottom, #0d1a2a, transparent 30%)
    `,
        backgroundColor: "#0d1a2a",
      }}
    >
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <div className="p-6  ">
          <h1 className="text-3xl mt-10 text-center font-bold mb-2">
            Select Functional Features For Your App
          </h1>
          <p className="mb-6 mt-4 text-center text-md text-gray-300">
            Choose The Building Blocks Your App Needs. You Can Add, Remove, Or
            Customize Features At Any Time.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-gradient-to-r from-yellow-400  to-blue-500  font-light py-2 px-4 rounded-lg">
              <FiEdit className="inline mr-2 mb-1 text-2xl" />
              Edit App Details
            </button>
            <button className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black">
              <CiExport className="inline mr-2 mb-1 text-2xl" />
              Export Setup
            </button>
          </div>
          <div className="ml-10">
            <h2 className="text-xl font-semibold mb-2">New</h2>
            <p className="text-sm text-gray-400 mb-4">
              The Latest And Greatest Submissions.
            </p>
            <div className="grid ml- grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <FeatureCard
                  key={idx}
                  {...feature}
                  onToggle={() => toggleFeature(idx)}
                />
              ))}
            </div>
          </div>
          {/* <h2 className="text-xl font-semibold mb-2">New</h2>
          <p className="text-sm text-gray-400 mb-4">The Latest And Greatest Submissions.</p>
          <div className="grid ml- grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                {...feature}
                onToggle={() => toggleFeature(idx)}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
// import React from "react";

// const Frame3 = () => {
//   return (
//     <div className="bg-nightblack h-screen w-screen text-white font-sans">
//       {/* Top header */}
//       <div className="h-12 px-6 bg-black flex items-center border-b border-white/10">
//         <h1 className="text-lg font-semibold">NeuraForge</h1>
//       </div>

//       {/* Main section */}
//       <div className="flex mx-[150px] my-5 border border-white/10">
//         {/* Sidebar */}
//         <div className="w-1/4 h-[500px] border-r border-white/10 bg-black p-5 flex flex-col gap-6">
//           <div className="text-center text-white text-lg font-semibold">Forge Lab</div>

//           <div className="flex flex-col gap-4 p-3 ">
//             {["App type", "Features", "UI components", "Logic & workflow", "Export"].map((item) => (
//               <button
//                 key={item}
//                 className="text-left text-white/80 hover:text-blue-500 text-sm transition"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="w-full h-[500px] bg-black px-6 py-4">
//           {/* Header bar */}
//           <div className="flex justify-between items-center border-b border-white/10 pb-3">
//             <div>
//               <h2 className="text-xl text-white/15 font-semibold">Untitled</h2>
//               <p className="text-xs text-white/30">Last edited just now</p>
//             </div>
//             <div className="flex gap-3">
//               <button className="text-sm border text-white/40 border-white/20 rounded px-3 py-1 hover:border-blue-500 hover:text-blue-500 transition">
//                 Edit Notes
//               </button>
//               <button className="text-sm border text-white/40 border-white/20 rounded px-3 py-1 hover:border-blue-500 hover:text-blue-500 transition">
//                 Export
//               </button>
//             </div>
//           </div>

//           {/* Input Section */}
//           <div className="mt-6 border border-white/10 rounded-lg p-5 bg-black/20">
//             <h3 className="text-white text-sm mb-2 font-medium">Describe your app idea</h3>
//             <div className="border border-white/10 rounded-md p-4 bg-black">
//               <textarea
//                 rows={6}
//                 placeholder="Smart Reminder Bot is an intelligent task assistant that adapts to user habits..."
//                 className="w-full bg-transparent outline-none text-white/40 text-sm resize-none placeholder:text-white/40"
//               />
//             </div>

//             {/* Button Styles */}
//             <div className="flex gap-2 mt-4">
//               {["Minimalistic", "Classic", "Professional"].map((label) => (
//                 <button
//                   key={label}
//                   className="text-xs text-white/30 px-4 py-1.5 border border-white/10 rounded hover:border-blue-500 hover:text-blue-400 transition"
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Frame3;
