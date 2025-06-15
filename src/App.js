import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UIComponentsPage from './pages/UIComponentsPage';
import FeaturesPage from './pages/FeaturesPage';
import LogicWorkflowPage from './pages/LogicWorkflowPage';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🟦 Features Page */}
        <Route
          path="/features"
          element={
            <AppLayout>
              <FeaturesPage />
            </AppLayout>
          }
        />

        {/* 🟩 UI Components Page */}
        <Route
          path="/ui-components"
          element={
            <AppLayout>
              <UIComponentsPage />
            </AppLayout>
          }
        />

        {/* 🟪 Logic & Workflow Page */}
        <Route
          path="/logic-workflow"
          element={
            <AppLayout>
              <LogicWorkflowPage />
            </AppLayout>
          }
        />

        {/* 🔁 Default route (fallback to UI components) */}
        <Route
          path="/"
          element={
            <AppLayout>
              <UIComponentsPage />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
