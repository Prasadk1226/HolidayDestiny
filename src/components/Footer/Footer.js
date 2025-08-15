import React from 'react';
import { Link } from 'react-router-dom';
import HolidayLogo from '../../assets/images/HolidayLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    destinations: [
      { name: 'Beach Destinations', path: '/destinations?category=beach' },
      { name: 'Mountain Adventures', path: '/destinations?category=mountain' },
      { name: 'City Breaks', path: '/destinations?category=city' },
      { name: 'Island Getaways', path: '/destinations?category=island' },
      { name: 'Adventure Tours', path: '/destinations?category=adventure' }
    ],
    packages: [
      { name: 'Luxury Packages', path: '/packages?category=luxury' },
      { name: 'Budget Tours', path: '/packages?category=budget' },
      { name: 'Family Vacations', path: '/packages?category=family' },
      { name: 'Honeymoon Packages', path: '/packages?category=honeymoon' },
      { name: 'Group Tours', path: '/packages?category=group' }
    ],
    services: [
      { name: 'Flight Booking', path: '/services#flights' },
      { name: 'Hotel Reservations', path: '/services#hotels' },
      { name: 'Travel Insurance', path: '/services#insurance' },
      { name: 'Visa Services', path: '/services#visa' },
      { name: 'Guided Tours', path: '/services#tours' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Travel Tips', path: '/travel-tips' },
      { name: 'Customer Reviews', path: '/reviews' },
      { name: 'Emergency Support', path: '/emergency' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-gradient-to-br from-white-900 via-white-800 to-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
  <div className="w-12 h-12  from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center overflow-hidden">
    <img 
      src={HolidayLogo}
      alt="Holiday Destiny Logo" 
      className="w-full h-full object-contain"
    />
  </div>
  <span className="text-3xl font-bold font-display gradient-text">
    Holiday Destiny
  </span>
</div>

            <p className="text-black mb-6 leading-relaxed">
              Your trusted partner for unforgettable travel experiences. We specialize in creating 
              personalized journeys that transform your dreams into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br from-cyan-100 via-magenta-100 to-gray-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-black hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Packages</h4>
            <ul className="space-y-2">
              {footerLinks.packages.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-black hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-black hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl font-bold mb-2 text-primary-400">Stay Updated</h4>
              <p className="text-black mb-6">
                Subscribe to our newsletter for exclusive deals and travel inspiration
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-gradient-to-tr from-red-600 to-white text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Holiday Destiny. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">📧</span>
              <span>info@Holiday Destiny.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span>123 Travel Street, Adventure City, AC 12345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 