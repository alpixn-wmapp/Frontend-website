import React from 'react';
import BgLayout from './BgLayout';
// (If using react-flow, import ReactFlow setup here)

const WorkflowCanvas = () => {
  return (
    <BgLayout>
      {/* Inside this, render your workflow nodes or diagram */}
      <div className="flex flex-wrap gap-8 items-center">
        <div className="bg-[#1c2c3a] px-4 py-2 rounded-md border border-blue-400 min-w-[120px] text-center">
          User Query
        </div>
        <div className="bg-[#1c2c3a] px-4 py-2 rounded-md border border-blue-400 min-w-[120px] text-center">
          Query Tool
        </div>
        {/* Add more nodes here */}
      </div>
    </BgLayout>
  );
};

export default WorkflowCanvas;
