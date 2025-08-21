


// import React, { useState } from 'react';
// // import './GalleryGrid.css';

// // Import all images from the provided file structure
// import image1 from '../assets/images/international/gallery/1.jpg';
// import image2 from '../assets/images/international/gallery/2.jpg';
// import image3 from '../assets/images/international/gallery/3.jpg';
// import image4 from '../assets/images/international/gallery/4.jpg';
// import image5 from '../assets/images/international/gallery/5.jpg';
// import image6 from '../assets/images/international/gallery/6.jpg';
// import image7 from '../assets/images/international/gallery/7.jpg';
// import image8 from '../assets/images/international/gallery/8.jpg';
// import image9 from '../assets/images/international/gallery/9.jpg';
// import image10 from '../assets/images/international/gallery/10.jpg';
// import image11 from '../assets/images/international/gallery/11.jpg';
// import image12 from '../assets/images/international/gallery/12.jpg';
// import image13 from '../assets/images/international/gallery/13.jpg';
// import image14 from '../assets/images/international/gallery/14.jpg';
// import image15 from '../assets/images/international/gallery/15.jpg';
// import image16 from '../assets/images/international/gallery/16.jpg';
// import image17 from '../assets/images/international/gallery/17.jpg';
// import image18 from '../assets/images/international/gallery/18.jpg';
// import image19 from '../assets/images/international/gallery/19.jpg';
// import image20 from '../assets/images/international/gallery/20.jpg';
// import image21 from '../assets/images/international/gallery/21.jpg';
// import image22 from '../assets/images/international/gallery/22.jpg';
// import image23 from '../assets/images/international/gallery/23.jpg';
// import image24 from '../assets/images/international/gallery/24.jpg';
// import image25 from '../assets/images/international/gallery/25.jpg';
// import image26 from '../assets/images/international/gallery/26.jpg';
// import image27 from '../assets/images/international/gallery/27.jpg';
// import image28 from '../assets/images/international/gallery/28.jpg';
// import image29 from '../assets/images/international/gallery/29.jpg';
// import image30 from '../assets/images/international/gallery/30.jpg';
// import image31 from '../assets/images/international/gallery/31.jpg';
// import image32 from '../assets/images/international/gallery/32.jpg';
// import image33 from '../assets/images/international/gallery/33.jpg';
// import image34 from '../assets/images/international/gallery/34.jpg';
// import image35 from '../assets/images/international/gallery/35.jpg';
// import image36 from '../assets/images/international/gallery/36.jpg';
// import image37 from '../assets/images/international/gallery/37.jpg';
// import image38 from '../assets/images/international/gallery/38.jpg';
// import image39 from '../assets/images/international/gallery/39.jpg';
// import image40 from '../assets/images/international/gallery/40.jpg';
// import image41 from '../assets/images/international/gallery/41.jpg';
// import image42 from '../assets/images/international/gallery/42.jpg';
// import image43 from '../assets/images/international/gallery/43.jpg';
// import image44 from '../assets/images/international/gallery/44.jpg';
// import image45 from '../assets/images/international/gallery/45.jpg';
// import image46 from '../assets/images/international/gallery/46.jpg';
// import image47 from '../assets/images/international/gallery/47.jpg';
// import image48 from '../assets/images/international/gallery/48.jpg';
// import image49 from '../assets/images/international/gallery/49.jpg';
// import image50 from '../assets/images/international/gallery/50.jpg';
// import image51 from '../assets/images/international/gallery/51.jpg';
// import image52 from '../assets/images/international/gallery/52.jpg';
// import image53 from '../assets/images/international/gallery/53.jpg';
// import image54 from '../assets/images/international/gallery/54.jpg';
// import image55 from '../assets/images/international/gallery/55.jpg';
// import image56 from '../assets/images/international/gallery/56.jpg';
// import image57 from '../assets/images/international/gallery/57.jpg';
// import image58 from '../assets/images/international/gallery/58.jpg';
// import image59 from '../assets/images/international/gallery/59.jpg';
// import image60 from '../assets/images/international/gallery/60.jpg';
// import image61 from '../assets/images/international/gallery/61.jpg';
// import image62 from '../assets/images/international/gallery/62.jpg';
// import image63 from '../assets/images/international/gallery/63.jpg';

// import tour1Img1 from '../assets/images/international/gallery/tour1Img1.jpg';
// import tour1Img2 from '../assets/images/international/gallery/tour1Img2.jpg';
// import tour1Img3 from '../assets/images/international/gallery/tour1Img3.jpg';
// import tour1Img4 from '../assets/images/international/gallery/tour1Img4.jpg';
// import tour1Img5 from '../assets/images/international/gallery/tour1Img5.jpg';
// import tour1Img6 from '../assets/images/international/gallery/tour1Img6.jpg';
// import tour1Img7 from '../assets/images/international/gallery/tour1Img7.jpg';
// import tour1Img8 from '../assets/images/international/gallery/tour1Img8.jpg';
// import tour1Img9 from '../assets/images/international/gallery/tour1Img9.jpg';
// import tour2Img1 from '../assets/images/international/gallery/tour2Img1.jpg';
// import tour2Img2 from '../assets/images/international/gallery/tour2Img2.jpg';
// import tour2Img3 from '../assets/images/international/gallery/tour2Img3.jpg';
// import tour2Img4 from '../assets/images/international/gallery/tour2Img4.jpg';
// import tour2Img5 from '../assets/images/international/gallery/tour2Img5.jpg';
// import tour2Img6 from '../assets/images/international/gallery/tour2Img6.jpg';
// import tour2Img7 from '../assets/images/international/gallery/tour2Img7.jpg';
// import tour2Img8 from '../assets/images/international/gallery/tour2Img8.jpg';
// import tour2Img9 from '../assets/images/international/gallery/tour2Img9.jpg';
// import tour2Img10 from '../assets/images/international/gallery/tour2Img10.jpg';
// import tour2Img11 from '../assets/images/international/gallery/tour2Img11.jpg';
// import tour3Img1 from '../assets/images/international/gallery/tour3Img1.jpg';

// const GalleryGrid = ({ images = [], title = "Travel Gallery" }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [filter, setFilter] = useState('all');

//   const allImages = [
//     { id: '1', src: image1, alt: 'Image 1', category: 'beach', title: 'Beach View' },
//     { id: '2', src: image2, alt: 'Image 2', category: 'mountain', title: 'Mountain View' },
//     { id: '3', src: image3, alt: 'Image 3', category: 'city', title: 'City View' },
//     { id: '4', src: image4, alt: 'Image 4', category: 'island', title: 'Island View' },
//     { id: '5', src: image5, alt: 'Image 5', category: 'adventure', title: 'Adventure View' },
//     { id: '6', src: image6, alt: 'Image 6', category: 'luxury', title: 'Luxury View' },
//     { id: '7', src: image7, alt: 'Image 7', category: 'city', title: 'City View' },
//     { id: '8', src: image8, alt: 'Image 8', category: 'adventure', title: 'Adventure View' },
//     { id: '9', src: image9, alt: 'Image 9', category: 'beach', title: 'Beach View' },
//     { id: '10', src: image10, alt: 'Image 10', category: 'mountain', title: 'Mountain View' },
//     { id: '11', src: image11, alt: 'Image 11', category: 'city', title: 'City View' },
//     { id: '12', src: image12, alt: 'Image 12', category: 'island', title: 'Island View' },
//     { id: '13', src: image13, alt: 'Image 13', category: 'adventure', title: 'Adventure View' },
//     { id: '14', src: image14, alt: 'Image 14', category: 'luxury', title: 'Luxury View' },
//     { id: '15', src: image15, alt: 'Image 15', category: 'city', title: 'City View' },
//     { id: '16', src: image16, alt: 'Image 16', category: 'adventure', title: 'Adventure View' },
//     { id: '17', src: image17, alt: 'Image 17', category: 'beach', title: 'Beach View' },
//     { id: '18', src: image18, alt: 'Image 18', category: 'mountain', title: 'Mountain View' },
//     { id: '19', src: image19, alt: 'Image 19', category: 'city', title: 'City View' },
//     { id: '20', src: image20, alt: 'Image 20', category: 'island', title: 'Island View' },
//     { id: '21', src: image21, alt: 'Image 21', category: 'adventure', title: 'Adventure View' },
//     { id: '22', src: image22, alt: 'Image 22', category: 'luxury', title: 'Luxury View' },
//     { id: '23', src: image23, alt: 'Image 23', category: 'city', title: 'City View' },
//     { id: '24', src: image24, alt: 'Image 24', category: 'adventure', title: 'Adventure View' },
//     { id: '25', src: image25, alt: 'Image 25', category: 'beach', title: 'Beach View' },
//     { id: '26', src: image26, alt: 'Image 26', category: 'mountain', title: 'Mountain View' },
//     { id: '27', src: image27, alt: 'Image 27', category: 'city', title: 'City View' },
//     { id: '28', src: image28, alt: 'Image 28', category: 'island', title: 'Island View' },
//     { id: '29', src: image29, alt: 'Image 29', category: 'adventure', title: 'Adventure View' },
//     { id: '30', src: image30, alt: 'Image 30', category: 'luxury', title: 'Luxury View' },
//     { id: '31', src: image31, alt: 'Image 31', category: 'city', title: 'City View' },
//     { id: '32', src: image32, alt: 'Image 32', category: 'adventure', title: 'Adventure View' },
//     { id: '33', src: image33, alt: 'Image 33', category: 'beach', title: 'Beach View' },
//     { id: '34', src: image34, alt: 'Image 34', category: 'mountain', title: 'Mountain View' },
//     { id: '35', src: image35, alt: 'Image 35', category: 'city', title: 'City View' },
//     { id: '36', src: image36, alt: 'Image 36', category: 'island', title: 'Island View' },
//     { id: '37', src: image37, alt: 'Image 37', category: 'adventure', title: 'Adventure View' },
//     { id: '38', src: image38, alt: 'Image 38', category: 'luxury', title: 'Luxury View' },
//     { id: '39', src: image39, alt: 'Image 39', category: 'city', title: 'City View' },
//     { id: '40', src: image40, alt: 'Image 40', category: 'adventure', title: 'Adventure View' },
//     { id: '41', src: image41, alt: 'Image 41', category: 'beach', title: 'Beach View' },
//     { id: '42', src: image42, alt: 'Image 42', category: 'mountain', title: 'Mountain View' },
//     { id: '43', src: image43, alt: 'Image 43', category: 'city', title: 'City View' },
//     { id: '44', src: image44, alt: 'Image 44', category: 'island', title: 'Island View' },
//     { id: '45', src: image45, alt: 'Image 45', category: 'adventure', title: 'Adventure View' },
//     { id: '46', src: image46, alt: 'Image 46', category: 'luxury', title: 'Luxury View' },
//     { id: '47', src: image47, alt: 'Image 47', category: 'city', title: 'City View' },
//     { id: '48', src: image48, alt: 'Image 48', category: 'adventure', title: 'Adventure View' },
//     { id: '49', src: image49, alt: 'Image 49', category: 'beach', title: 'Beach View' },
//     { id: '50', src: image50, alt: 'Image 50', category: 'mountain', title: 'Mountain View' },
//     { id: '51', src: image51, alt: 'Image 51', category: 'city', title: 'City View' },
//     { id: '52', src: image52, alt: 'Image 52', category: 'island', title: 'Island View' },
//     { id: '53', src: image53, alt: 'Image 53', category: 'adventure', title: 'Adventure View' },
//     { id: '54', src: image54, alt: 'Image 54', category: 'luxury', title: 'Luxury View' },
//     { id: '55', src: image55, alt: 'Image 55', category: 'city', title: 'City View' },
//     { id: '56', src: image56, alt: 'Image 56', category: 'adventure', title: 'Adventure View' },
//     { id: '57', src: image57, alt: 'Image 57', category: 'beach', title: 'Beach View' },
//     { id: '58', src: image58, alt: 'Image 58', category: 'mountain', title: 'Mountain View' },
//     { id: '59', src: image59, alt: 'Image 59', category: 'city', title: 'City View' },
//     { id: '60', src: image60, alt: 'Image 60', category: 'island', title: 'Island View' },
//     { id: '61', src: image61, alt: 'Image 61', category: 'adventure', title: 'Adventure View' },
//     { id: '62', src: image62, alt: 'Image 62', category: 'luxury', title: 'Luxury View' },
//     { id: '63', src: image63, alt: 'Image 63', category: 'city', title: 'City View' },
//     { id: 't1-1', src: tour1Img1, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-2', src: tour1Img2, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-3', src: tour1Img3, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-4', src: tour1Img4, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-5', src: tour1Img5, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-6', src: tour1Img6, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-7', src: tour1Img7, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-8', src: tour1Img8, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't1-9', src: tour1Img9, alt: 'Image of Singapore', category: 'international', title: 'Singapore & Malaysia Tour' },
//     { id: 't2-1', src: tour2Img1, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-2', src: tour2Img2, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-3', src: tour2Img3, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-4', src: tour2Img4, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-5', src: tour2Img5, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-6', src: tour2Img6, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-7', src: tour2Img7, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-8', src: tour2Img8, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-9', src: tour2Img9, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-10', src: tour2Img10, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't2-11', src: tour2Img11, alt: 'Image of Thailand', category: 'international', title: 'Thailand Tour' },
//     { id: 't3-1', src: tour3Img1, alt: 'Image of Nepal', category: 'international', title: 'Nepal Tour' },
//   ];

//   const displayImages = images.length > 0 ? images : allImages;

//   const categories = [
//     { id: 'all', name: 'All' },
//     { id: 'international', name: 'International' },
//     { id: 'beach', name: 'Beach' },
//     { id: 'mountain', name: 'Mountain' },
//     { id: 'city', name: 'City' },
//     { id: 'island', name: 'Island' },
//     { id: 'adventure', name: 'Adventure' },
//     { id: 'luxury', name: 'Luxury' },
//   ];

//   const filteredImages = filter === 'all'
//     ? displayImages
//     : displayImages.filter(img => img.category === filter);

//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="gallery-container">
//       <div className="gallery-header">
//         <h2 className="gallery-title">{title}</h2>
//         <div className="gallery-filters">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               className={`filter-button ${filter === category.id ? 'active' : ''}`}
//               onClick={() => setFilter(category.id)}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="gallery-grid">
//         {filteredImages.map((image) => (
//           <div
//             key={image.id}
//             className="gallery-item"
//             onClick={() => openModal(image)}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="gallery-image"
//               loading="lazy"
//             />
//             <div className="gallery-overlay">
//               <h3 className="image-title">{image.title}</h3>
//               <span className="image-category">{image.category}</span>
//               <div className="view-icon">👁️</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedImage && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={closeModal}>
//               ✕
//             </button>
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="modal-image"
//               loading="lazy"
//             />
//             <div className="modal-info">
//               <h3>{selectedImage.title}</h3>
//               <p>{selectedImage.alt}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryGrid;





import React, { useState } from 'react'; // Import useState
import { Helmet } from 'react-helmet-async';
import banner from "../assets/images/hero-banner.jpg";

// Import all images from the provided file structure
import image1 from '../assets/images/international/gallery/1.jpg';
import image2 from '../assets/images/international/gallery/2.jpg';
import image3 from '../assets/images/international/gallery/3.jpg';
import image4 from '../assets/images/international/gallery/4.jpg';
import image5 from '../assets/images/international/gallery/5.jpg';
import image6 from '../assets/images/international/gallery/6.jpg';
import image7 from '../assets/images/international/gallery/7.jpg';
import image8 from '../assets/images/international/gallery/8.jpg';
import image9 from '../assets/images/international/gallery/9.jpg';
import image10 from '../assets/images/international/gallery/10.jpg';
import image11 from '../assets/images/international/gallery/11.jpg';
import image12 from '../assets/images/international/gallery/12.jpg';
import image13 from '../assets/images/international/gallery/13.jpg';
import image14 from '../assets/images/international/gallery/14.jpg';
import image15 from '../assets/images/international/gallery/15.jpg';
import image16 from '../assets/images/international/gallery/16.jpg';
import image17 from '../assets/images/international/gallery/17.jpg';
import image18 from '../assets/images/international/gallery/18.jpg';
import image19 from '../assets/images/international/gallery/19.jpg';
import image20 from '../assets/images/international/gallery/20.jpg';
import image21 from '../assets/images/international/gallery/21.jpg';
import image22 from '../assets/images/international/gallery/22.jpg';
import image23 from '../assets/images/international/gallery/23.jpg';
import image24 from '../assets/images/international/gallery/24.jpg';
import image25 from '../assets/images/international/gallery/25.jpg';
import image26 from '../assets/images/international/gallery/26.jpg';
import image27 from '../assets/images/international/gallery/27.jpg';
import image28 from '../assets/images/international/gallery/28.jpg';
import image29 from '../assets/images/international/gallery/29.jpg';
import image30 from '../assets/images/international/gallery/30.jpg';
import image31 from '../assets/images/international/gallery/31.jpg';
import image32 from '../assets/images/international/gallery/32.jpg';
import image33 from '../assets/images/international/gallery/33.jpg';
import image34 from '../assets/images/international/gallery/34.jpg';
import image35 from '../assets/images/international/gallery/35.jpg';
import image36 from '../assets/images/international/gallery/36.jpg';
import image37 from '../assets/images/international/gallery/37.jpg';
import image38 from '../assets/images/international/gallery/38.jpg';
import image39 from '../assets/images/international/gallery/39.jpg';
import image40 from '../assets/images/international/gallery/40.jpg';
import image41 from '../assets/images/international/gallery/41.jpg';
import image42 from '../assets/images/international/gallery/42.jpg';
import image43 from '../assets/images/international/gallery/43.jpg';
import image44 from '../assets/images/international/gallery/44.jpg';
import image45 from '../assets/images/international/gallery/45.jpg';
import image46 from '../assets/images/international/gallery/46.jpg';
import image47 from '../assets/images/international/gallery/47.jpg';
import image48 from '../assets/images/international/gallery/48.jpg';
import image49 from '../assets/images/international/gallery/49.jpg';
import image50 from '../assets/images/international/gallery/50.jpg';
import image51 from '../assets/images/international/gallery/51.jpg';
import image52 from '../assets/images/international/gallery/52.jpg';
import image53 from '../assets/images/international/gallery/53.jpg';
import image54 from '../assets/images/international/gallery/54.jpg';
import image55 from '../assets/images/international/gallery/55.jpg';
import image56 from '../assets/images/international/gallery/56.jpg';
import image57 from '../assets/images/international/gallery/57.jpg';
import image58 from '../assets/images/international/gallery/58.jpg';
import image59 from '../assets/images/international/gallery/59.jpg';
import image60 from '../assets/images/international/gallery/60.jpg';
import image61 from '../assets/images/international/gallery/61.jpg';
import image62 from '../assets/images/international/gallery/62.jpg';
import image63 from '../assets/images/international/gallery/63.jpg';

import tour1Img1 from '../assets/images/international/gallery/tour1Img1.jpg';
import tour1Img2 from '../assets/images/international/gallery/tour1Img2.jpg';
import tour1Img3 from '../assets/images/international/gallery/tour1Img3.jpg';
import tour1Img4 from '../assets/images/international/gallery/tour1Img4.jpg';
import tour1Img5 from '../assets/images/international/gallery/tour1Img5.jpg';
import tour1Img6 from '../assets/images/international/gallery/tour1Img6.jpg';
import tour1Img7 from '../assets/images/international/gallery/tour1Img7.jpg';
import tour1Img8 from '../assets/images/international/gallery/tour1Img8.jpg';
import tour1Img9 from '../assets/images/international/gallery/tour1Img9.jpg';
import tour2Img1 from '../assets/images/international/gallery/tour2Img1.jpg';
import tour2Img2 from '../assets/images/international/gallery/tour2Img2.jpg';
import tour2Img3 from '../assets/images/international/gallery/tour2Img3.jpg';
import tour2Img4 from '../assets/images/international/gallery/tour2Img4.jpg';
import tour2Img5 from '../assets/images/international/gallery/tour2Img5.jpg';
import tour2Img6 from '../assets/images/international/gallery/tour2Img6.jpg';
import tour2Img7 from '../assets/images/international/gallery/tour2Img7.jpg';
import tour2Img8 from '../assets/images/international/gallery/tour2Img8.jpg';
import tour2Img9 from '../assets/images/international/gallery/tour2Img9.jpg';
import tour2Img10 from '../assets/images/international/gallery/tour2Img10.jpg';
import tour2Img11 from '../assets/images/international/gallery/tour2Img11.jpg';
import tour3Img1 from '../assets/images/international/gallery/tour3Img1.jpg';


export const images = [
    { id: '1', src: image1, alt: 'Gallery Image' },
    { id: '2', src: image2, alt: 'Gallery Image' },
    { id: '3', src: image3, alt: 'Gallery Image' },
    { id: '4', src: image4, alt: 'Gallery Image' },
    { id: '5', src: image5, alt: 'Gallery Image' },
    { id: '6', src: image6, alt: 'Gallery Image' },
    { id: '7', src: image7, alt: 'Gallery Image' },
    { id: '8', src: image8, alt: 'Gallery Image' },
    { id: '9', src: image9, alt: 'Gallery Image' },
    { id: '10', src: image10, alt: 'Gallery Image' },
    { id: '11', src: image11, alt: 'Gallery Image' },
    { id: '12', src: image12, alt: 'Gallery Image' },
    { id: '13', src: image13, alt: 'Gallery Image' },
    { id: '14', src: image14, alt: 'Gallery Image' },
    { id: '15', src: image15, alt: 'Gallery Image' },
    { id: '16', src: image16, alt: 'Gallery Image' },
    { id: '17', src: image17, alt: 'Gallery Image' },
    { id: '18', src: image18, alt: 'Gallery Image' },
    { id: '19', src: image19, alt: 'Gallery Image' },
    { id: '20', src: image20, alt: 'Gallery Image' },
    { id: '21', src: image21, alt: 'Gallery Image' },
    { id: '22', src: image22, alt: 'Gallery Image' },
    { id: '23', src: image23, alt: 'Gallery Image' },
    { id: '24', src: image24, alt: 'Gallery Image' },
    { id: '25', src: image25, alt: 'Gallery Image' },
    { id: '26', src: image26, alt: 'Gallery Image' },
    { id: '27', src: image27, alt: 'Gallery Image' },
    { id: '28', src: image28, alt: 'Gallery Image' },
    { id: '29', src: image29, alt: 'Gallery Image' },
    { id: '30', src: image30, alt: 'Gallery Image' },
    { id: '31', src: image31, alt: 'Gallery Image' },
    { id: '32', src: image32, alt: 'Gallery Image' },
    { id: '33', src: image33, alt: 'Gallery Image' },
    { id: '34', src: image34, alt: 'Gallery Image' },
    { id: '35', src: image35, alt: 'Gallery Image' },
    { id: '36', src: image36, alt: 'Gallery Image' },
    { id: '37', src: image37, alt: 'Gallery Image' },
    { id: '38', src: image38, alt: 'Gallery Image' },
    { id: '39', src: image39, alt: 'Gallery Image' },
    { id: '40', src: image40, alt: 'Gallery Image' },
    { id: '41', src: image41, alt: 'Gallery Image' },
    { id: '42', src: image42, alt: 'Gallery Image' },
    { id: '43', src: image43, alt: 'Gallery Image' },
    { id: '44', src: image44, alt: 'Gallery Image' },
    { id: '45', src: image45, alt: 'Gallery Image' },
    { id: '46', src: image46, alt: 'Gallery Image' },
    { id: '47', src: image47, alt: 'Gallery Image' },
    { id: '48', src: image48, alt: 'Gallery Image' },
    { id: '49', src: image49, alt: 'Gallery Image' },
    { id: '50', src: image50, alt: 'Gallery Image' },
    { id: '51', src: image51, alt: 'Gallery Image' },
    { id: '52', src: image52, alt: 'Gallery Image' },
    { id: '53', src: image53, alt: 'Gallery Image' },
    { id: '54', src: image54, alt: 'Gallery Image' },
    { id: '55', src: image55, alt: 'Gallery Image' },
    { id: '56', src: image56, alt: 'Gallery Image' },
    { id: '57', src: image57, alt: 'Gallery Image' },
    { id: '58', src: image58, alt: 'Gallery Image' },
    { id: '59', src: image59, alt: 'Gallery Image' },
    { id: '60', src: image60, alt: 'Gallery Image' },
    { id: '61', src: image61, alt: 'Gallery Image' },
    { id: '62', src: image62, alt: 'Gallery Image' },
    { id: '63', src: image63, alt: 'Gallery Image' },
    { id: 't1-1', src: tour1Img1, alt: 'Gallery Image' },
    { id: 't1-2', src: tour1Img2, alt: 'Gallery Image' },
    { id: 't1-3', src: tour1Img3, alt: 'Gallery Image' },
    { id: 't1-4', src: tour1Img4, alt: 'Gallery Image' },
    { id: 't1-5', src: tour1Img5, alt: 'Gallery Image' },
    { id: 't1-6', src: tour1Img6, alt: 'Gallery Image' },
    { id: 't1-7', src: tour1Img7, alt: 'Gallery Image' },
    { id: 't1-8', src: tour1Img8, alt: 'Gallery Image' },
    { id: 't1-9', src: tour1Img9, alt: 'Gallery Image' },
    { id: 't2-1', src: tour2Img1, alt: 'Gallery Image' },
    { id: 't2-2', src: tour2Img2, alt: 'Gallery Image' },
    { id: 't2-3', src: tour2Img3, alt: 'Gallery Image' },
    { id: 't2-4', src: tour2Img4, alt: 'Gallery Image' },
    { id: 't2-5', src: tour2Img5, alt: 'Gallery Image' },
    { id: 't2-6', src: tour2Img6, alt: 'Gallery Image' },
    { id: 't2-7', src: tour2Img7, alt: 'Gallery Image' },
    { id: 't2-8', src: tour2Img8, alt: 'Gallery Image' },
    { id: 't2-9', src: tour2Img9, alt: 'Gallery Image' },
    { id: 't2-10', src: tour2Img10, alt: 'Gallery Image' },
    { id: 't2-11', src: tour2Img11, alt: 'Gallery Image' },
    { id: 't3-1', src: tour3Img1, alt: 'Gallery Image' }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <Helmet>
                <title>Gallery - Holiday Destiny</title>
                <meta name="description" content="Explore our stunning travel gallery showcasing beautiful destinations around the world." />
            </Helmet>

            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center text-white min-h-[55vh] flex items-center"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container-custom text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        Travel <span className="gradient-text bg-clip-text text-transparent">Gallery</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Explore stunning destinations through our curated collection of travel photos
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105 cursor-pointer" // Added cursor-pointer
                                onClick={() => handleImageClick(image)} // Add onClick handler
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                                        <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                                            {image.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={handleCloseModal} // Close modal when clicking outside the image
                >
                    <div 
                        className="relative max-w-full max-h-full"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the image container
                    >
                        <button 
                            className="absolute top-4 right-4 text-white text-3xl font-bold p-2"
                            onClick={handleCloseModal}
                        >
                            &times; {/* This is the 'x' close button */}
                        </button>
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.title} 
                            className="max-w-full max-h-[90vh] object-contain rounded-lg" // Adjust size and style
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black bg-opacity-50 rounded-b-lg">
                            <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                            <p className="text-sm uppercase tracking-wider">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;

// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import banner from "../assets/images/hero-banner.jpg";

// // Import all images from the provided file structure
// import image1 from '../assets/images/international/gallery/1.jpg';
// import image2 from '../assets/images/international/gallery/2.jpg';
// import image3 from '../assets/images/international/gallery/3.jpg';
// import image4 from '../assets/images/international/gallery/4.jpg';
// import image5 from '../assets/images/international/gallery/5.jpg';
// import image6 from '../assets/images/international/gallery/6.jpg';
// import image7 from '../assets/images/international/gallery/7.jpg';
// import image8 from '../assets/images/international/gallery/8.jpg';
// import image9 from '../assets/images/international/gallery/9.jpg';
// import image10 from '../assets/images/international/gallery/10.jpg';
// import image11 from '../assets/images/international/gallery/11.jpg';
// import image12 from '../assets/images/international/gallery/12.jpg';
// import image13 from '../assets/images/international/gallery/13.jpg';
// import image14 from '../assets/images/international/gallery/14.jpg';
// import image15 from '../assets/images/international/gallery/15.jpg';
// import image16 from '../assets/images/international/gallery/16.jpg';
// import image17 from '../assets/images/international/gallery/17.jpg';
// import image18 from '../assets/images/international/gallery/18.jpg';
// import image19 from '../assets/images/international/gallery/19.jpg';
// import image20 from '../assets/images/international/gallery/20.jpg';
// import image21 from '../assets/images/international/gallery/21.jpg';
// import image22 from '../assets/images/international/gallery/22.jpg';
// import image23 from '../assets/images/international/gallery/23.jpg';
// import image24 from '../assets/images/international/gallery/24.jpg';
// import image25 from '../assets/images/international/gallery/25.jpg';
// import image26 from '../assets/images/international/gallery/26.jpg';
// import image27 from '../assets/images/international/gallery/27.jpg';
// import image28 from '../assets/images/international/gallery/28.jpg';
// import image29 from '../assets/images/international/gallery/29.jpg';
// import image30 from '../assets/images/international/gallery/30.jpg';
// import image31 from '../assets/images/international/gallery/31.jpg';
// import image32 from '../assets/images/international/gallery/32.jpg';
// import image33 from '../assets/images/international/gallery/33.jpg';
// import image34 from '../assets/images/international/gallery/34.jpg';
// import image35 from '../assets/images/international/gallery/35.jpg';
// import image36 from '../assets/images/international/gallery/36.jpg';
// import image37 from '../assets/images/international/gallery/37.jpg';
// import image38 from '../assets/images/international/gallery/38.jpg';
// import image39 from '../assets/images/international/gallery/39.jpg';
// import image40 from '../assets/images/international/gallery/40.jpg';
// import image41 from '../assets/images/international/gallery/41.jpg';
// import image42 from '../assets/images/international/gallery/42.jpg';
// import image43 from '../assets/images/international/gallery/43.jpg';
// import image44 from '../assets/images/international/gallery/44.jpg';
// import image45 from '../assets/images/international/gallery/45.jpg';
// import image46 from '../assets/images/international/gallery/46.jpg';
// import image47 from '../assets/images/international/gallery/47.jpg';
// import image48 from '../assets/images/international/gallery/48.jpg';
// import image49 from '../assets/images/international/gallery/49.jpg';
// import image50 from '../assets/images/international/gallery/50.jpg';
// import image51 from '../assets/images/international/gallery/51.jpg';
// import image52 from '../assets/images/international/gallery/52.jpg';
// import image53 from '../assets/images/international/gallery/53.jpg';
// import image54 from '../assets/images/international/gallery/54.jpg';
// import image55 from '../assets/images/international/gallery/55.jpg';
// import image56 from '../assets/images/international/gallery/56.jpg';
// import image57 from '../assets/images/international/gallery/57.jpg';
// import image58 from '../assets/images/international/gallery/58.jpg';
// import image59 from '../assets/images/international/gallery/59.jpg';
// import image60 from '../assets/images/international/gallery/60.jpg';
// import image61 from '../assets/images/international/gallery/61.jpg';
// import image62 from '../assets/images/international/gallery/62.jpg';
// import image63 from '../assets/images/international/gallery/63.jpg';

// import tour1Img1 from '../assets/images/international/gallery/tour1Img1.jpg';
// import tour1Img2 from '../assets/images/international/gallery/tour1Img2.jpg';
// import tour1Img3 from '../assets/images/international/gallery/tour1Img3.jpg';
// import tour1Img4 from '../assets/images/international/gallery/tour1Img4.jpg';
// import tour1Img5 from '../assets/images/international/gallery/tour1Img5.jpg';
// import tour1Img6 from '../assets/images/international/gallery/tour1Img6.jpg';
// import tour1Img7 from '../assets/images/international/gallery/tour1Img7.jpg';
// import tour1Img8 from '../assets/images/international/gallery/tour1Img8.jpg';
// import tour1Img9 from '../assets/images/international/gallery/tour1Img9.jpg';
// import tour2Img1 from '../assets/images/international/gallery/tour2Img1.jpg';
// import tour2Img2 from '../assets/images/international/gallery/tour2Img2.jpg';
// import tour2Img3 from '../assets/images/international/gallery/tour2Img3.jpg';
// import tour2Img4 from '../assets/images/international/gallery/tour2Img4.jpg';
// import tour2Img5 from '../assets/images/international/gallery/tour2Img5.jpg';
// import tour2Img6 from '../assets/images/international/gallery/tour2Img6.jpg';
// import tour2Img7 from '../assets/images/international/gallery/tour2Img7.jpg';
// import tour2Img8 from '../assets/images/international/gallery/tour2Img8.jpg';
// import tour2Img9 from '../assets/images/international/gallery/tour2Img9.jpg';
// import tour2Img10 from '../assets/images/international/gallery/tour2Img10.jpg';
// import tour2Img11 from '../assets/images/international/gallery/tour2Img11.jpg';
// import tour3Img1 from '../assets/images/international/gallery/tour3Img1.jpg';

// export const images = [
//     { id: '1', src: image1, alt: 'Gallery Image' },
//     { id: '2', src: image2, alt: 'Gallery Image' },
//     { id: '3', src: image3, alt: 'Gallery Image' },
//     { id: '4', src: image4, alt: 'Gallery Image' },
//     { id: '5', src: image5, alt: 'Gallery Image' },
//     { id: '6', src: image6, alt: 'Gallery Image' },
//     { id: '7', src: image7, alt: 'Gallery Image' },
//     { id: '8', src: image8, alt: 'Gallery Image' },
//     { id: '9', src: image9, alt: 'Gallery Image' },
//     { id: '10', src: image10, alt: 'Gallery Image' },
//     { id: '11', src: image11, alt: 'Gallery Image' },
//     { id: '12', src: image12, alt: 'Gallery Image' },
//     { id: '13', src: image13, alt: 'Gallery Image' },
//     { id: '14', src: image14, alt: 'Gallery Image' },
//     { id: '15', src: image15, alt: 'Gallery Image' },
//     { id: '16', src: image16, alt: 'Gallery Image' },
//     { id: '17', src: image17, alt: 'Gallery Image' },
//     { id: '18', src: image18, alt: 'Gallery Image' },
//     { id: '19', src: image19, alt: 'Gallery Image' },
//     { id: '20', src: image20, alt: 'Gallery Image' },
//     { id: '21', src: image21, alt: 'Gallery Image' },
//     { id: '22', src: image22, alt: 'Gallery Image' },
//     { id: '23', src: image23, alt: 'Gallery Image' },
//     { id: '24', src: image24, alt: 'Gallery Image' },
//     { id: '25', src: image25, alt: 'Gallery Image' },
//     { id: '26', src: image26, alt: 'Gallery Image' },
//     { id: '27', src: image27, alt: 'Gallery Image' },
//     { id: '28', src: image28, alt: 'Gallery Image' },
//     { id: '29', src: image29, alt: 'Gallery Image' },
//     { id: '30', src: image30, alt: 'Gallery Image' },
//     { id: '31', src: image31, alt: 'Gallery Image' },
//     { id: '32', src: image32, alt: 'Gallery Image' },
//     { id: '33', src: image33, alt: 'Gallery Image' },
//     { id: '34', src: image34, alt: 'Gallery Image' },
//     { id: '35', src: image35, alt: 'Gallery Image' },
//     { id: '36', src: image36, alt: 'Gallery Image' },
//     { id: '37', src: image37, alt: 'Gallery Image' },
//     { id: '38', src: image38, alt: 'Gallery Image' },
//     { id: '39', src: image39, alt: 'Gallery Image' },
//     { id: '40', src: image40, alt: 'Gallery Image' },
//     { id: '41', src: image41, alt: 'Gallery Image' },
//     { id: '42', src: image42, alt: 'Gallery Image' },
//     { id: '43', src: image43, alt: 'Gallery Image' },
//     { id: '44', src: image44, alt: 'Gallery Image' },
//     { id: '45', src: image45, alt: 'Gallery Image' },
//     { id: '46', src: image46, alt: 'Gallery Image' },
//     { id: '47', src: image47, alt: 'Gallery Image' },
//     { id: '48', src: image48, alt: 'Gallery Image' },
//     { id: '49', src: image49, alt: 'Gallery Image' },
//     { id: '50', src: image50, alt: 'Gallery Image' },
//     { id: '51', src: image51, alt: 'Gallery Image' },
//     { id: '52', src: image52, alt: 'Gallery Image' },
//     { id: '53', src: image53, alt: 'Gallery Image' },
//     { id: '54', src: image54, alt: 'Gallery Image' },
//     { id: '55', src: image55, alt: 'Gallery Image' },
//     { id: '56', src: image56, alt: 'Gallery Image' },
//     { id: '57', src: image57, alt: 'Gallery Image' },
//     { id: '58', src: image58, alt: 'Gallery Image' },
//     { id: '59', src: image59, alt: 'Gallery Image' },
//     { id: '60', src: image60, alt: 'Gallery Image' },
//     { id: '61', src: image61, alt: 'Gallery Image' },
//     { id: '62', src: image62, alt: 'Gallery Image' },
//     { id: '63', src: image63, alt: 'Gallery Image' },
//     { id: 't1-1', src: tour1Img1, alt: 'Gallery Image' },
//     { id: 't1-2', src: tour1Img2, alt: 'Gallery Image' },
//     { id: 't1-3', src: tour1Img3, alt: 'Gallery Image' },
//     { id: 't1-4', src: tour1Img4, alt: 'Gallery Image' },
//     { id: 't1-5', src: tour1Img5, alt: 'Gallery Image' },
//     { id: 't1-6', src: tour1Img6, alt: 'Gallery Image' },
//     { id: 't1-7', src: tour1Img7, alt: 'Gallery Image' },
//     { id: 't1-8', src: tour1Img8, alt: 'Gallery Image' },
//     { id: 't1-9', src: tour1Img9, alt: 'Gallery Image' },
//     { id: 't2-1', src: tour2Img1, alt: 'Gallery Image' },
//     { id: 't2-2', src: tour2Img2, alt: 'Gallery Image' },
//     { id: 't2-3', src: tour2Img3, alt: 'Gallery Image' },
//     { id: 't2-4', src: tour2Img4, alt: 'Gallery Image' },
//     { id: 't2-5', src: tour2Img5, alt: 'Gallery Image' },
//     { id: 't2-6', src: tour2Img6, alt: 'Gallery Image' },
//     { id: 't2-7', src: tour2Img7, alt: 'Gallery Image' },
//     { id: 't2-8', src: tour2Img8, alt: 'Gallery Image' },
//     { id: 't2-9', src: tour2Img9, alt: 'Gallery Image' },
//     { id: 't2-10', src: tour2Img10, alt: 'Gallery Image' },
//     { id: 't2-11', src: tour2Img11, alt: 'Gallery Image' },
//     { id: 't3-1', src: tour3Img1, alt: 'Gallery Image' }
// ];

//  const Gallery = () => {
    

//     return (
//         <>
//             <Helmet>
//                 <title>Gallery - Holiday Destiny</title>
//                 <meta name="description" content="Explore our stunning travel gallery showcasing beautiful destinations around the world." />
//             </Helmet>

//             {/* Hero Section */}
//             <section
//                 className="relative bg-cover bg-center text-white min-h-[55vh] flex items-center"
//                 style={{
//                     backgroundImage: `url(${banner})`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//                 <div className="container-custom text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
//                         Travel <span className="gradient-text bg-clip-text text-transparent">Gallery</span>
//                     </h1>
//                     <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                         Explore stunning destinations through our curated collection of travel photos
//                     </p>
//                 </div>
//             </section>

//             {/* Gallery Grid */}
//             <section className="section-padding bg-gray-50">
//                 <div className="container-custom">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                         {images.map((image) => (
//                             <div
//                                 key={image.id}
//                                 className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105"
//                             >
//                                 <img
//                                     src={image.src}
//                                     alt={image.alt}
//                                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                                     loading="lazy"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                                         {/* You can add a title or category here if you want it to appear on hover */}
//                                         <h3 className="text-lg font-bold mb-1">{image.title}</h3>
//                                         <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
//                                             {image.category}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Gallery;