// src/App.jsx
import {  FaTwitter, FaInstagram,  FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Value= () => {
  
 
  
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
const media = [ 
   
   "/value1.jpg",
  "/value2.jpg",
  "/value3.jpg",
  "/value4.jpg",
  "/value5.jpg",
  "/value6.jpg",
  "/valuevid.mp4",
  
];
  

  return (
    <div className="min-h-screen w-full  mt-10 text-gray-900">
   
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
                     <Link to="/contact" onClick={closeMenu} className="hover:text-[#BDDA02]">
                       Contact Us
                     </Link>
                   </li>
                 </ul>
               </div>
             )}
           </nav>
       {/* HERO */}
           <div className="relative w-full h-auto md:mt-20  mt-10 min-h-[60vh] md:min-h-[80vh]">
             <img
               src="/value4.jpg"
               alt="Hero"
               className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
             />
             <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-10 rounded-md">
               <h1 className="text-white mb-4 mt-20 text-xl md:text-6xl font-bold w-full md:max-w-5xl">
                 Building a Sustainable Future, From Farm to Market.
               </h1>
                <a
       href="mailto:smith@fruitnveggis.com"> <button className="md:px-6 px-3  py-3 text-xs md:text-sm  rounded-lg font-semibold flex items-center justify-center gap-2 
       bg-[#BDDA02] text-black 
       shadow-[0_4px_15px_rgba(189,218,2,0.6)] 
       hover:shadow-[0_6px_20px_rgba(189,218,2,0.8)] 
       transition duration-300 ease-in-out active:scale-95">
                 Partner with us <FaArrowRight />
               </button></a>
             </div>
           </div>
     
           {/* SERVICES */}
         
     
     
       




    <div className="max-w-6xl mx-auto px-4 py-12 gap-10 items-center">
      {/* Text Section */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[#264733]">
Value Addition
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
We process raw produce into consumer-ready products, creating new revenue streams and reducing waste.

        </p>
      </div>

     <div className="grid grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-4">
  {media.map((item, i) => {
    const isVideo = item.endsWith(".mp4");
    return isVideo ? (
      <video
        key={i}
        src={item}
        controls
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    ) : (
      <img
        key={i}
        src={item}
        alt={`Farm ${i + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    );
  })}
</div>
    </div>
    
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

export default Value;