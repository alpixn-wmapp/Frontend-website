// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo192.png" alt="NeuraForge Logo" className="logo" />
          <span className="brand">NeuraForge</span>
        </div>
        <div className="navbar-right">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
      <div className="beta-button-wrapper">
        <button className="learn-more">The NeuraForge in beta <span>&#8594;</span></button>
      </div>
    </>
  );
}

export default Navbar;
