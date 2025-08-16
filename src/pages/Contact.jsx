// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet-async';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//     travelType: '',
//     budget: '',
//     travelDate: '',
//     numberOfTravelers: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const travelTypes = [
//     'Beach Vacation',
//     'Mountain Adventure',
//     'City Break',
//     'Cultural Tour',
//     'Luxury Escape',
//     'Adventure Sports',
//     'Honeymoon',
//     'Family Trip',
//     'Business Travel',
//     'Other'
//   ];

//   const budgetRanges = [
//     'Under $1,000',
//     '$1,000 - $2,500',
//     '$2,500 - $5,000',
//     '$5,000 - $10,000',
//     'Over $10,000'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       console.log('Form submitted:', formData);
      
//       setSubmitStatus('success');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//         travelType: '',
//         budget: '',
//         travelDate: '',
//         numberOfTravelers: ''
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Contact Us - Holiday Destiny</title>
//         <meta name="description" content="Get in touch with us for personalized travel planning and support." />
//       </Helmet>

//       {/* Hero Section */}
//       <section 
//       className="bg-cover bg-center text-white min-h-[45vh] flex items-center"
//       // style={{ backgroundImage: `url(${yourBackgroundImage})` }} // 2. Use the imported image in an inline style object
//       style={{ backgroundImage: `url(${'https://codewithsadee.github.io/tourly/assets/images/hero-banner.jpg'})` }}
//     >
//       <div className="container-custom text-center">
//         <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
//           Get in <span className="gradient-text">Touch</span>
//         </h1>
//         <p className="text-xl text-white/90 max-w-2xl mx-auto">
//           Ready to start your next adventure? Let us help you plan the perfect trip!
//         </p>
//       </div>
//     </section>

//       {/* Contact Form Section */}
//       <section className="section-padding bg-white">
//         <div className="container-custom max-w-4xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
//                       First Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Enter your first name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
//                       Last Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Enter your last name"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Enter your email address"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Enter your phone number"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="travelType" className="block text-sm font-medium text-gray-700 mb-2">
//                       Type of Travel
//                     </label>
//                     <select
//                       id="travelType"
//                       name="travelType"
//                       value={formData.travelType}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     >
//                       <option value="">Select travel type</option>
//                       {travelTypes.map(type => (
//                         <option key={type} value={type}>{type}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
//                       Budget Range
//                     </label>
//                     <select
//                       id="budget"
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     >
//                       <option value="">Select budget range</option>
//                       {budgetRanges.map(budget => (
//                         <option key={budget} value={budget}>{budget}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
//                       Preferred Travel Date
//                     </label>
//                     <input
//                       type="date"
//                       id="travelDate"
//                       name="travelDate"
//                       value={formData.travelDate}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-gray-700 mb-2">
//                       Number of Travelers
//                     </label>
//                     <input
//                       type="number"
//                       id="numberOfTravelers"
//                       name="numberOfTravelers"
//                       value={formData.numberOfTravelers}
//                       onChange={handleChange}
//                       min="1"
//                       max="20"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Number of people"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="What's your inquiry about?"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="6"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
//                     placeholder="Tell us more about your travel plans, preferences, or any questions you have..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     'Send Message'
//                   )}
//                 </button>

//                 {submitStatus && (
//                   <div className={`p-4 rounded-lg ${
//                     submitStatus === 'success' 
//                       ? 'bg-green-50 border border-green-200 text-green-800' 
//                       : 'bg-red-50 border border-red-200 text-red-800'
//                   }`}>
//                     {submitStatus === 'success' ? (
//                       <div className="flex items-center gap-3">
//                         <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                         <div>
//                           <h4 className="font-semibold">Message Sent Successfully!</h4>
//                           <p className="text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-3">
//                         <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                         </svg>
//                         <div>
//                           <h4 className="font-semibold">Something went wrong</h4>
//                           <p className="text-sm">Please try again or contact us directly at enquiry@holidaydestiny.co.in</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
//                   <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <span className="text-2xl">📧</span>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
//                     <p className="text-gray-600">enquiry@holidaydestiny.co.in</p>
//                     <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
//                   <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <span className="text-2xl">📞</span>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                     <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
//                   <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <span className="text-2xl">📍</span>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
//                     <p className="text-gray-600">123 Travel Street, Adventure City, AC 12345</p>
//                     <p className="text-sm text-gray-500">Visit us during business hours</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="mt-8 p-6 bg-gradient-to-r from-red-300 to-amber-100 rounded-lg text-gray-800">
//                 <h3 className="text-xl font-bold mb-4">Business Hours</h3>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday</span>
//                     <span>9:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday</span>
//                     <span>10:00 AM - 4:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span>Closed</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelType: '',
    travelDate: '',
    numberOfTravelers: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const travelTypes = [
    'Beach Vacation',
    'Mountain Adventure',
    'City Break',
    'Cultural Tour',
    'Luxury Escape',
    'Adventure Sports',
    'Honeymoon',
    'Family Trip',
    'Business Travel',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        travelType: '',
        travelDate: '',
        numberOfTravelers: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Holiday Destiny</title>
        <meta
          name="description"
          content="Get in touch with us for personalized travel planning and support."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white min-h-[45vh] flex items-center"
        style={{
          backgroundImage: `url('https://codewithsadee.github.io/tourly/assets/images/hero-banner.jpg')`
        }}
      >
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Get in{' '}
            <span className="gradient-text">
              Touch
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to start your next adventure? Let us help you plan the perfect trip!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="travelType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Travel
                    </label>
                    <select
                      id="travelType"
                      name="travelType"
                      value={formData.travelType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    >
                      <option value="">Select travel type</option>
                      {travelTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Travel Date
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    id="numberOfTravelers"
                    name="numberOfTravelers"
                    value={formData.numberOfTravelers}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Number of people"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="What's your inquiry about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us more about your travel plans, preferences, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <h4 className="font-semibold">Message Sent Successfully!</h4>
                          <p className="text-sm">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <h4 className="font-semibold">Something went wrong</h4>
                          <p className="text-sm">
                            Please try again or contact us directly at enquiry@holidaydestiny.co.in
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">enquiry@holidaydestiny.co.in</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Available during working hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">123 Travel Street, Adventure City, India</p>
                    <p className="text-sm text-gray-500">Visit us during office hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
