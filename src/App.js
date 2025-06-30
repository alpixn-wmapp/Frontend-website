import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/contextAPI";

// Import your page components
import Frame1 from "./pages/frame1";
import Frame2 from "./pages/frame2";
// import Frame3 from "./pages/frame3";
import Frame4 from "./pages/frame4";
import Frame5 from "./pages/frame5";
// import Frame6 from "./pages/frame6";
import Frame7 from "./pages/frame7";
import Frame8 from "./pages/frame8";
import Frame9 from "./pages/frame9";
import Frame10 from "./pages/frame10";
import Frame11 from "./pages/frame11";
import Features from "./components/Features";
import Uicomponents from "./components/Uicomponents";
import Uicomponents2 from "./components/Uicomponents2";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Apptype from "./components/Apptype";
import LogicWorkflowPage from "./pages/LogicWorkflowPage";
import ExportProjectsPage from "./pages/ExportProjectsPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <AppProvider>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Frame1 />} />

          <Route path="features" element={<Features />} />
          <Route path="ui-components" element={<Uicomponents />} />
          <Route path="/ui-components2" element={<Uicomponents2 />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/app-type" element={<Apptype />} />
          <Route path="/frame2" element={<Frame2 />} />
          {/* <Route path="/frame3" element={<Frame3 />} /> */}
          <Route path="/frame4" element={<Frame4 />} />
          <Route path="/frame5" element={<Frame5 />} />
          {/* <Route path="/frame6" element={<Frame6 />} /> */}
          <Route path="/frame7" element={<Frame7 />} />
          <Route path="/frame8" element={<Frame8 />} />
          <Route path="/frame9" element={<Frame9 />} />
          <Route path="/frame10" element={<Frame10 />} />
          <Route path="/frame11" element={<Frame11 />} />

          {/* 🟪 Logic & Workflow Page */}
          <Route path="/logic-workflow" element={<LogicWorkflowPage />} />

          {/* 🟧 Export Projects Page */}
          <Route path="/export-project" element={<ExportProjectsPage />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
