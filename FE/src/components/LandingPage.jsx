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
      {/* How It Works Section - For Clients */}
      <div className="how-it-works-section">
        <h2 className="section-title">How Hiring a Fashion Designer Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon-placeholder">
              {/* Add icon here later */}
            </div>
            <h3 className="step-title">1. Post a Job</h3>
            <p className="step-description">What needs to be done</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
              {/* Add icon here later */}
            </div>
            <h3 className="step-title">2. Choose Designer</h3>
            <p className="step-description">Get bids and choose the best</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
              {/* Add icon here later */}
            </div>
            <h3 className="step-title">3. Track Progress</h3>
            <p className="step-description">Chat and track the work 24/7</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
              {/* Add icon here later */}
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
              {/* Add icon here later */}
            </div>
            <h3 className="step-title">1. Discover New Posts</h3>
            <p className="step-description">Browse available design opportunities</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
              {/* Add icon here later */}
            </div>
            <h3 className="step-title">2. Bid for Work</h3>
            <p className="step-description">Submit your proposal and pricing</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
              {/* Add icon here later */}
            </div>
            <h3 className="step-title">3. Do the Work</h3>
            <p className="step-description">Create amazing designs for clients</p>
          </div>

          <div className="step-card">
            <div className="step-icon-placeholder">
              {/* Add icon here later */}
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
              {/* Add designer photo here later */}
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
              {/* Add designer photo here later */}
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
              {/* Add designer photo here later */}
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
              {/* Add designer photo here later */}
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
              "Working with SEWNA designers was an incredible experience! They brought my vision to life perfectly. The custom dress exceeded all my expectations."
            </p>
            <h4 className="reviewer-name">Jessica Martinez</h4>
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
              "I found the perfect designer for my wedding outfit. The communication was seamless and the final result was stunning. Highly recommend SEWNA!"
            </p>
            <h4 className="reviewer-name">Priya Sharma</h4>
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
              "The quality of work from SEWNA designers is outstanding. I've ordered three custom pieces and each one was crafted with incredible attention to detail."
            </p>
            <h4 className="reviewer-name">Robert Anderson</h4>
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
              "SEWNA made it so easy to connect with talented designers. The entire process was smooth from start to finish. My custom jacket is absolutely perfect!"
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