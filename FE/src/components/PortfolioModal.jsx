import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioModal = ({ item, onClose }) => {
  const navigate = useNavigate();

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleHireDesigner = () => {
    navigate(`/signup?type=Customer&designer=${item.designer.id}`);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-image-section">
            <img 
              src={item.image} 
              alt={item.title}
              className="modal-image"
            />
          </div>

          <div className="modal-info-section">
            <div className="designer-info-card">
              <img 
                src={item.designer.avatar} 
                alt={item.designer.name}
                className="designer-avatar"
              />
              <div className="designer-details">
                <h3 className="designer-name">{item.designer.name}</h3>
                <div className="designer-rating">
                  <span className="rating-star">★</span>
                  <span className="rating-text">
                    {item.designer.rating} ({item.designer.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <h2 className="modal-title">{item.title}</h2>
            <p className="modal-description">{item.description}</p>

            <div className="modal-tags">
              {item.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="modal-actions">
              <button className="btn-view-portfolio">
                View Full Portfolio
              </button>
              <button className="btn-hire-designer" onClick={handleHireDesigner}>
                Hire Designer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;