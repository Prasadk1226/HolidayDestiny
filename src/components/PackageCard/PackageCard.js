// import React from 'react';
// import { Link } from 'react-router-dom';

// const PackageCard = ({ package: travelPackage }) => {
//   const {
//     id,
//     name,
//     description,
//     image,
//     price,
//     originalPrice,
//     duration,
//     rating,
//     International,
//     includes,
//     highlights,
//     category
//   } = travelPackage;

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(
//         <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <defs>
//             <linearGradient id="halfStar">
//               <stop offset="50%" stopColor="#fbbf24" />
//               <stop offset="50%" stopColor="#e5e7eb" />
//             </linearGradient>
//           </defs>
//           <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       );
//     }

//     const emptyStars = 5 - Math.ceil(rating);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       );
//     }

//     return stars;
//   };

//   const discount = originalPrice ? Math.round(((parseFloat(originalPrice.replace('$', '')) - parseFloat(price.replace('$', ''))) / parseFloat(originalPrice.replace('$', ''))) * 100) : 0;

//   return (
//     <div className="card group overflow-hidden border-2 border-transparent hover:border-primary-200">
//       {/* Image Container */}
//       <div className="relative h-64 overflow-hidden">
//         <img 
//           src={image} 
//           alt={name} 
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           onError={(e) => {
//             e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
//           }}
//         />
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
//         {/* Category Badge */}
//         <div className="absolute top-4 left-4">
//           <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
//             {category}
//           </span>
//         </div>
        
//         {/* Discount Badge */}
//         {discount > 0 && (
//           <div className="absolute top-4 right-4">
//             <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full animate-pulse">
//               -{discount}%
//             </span>
//           </div>
//         )}
        
//         {/* Rating */}
//         <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
//           <div className="flex">
//             {renderStars(rating)}
//           </div>
//           <span className="text-sm font-semibold text-gray-800 ml-1">{rating}</span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
//           {name}
//         </h3>
        
//         <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//           {description}
//         </p>
        
//         {/* Duration */}
//         <div className="flex items-center gap-2 mb-4 text-primary-600">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           <span className="text-sm font-medium">{duration}</span>
//         </div>

//         {/* International */}
//         <div className="mb-4">
//           <h4 className="text-sm font-semibold text-gray-700 mb-2">International:</h4>
//           <div className="flex flex-wrap gap-2">
//             {International.map((destination, index) => (
//               <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">
//                 {destination}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Includes */}
//         <div className="mb-4">
//           <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
//           <div className="space-y-1">
//             {includes.slice(0, 4).map((item, index) => (
//               <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
//                 <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//                 {item}
//               </div>
//             ))}
//             {includes.length > 4 && (
//               <span className="text-xs text-gray-500 italic">
//                 +{includes.length - 4} more
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Highlights */}
//         <div className="mb-6">
//           <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
//           <div className="flex flex-wrap gap-2">
//             {highlights.slice(0, 2).map((highlight, index) => (
//               <span key={index} className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-md">
//                 {highlight}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Pricing */}
//         <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-6 text-center">
//           <div className="flex items-center justify-center gap-3 mb-1">
//             <span className="text-2xl font-bold text-primary-600">{price}</span>
//             {originalPrice && (
//               <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
//             )}
//           </div>
//           <span className="text-sm text-gray-600">per person</span>
//         </div>

//         {/* Actions */}
//         <div className="flex gap-3">
//           <Link 
//             to={`/domestic/${id}`} 
//             className="flex-1 btn-primary text-center py-2"
//           >
//             View Details
//           </Link>
//           <button className="flex-1 btn-outline py-2">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PackageCard; 

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PackageCard = ({ package: travelPackage }) => {
  const {
    id,
    name,
    description,
    image,
    price,
    originalPrice,
    duration,
    rating,
    International,
    includes,
    highlights,
    category
  } = travelPackage;

  // Convert single image to array for consistency
  const images = Array.isArray(image) ? image : [image];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  const discount = originalPrice
    ? Math.round(((parseFloat(originalPrice.replace('$', '')) - parseFloat(price.replace('$', ''))) / parseFloat(originalPrice.replace('$', ''))) * 100)
    : 0;

  // Slider settings
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="card group overflow-hidden border-2 border-transparent hover:border-primary-200">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <Slider {...sliderSettings}>
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-64">
              <img
                src={img}
                alt={name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2070&q=80';
                }}
              />
            </div>
          ))}
        </Slider>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full animate-pulse">
              -{discount}%
            </span>
          </div>
        )}

        {/* Rating */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm font-semibold text-gray-800 ml-1">{rating}</span>
        </div>
      </div>

      {/* Content (same as before) */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Duration */}
        <div className="flex items-center gap-2 mb-4 text-primary-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">{duration}</span>
        </div>

        {/* International */}
        {International && International.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">International:</h4>
            <div className="flex flex-wrap gap-2">
              {International.map((destination, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">
                  {destination}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Includes */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
          <div className="space-y-1">
            {includes.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </div>
            ))}
            {includes.length > 4 && (
              <span className="text-xs text-gray-500 italic">+{includes.length - 4} more</span>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {highlights.slice(0, 2).map((highlight, index) => (
              <span key={index} className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-md">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-2xl font-bold text-primary-600">{price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
          <span className="text-sm text-gray-600">per person</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link to={`/domestic/${id}`} className="flex-1 btn-primary text-center py-2">
            View Details
          </Link>
          <button className="flex-1 btn-outline py-2">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
