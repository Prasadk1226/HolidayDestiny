import React, { useState } from 'react';
import './GalleryGrid.css';

const GalleryGrid = ({ images = [], title = "Travel Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Sample images if none provided
  const defaultImages = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Bali+Beach',
      alt: 'Bali Beach',
      category: 'international',
      title: 'Bali Beach Paradise'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Santorini+Sunset',
      alt: 'Santorini Sunset',
      category: 'island',
      title: 'Santorini Sunset Views'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/400x300/28a745/ffffff?text=Swiss+Alps',
      alt: 'Swiss Alps',
      category: 'mountain',
      title: 'Swiss Alpine Adventure'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/400x300/dc3545/ffffff?text=Tokyo+City',
      alt: 'Tokyo City',
      category: 'city',
      title: 'Tokyo Urban Life'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x300/ffc107/ffffff?text=Machu+Picchu',
      alt: 'Machu Picchu',
      category: 'adventure',
      title: 'Machu Picchu Ruins'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/400x300/17a2b8/ffffff?text=Maldives+Resort',
      alt: 'Maldives Resort',
      category: 'luxury',
      title: 'Maldives Overwater Villa'
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/400x300/6f42c1/ffffff?text=Paris+Eiffel',
      alt: 'Paris Eiffel Tower',
      category: 'city',
      title: 'Paris Eiffel Tower'
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/400x300/fd7e14/ffffff?text=Desert+Safari',
      alt: 'Desert Safari',
      category: 'adventure',
      title: 'Desert Safari Adventure'
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'beach', name: 'Beach' },
    { id: 'mountain', name: 'Mountain' },
    { id: 'city', name: 'City' },
    { id: 'island', name: 'Island' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'luxury', name: 'Luxury' }
  ];

  const filteredImages = filter === 'all' 
    ? displayImages 
    : displayImages.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className="gallery-title">{title}</h2>
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3 className="image-title">{image.title}</h3>
              <span className="image-category">{image.category}</span>
              <div className="view-icon">👁️</div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid; 