import React from 'react';
import '../styles/PublicNavbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>SEWNA</h2>
        </div>
        <div className="navbar-buttons">
          <button className="btn-designer">Login</button>
          <button className="btn-need-designer">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;