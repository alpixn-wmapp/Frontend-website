// pages/LogicWorkflowPage.jsx
import Sidebar from '../components/Sidebar';
import TopBarButtons from '../components/TopBarButtons';

const LogicWorkflowPage = () => {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 ml-60 px-10 py-8 relative">
        <TopBarButtons />

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">Logic & Workflow</h1>
          <p className="text-sm text-gray-500">Last edited just now</p>
        </div>

        {/* Workflow Image Centered */}
        <div className="flex justify-center items-center min-h-[70vh]">
          <img
            src="/assets/flowdiagram.png"
            alt="Logic and Workflow Diagram"
            className="w-[288px] h-auto border border-blue-500 rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default LogicWorkflowPage;