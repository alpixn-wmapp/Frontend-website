import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import FactorialPage from './pages/FactorialPage';
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/factorial" element={<FactorialPage />} />
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
