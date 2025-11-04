import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/DevelopmentInProgress.css';

const DevelopmentInProgress = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current page name from the URL path
  const getPageName = () => {
    const path = location.pathname.replace('/', '');
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="dev-progress-page">
      <div className="dev-progress-container">
        <div className="dev-progress-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        
        <h1 className="dev-progress-title">Development in Progress</h1>
        
        <p className="dev-progress-message">
          The <strong>{getPageName()}</strong> section is currently under development.
        </p>
        
        <p className="dev-progress-subtitle">
          We're working hard to bring you this feature. Check back soon!
        </p>
        
        <button 
          className="back-home-btn"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DevelopmentInProgress;