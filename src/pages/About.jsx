import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const stats = [
    { number: '500+', label: 'Destinations' },
    { number: '10K+', label: 'Happy Travelers' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Passionate about creating unforgettable travel experiences for our clients.'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Ensuring every journey is perfectly planned and executed.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Travel Consultant',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in crafting personalized travel itineraries.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Holiday Destiny</title>
        <meta name="description" content="Learn about Holiday Destiny's mission to create unforgettable travel experiences." />
      </Helmet>

      {/* Hero Section */}
      <section 
      className="bg-cover bg-center text-white min-h-[45vh] flex items-center"
      // style={{ backgroundImage: `url(${yourBackgroundImage})` }}
      style={{ backgroundImage: `url(${'https://codewithsadee.github.io/tourly/assets/images/hero-banner.jpg'})` }}
    >
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
          About <span className="bg-gradient-to-r from-yellow-200 to-red-400 bg-clip-text text-transparent">Holiday Destiny</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          We're passionate about creating unforgettable travel experiences that transform your dreams into reality
        </p>
      </div>
    </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Holiday Destiny, we believe that travel has the power to transform lives. Our mission is to create 
                extraordinary journeys that inspire, educate, and connect people with the world's most 
                beautiful destinations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're committed to providing exceptional service, competitive prices, and unforgettable 
                experiences that exceed your expectations. Every trip we plan is crafted with care, 
                attention to detail, and a deep understanding of what makes travel truly special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Learn More</button>
                <button className="btn-outline">Our Story</button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Travel destination"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 006.364-6.364L12 3.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Passion</h3>
              <p className="text-gray-600">
                We're passionate about travel and committed to sharing that passion with our clients.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from planning to execution.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in building lasting relationships with our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind every unforgettable journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary text-lg px-8 py-4">
              Explore Destinations
            </button>
            <button className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-800">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
