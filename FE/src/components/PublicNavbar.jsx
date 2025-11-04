import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PublicNavbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <h2>SEWNA</h2>
        </div>
        <div className="navbar-buttons">
          <button 
            className="btn-explore"
            onClick={() => navigate('/discover')}
          >
            Explore
            <span className="search-icon">⌕</span>
            
          </button>
          <button 
            className="btn-login"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="btn-signup"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;