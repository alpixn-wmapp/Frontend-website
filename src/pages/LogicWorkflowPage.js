import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const LogicWorkflowPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-b from-[#021728] to-[#05253f] text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Header */}
        <div className="px-4 md:px-10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Visual Workflow Builder</h2>
              <p className="text-sm text-gray-300 mt-1">
                Build And Connect Your AI Logic With Simple, Visual Steps.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:opacity-90 text-black font-semibold px-4 py-1.5 rounded shadow text-sm">
                ✏️ Edit Notes
              </button>
              <button className="border border-white text-white px-4 py-1.5 rounded hover:bg-white hover:text-black transition text-sm">
                Export Flow
              </button>
            </div>
          </div>
        </div>

        {/* Flowchart Area */}
        <div className="flex-1 px-4 md:px-6 pt-6 pb-16 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Top Row */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <Step label="User Query" />
              <Step label="Query Tool" />
              <Step label="AI Processing" />
              <Step label="PDF Processing" />
            </div>

            {/* Diamond Decision Node */}
            <Step shape="diamond" label="WS Decision?" />

            {/* Bottom Flow */}
            <div className="flex flex-wrap justify-center gap-6 w-full">
              <Step label="Web Services" />
              <div className="flex flex-col items-center gap-3">
                <Step label="Search Repository" />
                <Step label="Output Data" />
                <Step label="Continue Process" />
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4">Last Saved 2 Mins Ago</p>
          </div>
        </div>

        {/* Bottom Proceed Button */}
        <div className="flex justify-center pb-4 px-4">
          <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition text-sm w-full max-w-xs">
            Proceed To App Builder
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Step Box
const Step = ({ label, shape = 'rect' }) => {
  const baseClasses = 'flex items-center justify-center text-xs font-medium text-white shadow text-center px-2';
  const shapeStyle =
    shape === 'diamond'
      ? 'w-20 h-20 rotate-45 bg-[#0f1d2d] border border-blue-400'
      : 'min-w-[100px] h-12 rounded bg-[#0f1d2d] border border-blue-400';

  return (
    <div className={`${baseClasses} ${shapeStyle}`}>
      <div className={shape === 'diamond' ? '-rotate-45' : ''}>{label}</div>
    </div>
  );
};

export default LogicWorkflowPage;
