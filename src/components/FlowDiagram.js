const FlowDiagram = () => {
  return (
    <div className="border border-blue-600 p-4 rounded-md mx-auto w-[288px] text-xs">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gray-700 px-4 py-1 rounded text-white">🧑‍💻 User Query</div>
        <div className="bg-red-500 px-4 py-1 rounded text-white">🔍 Query Tool</div>

        <div className="flex justify-between w-full gap-2">
          <div className="bg-cyan-700 px-2 py-1 rounded text-white w-full text-center">AI Processing</div>
          <div className="bg-cyan-700 px-2 py-1 rounded text-white w-full text-center">PDF Processing</div>
        </div>

        <div className="bg-purple-700 px-3 py-1 rounded text-white">WS Decision</div>

        <div className="bg-teal-700 px-3 py-1 rounded text-white">🌐 Web Service</div>

        <div className="bg-cyan-700 px-3 py-1 rounded text-white">📚 Search Repository</div>
        <div className="bg-cyan-700 px-3 py-1 rounded text-white">📤 Output Data</div>
        <div className="bg-cyan-700 px-3 py-1 rounded text-white">🔁 Continue Process</div>
      </div>
    </div>
  );
};

export default FlowDiagram;
