import React from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioGrid = ({ items, onCardClick }) => {
  return (
    <div className="portfolio-grid">
      {items.length > 0 ? (
        items.map((item) => (
          <PortfolioCard 
            key={item.id} 
            item={item} 
            onCardClick={onCardClick}
          />
        ))
      ) : (
        <div className="no-results">
          <p>No designs found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;