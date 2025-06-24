import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

                             
import LogicWorkflowPage from './pages/LogicWorkflowPage';
                           
//                                                

function App() {
  return (
    <Router>
      <Routes>
        {/* 🟦 Features Page */}
        {/* <Route
          path="/features"
          element={
            <AppLayout>
              <FeaturesPage />
            </AppLayout>
          }
        /> */}

        {/* 🟩 UI Components Page */}
        {/* <Route
          path="/ui-components"
          element={
            <AppLayout>
              <UIComponentsPage />
            </AppLayout>
          }
        /> */}

        {/* 🟪 Logic & Workflow Page */}
        <Route
          path="/logic-workflow"
          element={
           
              <LogicWorkflowPage />
           
          }
        />

        {/* 🔷 New Workflow Page */}
        {/* <Route
          path="/workflow"
          element={
            <AppLayout>
              <LogicWorkflowPage2 />
            </AppLayout>
          }
        /> */}

        {/* 🔁 Default route */}
        {/* <Route
          path="/"
          element={
            <AppLayout>
              <UIComponentsPage />
            </AppLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;