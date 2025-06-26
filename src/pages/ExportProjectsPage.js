// import React from 'react';
// import Topbar from '../components/logic_work_flow/Topbar';
// import Sidebar from '../components/export_project/Sidebar';

// const ExportProjectsPage = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content with Topbar and image */}
//       <div className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <Topbar />

//         {/* Centered Image */}
//         <div className="flex-1 flex justify-center items-center bg-[#021728]">
//           <img
//             src="/assets/image2.png"
//             alt="Export Visual"
//             className="w-[700px] h-auto object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExportProjectsPage;

import React from 'react';
import Topbar from '../components/logic_work_flow/Topbar';
import Sidebar from '../components/export_project/Sidebar';

const cards = [
  {
    title: 'Smart Support Chatbot',
    description: 'AI-powered assistant for customer queries.',
    progress: 95
  },
  {
    title: 'E-commerce Recommender',
    description: 'Suggests products based on user behavior.',
    progress: 88
  },
  {
    title: 'Medical FAQ Assistant',
    description: 'Health-related questions with accuracy.',
    progress: 85
  }
];

const ExportProjectsPage = () => {
  return (
    <div className="flex h-screen bg-[#021728] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Header */}
        <div className="px-10 pt-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold">Launch-Ready Projects</h2>
              <p className="text-sm text-gray-300 mt-1">
                Review, Refine, And Export Your Intelligent Apps. These Projects <br />
                Are Trained, Tested, And Ready To Go Live.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:opacity-90 text-black font-semibold px-5 py-2 rounded shadow">
                + Create New App
              </button>
              <button className="border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
                Refresh Projects
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex-1 px-10 pt-10 pb-6 overflow-y-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#0f1d2d] border border-blue-400 rounded-xl p-4 w-[270px] text-white shadow-lg"
              >
                <div className="h-36 w-full bg-gray-800 rounded-md mb-3 flex items-center justify-center text-sm text-gray-400">
                  Project Image
                </div>
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{card.description}</p>
                <p className="text-sm mb-1">
                  Progress: <span className="text-green-400 font-bold">{card.progress}%</span>
                </p>
                <div className="w-full h-2 bg-gray-700 rounded-full mb-3">
                  <div
                    className="h-2 bg-green-400 rounded-full"
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
                <button className="bg-white text-black w-full py-1 rounded hover:bg-gray-200 transition">
                  Launch Project
                </button>
              </div>
            ))}
          </div>

          {/* Bulk Export Button */}
          <div className="flex justify-center mt-10">
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              Bulk Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportProjectsPage;
