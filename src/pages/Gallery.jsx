import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Bali Beach Paradise',
      category: 'beach',
      title: 'Bali Beach Paradise'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Santorini Sunset Views',
      category: 'island',
      title: 'Santorini Sunset Views'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Swiss Alpine Adventure',
      category: 'mountain',
      title: 'Swiss Alpine Adventure'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      alt: 'Tokyo Urban Life',
      category: 'city',
      title: 'Tokyo Urban Life'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Machu Picchu Ruins',
      category: 'adventure',
      title: 'Machu Picchu Ruins'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Maldives Overwater Villa',
      category: 'luxury',
      title: 'Maldives Overwater Villa'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1502602898534-8610c4b5b1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Paris Eiffel Tower',
      category: 'city',
      title: 'Paris Eiffel Tower'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Desert Safari Adventure',
      category: 'adventure',
      title: 'Desert Safari Adventure'
    }
  ];

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
    ? images 
    : images.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Holiday Destiny</title>
        <meta name="description" content="Explore our stunning travel gallery showcasing beautiful destinations around the world." />
      </Helmet>

      {/* Hero Section */}
      <section 
      className="bg-cover bg-center text-white min-h-[45vh] flex items-center"
      // style={{ backgroundImage: `url(${travelGalleryImage})` }}
      style={{ backgroundImage: `url(${'https://codewithsadee.github.io/tourly/assets/images/hero-banner.jpg'})` }}
    >
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
          Travel <span className="bg-gradient-to-r from-yellow-200 to-red-400 bg-clip-text text-transparent">Gallery</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Explore stunning destinations through our curated collection of travel photos
        </p>
      </div>
    </section>

      {/* Filter Section */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No images found</h3>
              <p className="text-gray-600 mb-6">
                Try selecting a different category
              </p>
              <button
                onClick={() => setFilter('all')}
                className="btn-primary"
              >
                View All Images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <span className="inline-block px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-full uppercase tracking-wider">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
