import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero/Hero';
import DestinationCard from '../components/DestinationCard/DestinationCard';
import PackageCard from '../components/PackageCard/PackageCard';
import destinationsData from '../data/destinations.json';
import packagesData from '../data/packages.json';

const Home = () => {
  const featuredDestinations = destinationsData.slice(0, 6);
  const featuredPackages = packagesData.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Holiday Destiny - Discover Your Perfect Holiday Destination</title>
        <meta name="description" content="Explore breathtaking destinations, create unforgettable memories, and experience the world's most beautiful places with our curated travel packages." />
        <meta name="keywords" content="travel, vacation, destinations, packages, holiday, tour, booking" />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Popular <span className="gradient-text">Destinations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the world's most amazing places and create memories that last a lifetime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/destinations" className="btn-primary text-lg px-8 py-4">
              View All Destinations
            </a>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="packages" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Featured <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked travel packages designed to give you the best experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPackages.map((packageItem) => (
              <PackageCard key={packageItem.id} package={packageItem} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/packages" className="btn-primary text-lg px-8 py-4">
              View All Packages
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Travel <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore stunning destinations through our curated collection of travel photos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Beautiful Destination</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/gallery" className="btn-primary text-lg px-8 py-4">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              About <span className="gradient-text">Holiday Destiny</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about creating unforgettable travel experiences that transform your dreams into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">We offer competitive prices and price matching to ensure you get the best deals.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-14 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is available round the clock to assist you with any queries.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Experiences</h3>
              <p className="text-gray-600">Carefully selected destinations and activities for unforgettable memories.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/about" className="btn-primary text-lg px-8 py-4">
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your next adventure? Let us help you plan the perfect trip!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">info@Holiday Destiny.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="text-center">
                <a href="/contact" className="btn-primary text-lg px-8 py-4">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered amazing destinations with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/destinations" className="bg-gradient-to-r from-amber-400 to-red-500 hover:from-amber-500 hover:to-red-600 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Explore Destinations
            </a>
            <a href="/contact" className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white transition-all duration-300 transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
