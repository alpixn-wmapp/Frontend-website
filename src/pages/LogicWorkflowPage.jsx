import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import WorkflowCanvas from '../components/WorkflowCanvas';

const LogicWorkflowPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 overflow-auto">
          <WorkflowCanvas />
        </div>
      </div>
    </div>
  );
};

export default LogicWorkflowPage;
