import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bringing Designers & Brands Together</h1>
          <p>Hire talent or offer your skills — collaborate, create, and thrive.</p>
          <div className="hero-buttons">
            <button className="btn-primary">I am a Designer</button>
            <button className="btn-secondary">I need a Designer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;