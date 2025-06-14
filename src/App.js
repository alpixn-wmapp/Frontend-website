import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import UIComponentsPage from './pages/UIComponentsPage';
import FeaturesPage from './pages/FeaturesPage';
import LogicWorkflowPage from './pages/LogicWorkflowPage';

import Frame1 from './pages/frame1';
import Frame2 from './pages/frame2';
import Frame3 from './pages/frame3';
import Frame4 from './pages/frame4';
import Frame5 from './pages/frame5';
import Frame6 from './pages/frame6';
import Frame7 from './pages/frame7';
import Frame8 from './pages/frame8';
import Frame9 from './pages/frame9';
import Frame10 from './pages/frame10';
import Frame11 from './pages/frame11';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🟦 Pages that need Sidebar */}
        <Route
          path="/features"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 ml-60">
                <FeaturesPage />
              </div>
            </div>
          }
        />
        <Route
          path="/ui-components"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 ml-60">
                <UIComponentsPage />
              </div>
            </div>
          }
        />
          <Route
    path="/logic-workflow"
    element={
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-60">
          <LogicWorkflowPage />
        </div>
      </div>
    }
  />

        {/* 🔲 Full-page frames (no sidebar) */}
        <Route path="/" element={<Frame1 />} />
        <Route path="/frame2" element={<Frame2 />} />
        <Route path="/frame3" element={<Frame3 />} />
        <Route path="/frame4" element={<Frame4 />} />
        <Route path="/frame5" element={<Frame5 />} />
        <Route path="/frame6" element={<Frame6 />} />
        <Route path="/frame7" element={<Frame7 />} />
        <Route path="/frame8" element={<Frame8 />} />
        <Route path="/frame9" element={<Frame9 />} />
        <Route path="/frame10" element={<Frame10 />} />
        <Route path="/frame11" element={<Frame11 />} />
      </Routes>
    </Router>
  );
}

export default App;
