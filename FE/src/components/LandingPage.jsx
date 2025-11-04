import React, { useEffect } from 'react';
import '../styles/LandingPage.css';
import pajImage from '../assets/images/paj.png';
import addDesignerImage from '../assets/images/sad.png';
import trackProgressImage from '../assets/images/progress.png';
import payImage from '../assets/images/pay.png';
import discoverNewPostsImage from '../assets/images/findjob.png';
import submitProposalImage from '../assets/images/submit.png';
import doTheWorkImage from '../assets/images/work.png';
import getPaidImage from '../assets/images/gp.png';
import designer1Image from '../assets/images/d1.png';
import designer2Image from '../assets/images/d2.png';
import designer3Image from '../assets/images/d3.png';
import designer4Image from '../assets/images/d4.png';

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (!heroSection) return;

      const scrollPosition = window.scrollY;
      const heroHeight = heroSection.offsetHeight;
      
      // Calculate zoom scale based on scroll position
      // Starts at 1 (normal) and zooms in to 1.2 as user scrolls
      const maxZoom = 1.2;
      const scrollProgress = Math.min(scrollPosition / heroHeight, 1);
      const zoomScale = 1 + (scrollProgress * (maxZoom - 1));
      
      // Set CSS variable for zoom effect
      heroSection.style.setProperty('--zoom-scale', zoomScale);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set scale on mount
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bringing Designers & Brands Together</h1>
          <p>Hire talent or offer your skills — collaborate, create, and thrive.</p>
          <div className="hero-buttons">
            <button className="btn-primary">I need a Designer</button>
            <button className="btn-secondary">I am a Designer</button>
          </div>
        </div>
      </div>
      {/* How It Works Section - For Clients */}
      <div className="how-it-works-section">
        <h2 className="section-title">How Hiring a Fashion Designer Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={pajImage} alt="Post a Job" />
            </div>
            <h3 className="step-title">1. Post a Job</h3>
            <p className="step-description">What needs to be done</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={addDesignerImage} alt="Add Designer" />
            </div>
            <h3 className="step-title">2. Choose Designer</h3>
            <p className="step-description">Get bids and choose the best</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={trackProgressImage} alt="Track Progress" />
            </div>
            <h3 className="step-title">3. Track Progress</h3>
            <p className="step-description">Chat and track the work 24/7</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={payImage} alt="Pay" />
            </div>
            <h3 className="step-title">4. Pay</h3>
            <p className="step-description">Pay when you're satisfied</p>
          </div>
        </div>
      </div>

      {/* How It Works Section - For Designers */}
      <div className="how-it-works-section">
        <h2 className="section-title">How to Get Work</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={discoverNewPostsImage} alt="Discover New Posts" />
            </div>
            <h3 className="step-title">1. Discover New Posts</h3>
            <p className="step-description">Browse available design opportunities</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={submitProposalImage} alt="Submit Proposal" />
            </div>
            <h3 className="step-title">2. Submit Proposal</h3>
            <p className="step-description">Bid on projects that match your skills</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={doTheWorkImage} alt="Do the Work" />
            </div>
            <h3 className="step-title">3. Do the Work</h3>
            <p className="step-description">Create amazing designs for clients</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
            <img src={getPaidImage} alt="Get Paid" />
            </div>
            <h3 className="step-title">4. Get Paid</h3>
            <p className="step-description">Receive payment for completed work</p>
          </div>
        </div>
      </div>
      {/* Top Rated Designers Section */}
      <div className="top-designers-section">
        <h2 className="section-title">Top Rated Designers</h2>
        <div className="designers-container">
          <div className="designer-card">
            <div className="designer-avatar-placeholder">
            <img src={designer1Image} alt="Designer 1" />
            </div>
            <h3 className="designer-name">Sarah Johnson</h3>
            <div className="designer-rating">
              <span className="rating-star">★</span>
              <span className="rating-text">4.8 (1232 works)</span>
            </div>
            <button className="btn-hire">Hire Them</button>
          </div>

          <div className="designer-card">
            <div className="designer-avatar-placeholder">
            <img src={designer2Image} alt="Designer 2" />
            </div>
            <h3 className="designer-name">Michael Chen</h3>
            <div className="designer-rating">
              <span className="rating-star">★</span>
              <span className="rating-text">4.9 (987 works)</span>
            </div>
            <button className="btn-hire">Hire Them</button>
          </div>

          <div className="designer-card">
            <div className="designer-avatar-placeholder">
            <img src={designer3Image} alt="Designer 3" />
            </div>
            <h3 className="designer-name">Emma Rodriguez</h3>
            <div className="designer-rating">
              <span className="rating-star">★</span>
              <span className="rating-text">4.7 (1456 works)</span>
            </div>
            <button className="btn-hire">Hire Them</button>
          </div>

          <div className="designer-card">
            <div className="designer-avatar-placeholder">
            <img src={designer4Image} alt="Designer 4" />
            </div>
            <h3 className="designer-name">David Kim</h3>
            <div className="designer-rating">
              <span className="rating-star">★</span>
              <span className="rating-text">4.8 (2103 works)</span>
            </div>
            <button className="btn-hire">Hire Them</button>
          </div>
        </div>
      </div>
      {/* Customer Reviews Section */}
      <div className="customer-reviews-section">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="reviews-container">
          <div className="review-card">
            <div className="reviewer-avatar-placeholder">
              {/* Add customer photo here later */}
            </div>
            <p className="review-text">
              "Working with SEWNA designers was an incredible experience! They brought my vision to life perfectly."
            </p>
            <h4 className="reviewer-name">John Davis</h4>
            <div className="reviewer-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>

          <div className="review-card">
            <div className="reviewer-avatar-placeholder">
              {/* Add customer photo here later */}
            </div>
            <p className="review-text">
              "Amazing platform! Found the perfect designer for my brand within days. Highly recommend!"
            </p>
            <h4 className="reviewer-name">Maria Garcia</h4>
            <div className="reviewer-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>

          <div className="review-card">
            <div className="reviewer-avatar-placeholder">
              {/* Add customer photo here later */}
            </div>
            <p className="review-text">
              "Professional, talented, and easy to work with. SEWNA made finding quality designers so simple!"
            </p>
            <h4 className="reviewer-name">Robert Wilson</h4>
            <div className="reviewer-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>

          <div className="review-card">
            <div className="reviewer-avatar-placeholder">
              {/* Add customer photo here later */}
            </div>
            <p className="review-text">
              "The entire process was smooth from start to finish. My custom jacket is absolutely perfect!"
            </p>
            <h4 className="reviewer-name">Lisa Thompson</h4>
            <div className="reviewer-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-copyright">© 2025 SEWNA. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="#contact" className="footer-link">Contact Us</a>
            <a href="#privacy" className="footer-link">Privacy & Terms</a>
            <a href="#faqs" className="footer-link">FAQs</a>
            <a href="#support" className="footer-link">Support Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;