import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Connect With Independent Fashion Designers</h1>
          <p>Create custom outfits tailored to your style</p>
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