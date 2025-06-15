// src/pages/LogicWorkflowPage.jsx

import TopBarButtons from '../components/TopBarButtons';
import { useNavigate } from 'react-router-dom';

const LogicWorkflowPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/export'); // or wherever your next step is
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-10 py-8">
      {/* Top Header */}
      <div className="flex items-start justify-end mb-6">
        {/* Only Right Buttons */}
        <TopBarButtons />
      </div>

      {/* Centered Diagram */}
      <div className="flex justify-center items-center min-h-[70vh]">
        <img
          src="/assets/flowdiagram.png"
          alt="Logic and Workflow Diagram"
          className="w-[320px] md:w-[420px] h-auto border border-blue-500 rounded"
        />
      </div>

      {/* Bottom Right "Next" Button */}
      <div className="absolute bottom-6 right-10">
        <button
          onClick={handleNext}
          className="text-xs text-blue-500 border border-blue-500 rounded px-4 py-1 hover:bg-blue-600 hover:text-white transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LogicWorkflowPage;
