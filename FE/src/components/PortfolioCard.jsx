import React from 'react';

const PortfolioCard = ({ item, onCardClick }) => {
  return (
    <div className="portfolio-card" onClick={() => onCardClick(item)}>
      <div className="portfolio-card-image-wrapper">
        <img 
          src={item.image} 
          alt={item.title}
          className="portfolio-card-image"
        />
        <div className="portfolio-card-overlay">
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
      
      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{item.title}</h3>
        <p className="portfolio-card-designer">by {item.designer.name}</p>
        <div className="portfolio-card-rating">
          <span className="rating-star">★</span>
          <span className="rating-text">
            {item.designer.rating} ({item.designer.reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;