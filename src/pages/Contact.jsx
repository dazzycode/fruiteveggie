// src/App.jsx
import {  FaTwitter, FaInstagram, FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

 
const Contact= () => {
 const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    const body = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    window.location.href = `mailto:info@fruitieveggie.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll effect
    });
  };
   const [isOpen, setIsOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(null);
   
     const toggleDropdown = (menu) => {
       setOpenDropdown(openDropdown === menu ? null : menu);
     };
     const toggleMenu = () => setIsOpen(!isOpen);
     const closeMenu = () => setIsOpen(false);

  return (
    <div className=" px-2 mt-10 min-h-screen w-full  text-gray-900">
   
  <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
             <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
               {/* Logo */}
              <div className="flex items-center gap-1">
         <img
           src="/logor.png"
           alt="Fruit&Veggie Logo"
           className="h-16 w-20"
         />
         <div className="flex flex-col leading-tight">
           <h2 className="font-semibold text-sm md:text-lg">Fruitieveggie</h2>
         <p className="md:text-sm text-xs text-gray-500">urban farm</p>
         </div>
       </div>
       
       
               {/* Desktop Menu */}
               <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                 <li>
                   <Link
                     to="/"
                     className="hover:text-[#BDDA02] transition"
                   >
                     Home
                   </Link>
                 </li>
             
             
             <div className="relative">
               <button
                 onClick={() => toggleDropdown("about")}
                 className="hover:underline flex items-center gap-1"
               >
                 About Us
                 <svg
                   className="w-3 h-3 mt-[2px]"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M19 9l-7 7-7-7"
                   />
                 </svg>
               </button>
               {openDropdown === "about" && (
                 <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                   {[
                      { name: "Vision and Mission", path: "/vission" },
                     { name: "Theory of Change", path: "/theory" },
                     { name: "Our story", path: "/story" },
                     { name: "Core Values", path: "/values" },
                                                           { name: "FAQ", path: "/faq" },
                   { name: "Leadership Team", path: "/leadership" },
                   ].map((col) => (
                     <Link
                       key={col.name}
                       to={col.path}
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                     >
                       {col.name}
                     </Link>
                   ))}
                 </div>
               )}
             </div>
       
             {/* Services with dropdown */}
             <div className="relative">
               <button
                 onClick={() => toggleDropdown("services")}
                 className="hover:underline flex items-center gap-1"
               >
                 Services
                 <svg
                   className="w-3 h-3 mt-[2px]"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M19 9l-7 7-7-7"
                   />
                 </svg>
               </button>
               {openDropdown === "services" && (
                 <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                   {[
                   { name: "Farming ", path: "/farming" },
                     { name: "Aggregation & Market Linkages", path: "/aggregation" },
                      { name: "Cold Storage & Logistics", path: "/storage" },
                     { name: "Value Addition ", path: "/value" },
                     { name: "Training & Capacity Building", path: "/training" },
                   ].map((srv) => (
                     <Link
                       key={srv.name}
                       to={srv.path}
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                     >
                       {srv.name}
                     </Link>
                   ))}
                 </div>
               )}
           </div>
                 <li>
                   <Link
                     to="/impact"
                     className="hover:text-[#BDDA02] transition"
                   >
                     Impact
                   </Link>
                 </li>
                 <li>
                   <Link
                     to="/resources"
                     className="hover:text-[#BDDA02] transition"
                   >
                     Resources
                   </Link>
                 </li>
                 <li>
                   <Link
                     to="/contact"
                     className="hover:text-[#BDDA02] transition"
                   >
                     Contact Us
                   </Link>
                 </li>
               </ul>
       
               {/* Desktop CTA */}
              <a
 href="mailto:info@fruitieveggie.com"  className="px-6 py-2 text-xs md:text-sm shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  rounded-lg font-semibold flex items-center gap-2 bg-[#BDDA02] text-black hidden md:flex"
>
  Contact Us
</a>

       
               {/* Mobile Menu Button */}
               <div className="md:hidden">
                 <button onClick={toggleMenu}>
                   {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                 </button>
               </div>
             </div>
       
             {/* Mobile Menu Dropdown */}
             {isOpen && (
               <div className="md:hidden bg-white shadow-lg">
                 <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
                   <li>
                     <Link to="/" onClick={closeMenu} className="hover:text-[#BDDA02]">
                       Home
                     </Link>
                   </li>
                   <li>
                     <div className="relative">
               <button
                 onClick={() => toggleDropdown("about")}
                 className="hover:underline flex items-center gap-1"
               >
                 About Us
                 <svg
                   className="w-3 h-3 mt-[2px]"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M19 9l-7 7-7-7"
                   />
                 </svg>
               </button>
               {openDropdown === "about" && (
                 <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                   {[
                     { name: "Vision and Mission", path: "/vission" },
                     { name: "Theory of Change", path: "/theory" },
                     { name: "Our story", path: "/story" },
                     { name: "Core Values", path: "/values" },
                                        { name: "FAQ", path: "/faq" },
   { name: "Leadership Team", path: "/leadership" },
                   ].map((col) => (
                     <Link
                       key={col.name}
                       to={col.path}
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                     >
                       {col.name}
                     </Link>
                   ))}
                 </div>
               )}
             </div>
       
             {/* Services with dropdown */}
             <div className=" mt-3 relative">
               <button
                 onClick={() => toggleDropdown("services")}
                 className="hover:underline flex items-center gap-1"
               >
                 Services
                 <svg
                   className="w-3 h-3 mt-[2px]"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M19 9l-7 7-7-7"
                   />
                 </svg>
               </button>
               {openDropdown === "services" && (
                 <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                   {[
                     { name: "Farming ", path: "/farming" },
                     { name: "Aggregation & Market Linkages", path: "/aggregation" },
                      { name: "Cold Storage & Logistics", path: "/storage" },
                     { name: "Value Addition ", path: "/value" },
                     { name: "Training & Capacity Building", path: "/training" },
    
                   ].map((srv) => (
                     <Link
                       key={srv.name}
                       to={srv.path}
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                     >
                       {srv.name}
                     </Link>
                   ))}
                 </div>
               )}
           </div>
                   </li>
                   <li>
                     <Link to="/impact" onClick={closeMenu} className="hover:text-[#BDDA02]">
                       Impact
                     </Link>
                   </li>
                   <li>
                     <Link to="/resources" onClick={closeMenu} className="hover:text-[#BDDA02]">
                    Resources
                     </Link>
                   </li>
                   <li>
                   <a
 href="mailto:info@fruitieveggie.com"  className="px-6 py-2 text-xs md:text-sm shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  rounded-lg font-semibold flex items-center gap-2 bg-[#BDDA02] text-black hidden md:flex"
>
  Contact Us
</a>

                   </li>
                 </ul>
               </div>
             )}
           </nav>
      {/* Hero Image */}
      <div className="relative min-h-[60vh] md:min-h-[80vh] flex mx-auto mt-20 w-full   text-white"
>
        <img
          src="/faq.png"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
        />
      </div>

    
  c

    <section
      id="contact"
      className="py-12 px-3 md:px-6 w-full md:max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow p-4 md:p-8">
        <h2 className="text-center text-lg mb-8">
          Simply fill in your details and submit the form below, and we’ll
          respond as quickly as possible.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell us how we can help"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
            required
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-md font-semibold"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  
  
      {/* FOOTER */}
      <footer className="bg-green-950 text-white   mt-2 relative z-10">
            <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
             {/* Logo & Contact */}
             <div>
               <div className="flex items-center space-x-2">
                 <img
                   src="/logor.png"
                   alt="Fruitnveggis Logo"
                   className="w-12 h-12 rounded"
                 />
                 <div>
                         <h3 className="font-semibold text-lg">Fruitieveggie</h3>
                   <p className="text-sm text-gray-400">Urban Farm</p>
                 </div>
               </div>
               <div className="mt-12 space-y-2 text-sm">
                               <h3 className="font-semibold mb-5 text-lg">Reach Out to Us</h3>
     
              
         <div className="space-y-4">
           {/* Phone */}
           <div className="flex items-center space-x-3">
             <div className="p-2 bg-white/10 rounded-md">
               <FaPhoneAlt className="text-lime-400 text-lg" />
             </div>
             <p className="text-gray-200">+2347051479418</p>
           </div>
     
           {/* Email */}
           <div className="flex items-center space-x-3">
             <div className="p-2 bg-white/10 rounded-md">
               <FaEnvelope className="text-lime-400 text-lg" />
             </div>
             <p className="text-gray-200">info@fruitieveggie.com</p>
           </div>
     
           {/* Location */}
           <div className="flex items-center space-x-3">
             <div className="p-2 bg-white/10 rounded-md">
               <FaMapMarkerAlt className="text-lime-400 text-lg" />
             </div>
             <p className="text-gray-200">
Alado Village, Awowo, Ewekoro, Ogun State, Nigeria
             </p>
           </div>
         </div>
       
     
               </div>
             </div>
     
             {/* Pages */}
             <div>
               <h4 className="font-semibold text-lg mb-4">Pages</h4>
               <ul className="space-y-4 text-sm">
                 <li className="hover:text-white">Contact </li>
                 <li className="hover:text-white">Services</li>
                 <li className="hover:text-white">About us</li>
                 <li className="hover:text-white">Impact</li>
                 <li className="hover:text-white">Contact us</li>
               </ul>
             </div>
     
             {/* Services */}
             <div>
               <h4 className="font-semibold text-lg mb-4">Services</h4>
               <ul className="space-y-4 text-sm">
                 <li className="hover:text-white">Farming & Cultivation</li>
                 <li className="hover:text-white">Aggregate & Market Linkages</li>
                 <li className="hover:text-white">Cold Storage & Logistics</li>
                 <li className="hover:text-white">Value Addition</li>
                 <li className="hover:text-white">Training & Capacity Building</li>
               </ul>
             </div>
     
             {/* Newsletter */}
             <div>
               <h4 className="font-semibold text-lg mb-4">
                 Subscribe to our newsletter
               </h4>
               <form className="flex">
              
         <div className="relative w-full max-w-md">
           <input
             type="email"
             placeholder="Add email address"
             className="w-full p-3 pr-12 bg-[#15281F] rounded-md focus:outline-none text-white"
           />
           {/* Send Icon Button inside input */}
            <a
            href="mailto:info@fruitieveggie.com"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B5EF14] hover:text-lime-600"
          >
            <FaPaperPlane size={22} />
          </a>
         </div>
       
               </form>
             </div>
           </div>
     
           {/* Bottom Bar */}
           <div className="border-t border-gray-600 mt-10 py-6">
             <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
               {/* Socials */}
               <div className="flex text-[#B5EF14] space-x-4">
                <a 
  href="https://www.facebook.com/Fruitieveggi" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaFacebookF />
</a>

<a 
  href="https://www.linkedin.com/company/fruitieveggie-farmacy/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaLinkedinIn />
</a>

<a 
  href="https://www.x.com/Fruitieveggie_" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaTwitter />
</a>

<a 
  href="https://instagram.com/fruitieveggie" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

               </div>
     
             
       
          <button
             onClick={scrollToTop}
             className="fixed bottom-6 right-6  bg-[#15281F] text-[#B5EF14] px-3 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition"
           >
             <FaArrowUp className="w-5 h-5" />
           </button>
      
     
     
               {/* Copyright */}
               <p className="text-xs text-gray-400">
                 © 2025 All rights reserved
               </p>
             </div>
           </div>
        
      
           </footer>
         </div>
  );
};

export default Contact;