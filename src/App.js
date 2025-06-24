import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogicWorkflowPage from './pages/LogicWorkflowPage';
import ExportProjectsPage from './pages/ExportProjectsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🟪 Logic & Workflow Page */}
        <Route path="/logic-workflow" element={<LogicWorkflowPage />} />

        {/* 🟧 Export Projects Page */}
        <Route path="/export-projects" element={<ExportProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
