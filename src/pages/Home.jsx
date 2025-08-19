import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero/Hero";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import PackageCard from "../components/PackageCard/PackageCard";
import InternationalData from "../data/international.json";
import domesticData from "../data/domestic.json";
import image from "../assets/images/FounderVenu.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Custom Carousel Arrows

const Home = () => {
  const featuredInternational = InternationalData;
  const featuredDomestic = domesticData;

  const responsiveSettings = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Holiday Destiny - Discover Your Perfect Holiday Destination
        </title>
        <meta
          name="description"
          content="Explore breathtaking destinations, create unforgettable memories, and experience the world's most beautiful places with our curated travel packages."
        />
        <meta
          name="keywords"
          content="travel, vacation, destinations, packages, holiday, tour, booking"
        />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              About <span className="gradient-text">Holiday Destiny</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about creating unforgettable travel experiences
              that transform your dreams into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">
                We offer competitive prices and price matching to ensure you get
                the best deals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 8v4l3 3" />
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated team is available round the clock to assist you
                with any queries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Experiences</h3>
              <p className="text-gray-600">
                Carefully selected destinations and activities for unforgettable
                memories.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/about" className="btn-primary text-lg px-8 py-4">
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured International */}
      <section id="International" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Popular <span className="gradient-text">International Tours</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the world's most amazing places and create memories that
              last a lifetime
            </p>
          </div>

          <div className="relative w-full pb-16">
            <Carousel
              responsive={responsiveSettings}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
              renderButtonGroupOutside={true}
            >
              {featuredInternational.map((destination) => (
                <div key={destination.id} className="px-2">
                  <DestinationCard destination={destination} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <a href="/international" className="btn-primary text-lg px-8 py-4">
              View All International
            </a>
          </div>
        </div>
      </section>

      {/* Featured domestic */}
      <section id="domestic" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Featured <span className="gradient-text">Domestic Tours</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked travel packages designed to give you the best
              experience
            </p>
          </div>

          <div className="relative w-full pb-16">
            <Carousel
              responsive={responsiveSettings}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={300}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
              renderButtonGroupOutside={true}
            >
              {featuredDomestic.map((packageItem) => (
                <div key={packageItem.id} className="px-2">
                  <PackageCard package={packageItem} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <a href="/domestic" className="btn-primary text-lg px-8 py-4">
              View All Domestics
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
              Explore stunning destinations through our curated collection of
              travel photos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
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

      {/* Founder Section */}
      <section className="section h-[75vh] gradient-bg">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center p-24  rounded-full ">
            <img
              src={image}
              alt="Mr. Venu Gopal"
              className="rounded-full shadow-lg max-w-s"
            />
          </div>
          {/* Text */}
          <div className="text-white">
            {/* <h2 className="text-3xl underline bg-gradient-to-r from-green-800 to-red-600 bg-clip-text text-transparent font-bold mb-4">Meet Our Founder</h2> */}
            <h2 className="text-3xl underline bg-gradient-to-r from-green-800 to-red-600 bg-clip-text text-transparent font-bold mb-4">Meet Our Founder</h2>
            <p className="text-lg mb-6">
              Mr. Venu Gopal, the visionary behind Holiday Destiny, has
              dedicated over a decade to crafting unforgettable travel
              experiences for thousands of travelers worldwide. His deep
              understanding of the tourism industry, coupled with a passion for
              customer satisfaction, has made Holiday Destiny a trusted name in
              travel.
            </p>
            <div>
              <p className="text-3xl font-semibold bg-gradient-to-r from-green-800 to-red-600 bg-clip-text text-transparent">Mr. Venu Gopal</p>
              <p className="mb-2">Founder & Head of Operations</p>
              <p>📞 9885164442</p>
              <p>
                ✉️{" "}
                <a href="mailto:chitta_venu@yahoo.com" >
                  chitta_venu@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="container-custom">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your next adventure? Reach out to us and we’ll help
              you plan the perfect trip!
            </p>
          </div>

          {/* Contact Info */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-8 flex items-center space-x-4">
              <div className="w-14 h-14 btn-secondary rounded-full flex items-center justify-center text-white text-2xl">
                ✉️
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">enquiry@holidaydestiny.co.in</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-8 flex items-center space-x-4">
              <div className="w-14 h-14 btn-secondary rounded-full flex items-center justify-center text-white text-2xl">
                📞
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block btn-primary text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[url('https://myholidayhappiness.com/uploads/andhra-pradesh-5299.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="container-custom text-center bg-black/40 p-8 rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered amazing
            destinations with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/international"
              className="btn-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Internationals
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// import React, { useRef } from 'react';
// import { Helmet } from 'react-helmet-async';
// import Hero from '../components/Hero/Hero';
// import DestinationCard from '../components/DestinationCard/DestinationCard';
// import PackageCard from '../components/PackageCard/PackageCard';
// import InternationalData from '../data/international.json';
// import domesticData from '../data/domestic.json';
// import image from '../assets/images/HolidayLogo.png';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

// // Custom arrow components with explicit styling for visibility
// // Updated Custom Arrow components using theme classes from index.css
// const CustomNextArrow = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="custom-arrow absolute right-2 translate-y-1/2 z-20
//                  w-10 h-10 rounded-sm btn-primary shadow-lg
//                  flex items-center justify-center hover:scale-110 transition-transform duration-300"
//     >
//       {/* Arrow shape */}
//       <FontAwesomeIcon icon={faCircleArrowRight} style={{color: "#B197FC", fontSize:'24px'}} />
//     </button>
//   );
// };

// const CustomPrevArrow = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="custom-arrow absolute right-10 z-20
//                  w-10 h-10 rounded-sm btn-primary shadow-lg
//                  flex items-center justify-center hover:scale-110 transition-transform duration-300"
//     >
//       {/* Arrow shape */}
//       <FontAwesomeIcon icon={faCircleArrowLeft} style={{color: "#B197FC", fontSize:'24px'}} />
//     </button>
//   );
// };

// const Home = () => {
//   const featuredInternational = InternationalData.slice(0, 6);
//   const featuredDomestic = domesticData.slice(0, 3);

//   const internationalSlider = useRef(null);
//   const domesticSlider = useRef(null);

//   const internationalSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ],
//     onAfterChange: (index) => {
//       domesticSlider.current.slickPrev();
//     },
//   };

//   const domesticSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     rtl: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ],
//     onAfterChange: (index) => {
//       internationalSlider.current.slickPrev();
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Holiday Destiny - Discover Your Perfect Holiday Destination</title>
//         <meta name="description" content="Explore breathtaking destinations, create unforgettable memories, and experience the world's most beautiful places with our curated travel packages." />
//         <meta name="keywords" content="travel, vacation, destinations, packages, holiday, tour, booking" />
//       </Helmet>

//       {/* Hero Section */}
//       <section id="home" className="relative">
//         <Hero />
//       </section>

//       {/* About Section */}
//       <section id="about" className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
//               About <span className="gradient-text">Holiday Destiny</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We're passionate about creating unforgettable travel experiences that transform your dreams into reality
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
//               <p className="text-gray-600">We offer competitive prices and price matching to ensure you get the best deals.</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-14 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
//               <p className="text-gray-600">Our dedicated team is available round the clock to assist you with any queries.</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-2">Curated Experiences</h3>
//               <p className="text-gray-600">Carefully selected destinations and activities for unforgettable memories.</p>
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <a href="/about" className="btn-primary text-lg px-8 py-4">
//               About Us
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Featured International */}
//       <section id="International" className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
//               Popular <span className="gradient-text">International</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Discover the world's most amazing places and create memories that last a lifetime
//             </p>
//           </div>

//           <div className="relative">
//             <Slider ref={internationalSlider} {...internationalSettings}>
//               {featuredInternational.map((destination) => (
//                 <div key={destination.id} className="px-2">
//                   <DestinationCard destination={destination} />
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           <div className="text-center mt-12">
//             <a href="/international" className="btn-primary text-lg px-8 py-4">
//               View All International
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Featured domestic */}
//       <section id="domestic" className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
//               Featured <span className="gradient-text">Domestic Tours</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Handpicked travel packages designed to give you the best experience
//             </p>
//           </div>

//           <div className="relative">
//             <Slider ref={domesticSlider} {...domesticSettings}>
//               {featuredDomestic.map((packageItem) => (
//                 <div key={packageItem.id} className="px-2">
//                   <PackageCard package={packageItem} />
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           <div className="text-center mt-12">
//             <a href="/domestic" className="btn-primary text-lg px-8 py-4">
//               View All Domestics
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
//               Travel <span className="gradient-text">Gallery</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Explore stunning destinations through our curated collection of travel photos
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//               'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//               'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//               'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//             ].map((image, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer">
//                 <img
//                   src={image}
//                   alt={`Gallery image ${index + 1}`}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-lg font-bold">Beautiful Destination</h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <a href="/gallery" className="btn-primary text-lg px-8 py-4">
//               View Full Gallery
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Founder Section */}
//       <section className="section-padding gradient-bg">
//         <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src={image}
//               alt="Mr. Venu Gopal"
//               className="rounded-full shadow-lg max-w-s"
//             />
//           </div>
//           {/* Text */}
//           <div className="text-white">
//             <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
//             <p className="text-lg mb-6">
//               Mr. Venu Gopal, the visionary behind Holiday Destiny, has dedicated over a decade to crafting unforgettable travel experiences for thousands of travelers worldwide.
//               His deep understanding of the tourism industry, coupled with a passion for customer satisfaction, has made Holiday Destiny a trusted name in travel.
//             </p>
//             <div>
//               <p className="text-xl font-semibold">Mr. Venu Gopal</p>
//               <p className="mb-2">Founder & Head of Operations</p>
//               <p>📞 9885164442 (Package/Flights/Visa)</p>
//               <p>✉️ <a href="mailto:chitta_venu@yahoo.com" className="underline">chitta_venu@yahoo.com</a></p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
//               Get in <span className="gradient-text">Touch</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Ready to start your next adventure? Let us help you plan the perfect trip!
//             </p>
//           </div>

//           <div className="max-w-2xl mx-auto">
//             <div className="bg-gray-50 rounded-2xl p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Email</h3>
//                   <p className="text-gray-600">enquiry@holidaydestiny.co.in</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Phone</h3>
//                   <p className="text-gray-600">+1 (555) 123-4567</p>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <a href="/contact" className="btn-primary text-lg px-8 py-4">
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-padding bg-gradient-to-r from-blue-500 to-indigo-600">
//         <div className="container-custom text-center">
//           <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
//             Ready to Start Your Adventure?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Join thousands of happy travelers who have discovered amazing destinations with us
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="/international" className="btn-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
//               Explore Internationals
//             </a>
//             <a href="/contact" className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white transition-all duration-300 transform hover:scale-105">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
