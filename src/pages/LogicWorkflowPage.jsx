      import React from 'react';

const LogicWorkflowPage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#041424] to-[#0b1f32] text-white">
      
      {/* Sidebar */}
      <aside className="w-60 bg-[#0c2a45] flex flex-col items-center justify-center py-6">
        <img src="/assets/image2.png" alt="Logo" className="w-16 h-16" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Logic Workflow</h1>
        <div className="bg-[#123049] rounded-xl p-6 shadow-lg">
          <img
            src="/assets/image1.png"
            alt="Workflow Diagram"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default LogicWorkflowPage;
