import React from 'react';
import Sidebar from '../components/logic_work_flow/Sidebar';
import Topbar from '../components/logic_work_flow/Topbar';

const LogicWorkflowPage = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-b from-[#021728] to-[#05253f] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        {/* Header */}
        <div className="px-10 pt-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold">Visual Workflow Builder</h2>
              <p className="text-sm text-gray-300 mt-1">
                Build And Connect Your AI Logic With Simple, Visual Steps.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:opacity-90 text-black font-semibold px-4 py-1.5 rounded shadow">
                ✏️ Edit Notes
              </button>
              <button className="border border-white text-white px-4 py-1.5 rounded hover:bg-white hover:text-black transition">
                Export Flow
              </button>
            </div>
          </div>
        </div>

        {/* Flowchart Scrollable Area */}
        <div className="flex-1 px-6 pt-6 pb-16 overflow-y-auto">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-4">
              <Step label="User Query" />
              <Step label="Query Tool" />
              <Step label="AI Processing" />
              <Step label="PDF Processing" />
            </div>

            <Step shape="diamond" label="WS Decision?" />

            <div className="flex gap-4">
              <Step label="Web Services" />
              <div className="flex flex-col gap-3">
                <Step label="Search Repository" />
                <Step label="Output Data" />
                <Step label="Continue Process" />
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4">Last Saved 2 Mins Ago</p>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center pb-4">
          <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
            Proceed To App Builder
          </button>
        </div>
      </div>
    </div>
  );
};

// Smaller Step Box
const Step = ({ label, shape = 'rect' }) => {
  const baseClasses = 'flex items-center justify-center text-xs font-medium text-white shadow';
  const commonStyle = shape === 'diamond'
    ? 'w-20 h-20 rotate-45 bg-[#0f1d2d] border border-blue-400'
    : 'w-32 h-12 rounded bg-[#0f1d2d] border border-blue-400';

  return (
    <div className={`${baseClasses} ${commonStyle}`}>
      <div className={shape === 'diamond' ? '-rotate-45' : ''}>{label}</div>
    </div>
  );
};

export default LogicWorkflowPage;
