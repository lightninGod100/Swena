import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import PortfolioGrid from './PortfolioGrid';
import PortfolioModal from './PortfolioModal';
import { portfolioData, categories } from '../data/mockPortfolio';
import '../styles/ExplorePage.css';

const ExplorePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter portfolio items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="explore-page">
      {/* Hero Section */}
      <div className="explore-hero">
        <h1 className="explore-title">Discover Inspiring Fashion Design Work</h1>
        <p className="explore-subtitle">
          Browse stunning designs from talented independent fashion designers
        </p>
      </div>

      {/* Category Tabs */}
      <CategoryTabs 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Portfolio Grid */}
      <div className="explore-content">
        <PortfolioGrid 
          items={filteredItems}
          onCardClick={handleCardClick}
        />
      </div>

      {/* Modal */}
      {selectedItem && (
        <PortfolioModal 
          item={selectedItem}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ExplorePage;