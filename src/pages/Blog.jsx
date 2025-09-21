// src/App.jsx
import {  FaTwitter, FaInstagram, FaArrowRight, FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

 
const Blog= () => {
  
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll effect
    });
  };
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="font-sans mt-10 px-3 text-gray-900">
   
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Fruit&Veggie Logo"
            className="h-10 w-auto"
          />
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
          <li>
            <Link
              to="/services"
              className="hover:text-[#BDDA02] transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#BDDA02] transition"
            >
              About Us
            </Link>
          </li>
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
              to="/blog"
              className="hover:text-[#BDDA02] transition"
            >
              Blog
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
        <Link
          to="/contact"
          className="px-6 py-2 text-xs md:text-sm shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
          rounded-lg font-semibold flex items-center gap-2 bg-[#BDDA02] text-black hidden md:flex"
        >
          Contact Us
        </Link>

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
              <Link to="/services" onClick={closeMenu} className="hover:text-[#BDDA02]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className="hover:text-[#BDDA02]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/impact" onClick={closeMenu} className="hover:text-[#BDDA02]">
                Impact
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu} className="hover:text-[#BDDA02]">
                Blog
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
 
      {/* Hero */}
      <section
        id="home"
        className="relative md:min-h-[80vh] min-h-[60vh] flex mx-auto mt-20 max-w-4xl   text-white"
      >
        <img
          src="/blog.jpg"
          alt="Agriculture"
          className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-2xl" />
       <div className="relative mt-40 md:mt-0  text-left mt-20 md:mt-40 z-20 max-w-2xl px-4">
  <h1 className="text-2xl md:text-4xl font-bold">
    Agriculture is more than planting and harvesting
  </h1>
  <p className="mt-4 text-xs md:text-sm">
    Women make up a significant share of the agricultural workforce, especially in 
    smallholder farming communities. Despite their contributions, many women farmers 
    still face challenges such as limited access to land, credit, training, and 
    modern farming tools. These barriers reduce productivity and keep women from 
    benefiting fully from the value they create.
  </p>

  {/* Learn More Button */}
 <a
  href="https://www.linkedin.com/posts/fruitieveggie-farmacy_fruitieveggie-sustainableagriculture-fruitfarm-activity-7363550398697070597-NtD7?utm_source=share&utm_medium=member_android&rcm=ACoAAEJvylMBgC9aj1hM7Xq5UTK1bMxo7sSlyWQ"  
  target="_blank"             
  rel="noopener noreferrer" >  
  <button className="md:px-6 px-3 py-2 mt-3 rounded-lg text-xs md:text-sm font-semibold flex items-center justify-center gap-2 
    border border-[#BDDA02] text-[#BDDA02] 
    shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
    transition duration-300 ease-in-out active:scale-95"
>
  Learn More ➔</button>
</a>

</div>

      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 max-w-5xl mx-auto bg-white">
        <h2 className="text-center text-2xl font-bold mb-10">
News & Stories        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Blog 1 */}
          <div>
            <img
              src="/blog1.png"
              alt="Post Harvest"
              className="rounded-xl w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Insights on post-harvest loss reduction.
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Reducing post-harvest losses is at the heart of building food
              security, by providing cold storage, efficient logistics, and
              smart distribution systems.
            </p>
           <a
    href="https://www.linkedin.com/posts/fruitieveggie-farmacy_fruitieveggie-sustainableagriculture-fruitfarm-activity-7363550398697070597-NtD7?utm_source=share&utm_medium=member_android&rcm=ACoAAEJvylMBgC9aj1hM7Xq5UTK1bMxo7sSlyWQ"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block text-green-600 font-medium"
  >
    Learn more →
  </a>
          </div>

          {/* Blog 2 */}
          <div>
            <img
              src="/blog2.png"
              alt="Farmer Training"
              className="rounded-xl w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Farmer Training Highlights.
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Empowering farmers through training ensures lasting impact. Our
              programs focus on climate-smart agriculture, modern techniques,
              and business skills.
            </p>
         <a
    href="https://www.linkedin.com/posts/fruitieveggie-farmacy_fruitieveggie-sustainableagriculture-fruitfarm-activity-7363550398697070597-NtD7?utm_source=share&utm_medium=member_android&rcm=ACoAAEJvylMBgC9aj1hM7Xq5UTK1bMxo7sSlyWQ"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block text-green-600 font-medium"
  >
    Learn more →
  </a>
          </div>

          {/* Blog 3 */}
          <div>
            <img
              src="/blog3.jpg"
              alt="Partnerships"
              className="rounded-xl w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Partnership Announcements.
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Collaboration drives change. We expand opportunities for farmers,
              open access to markets, and strengthen agricultural value chains.
            </p>
            <a
    href="https://www.linkedin.com/posts/fruitieveggie-farmacy_fruitieveggie-sustainableagriculture-fruitfarm-activity-7362427703175569408-Lt1P?utm_source=share&utm_medium=member_android&rcm=ACoAAEJvylMBgC9aj1hM7Xq5UTK1bMxo7sSlyWQ"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block text-green-600 font-medium"
  >
    Learn more →
  </a>
          </div>

          {/* Blog 4 */}
          <div>
            <img
              src="/blog4.jpg"
              alt="Sustainability"
              className="rounded-xl w-full h-56 object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Innovations in Agribusiness and Sustainability.
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              From renewable energy solutions to digital tools, innovation powers
              everything we do, ensuring resilient and future-ready food systems.
            </p>
            <a
    href="https://www.linkedin.com/posts/fruitieveggie-farmacy_fruitieveggie-sustainableagriculture-fruitfarm-activity-7362427703175569408-Lt1P?utm_source=share&utm_medium=member_android&rcm=ACoAAEJvylMBgC9aj1hM7Xq5UTK1bMxo7sSlyWQ"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block text-green-600 font-medium"
  >
    Learn more →
  </a>
          </div>
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
             <p className="text-gray-200">+234 704 757 8249</p>
           </div>
     
           {/* Email */}
           <div className="flex items-center space-x-3">
             <div className="p-2 bg-white/10 rounded-md">
               <FaEnvelope className="text-lime-400 text-lg" />
             </div>
             <p className="text-gray-200">smith@fruitnveggis.com</p>
           </div>
     
           {/* Location */}
           <div className="flex items-center space-x-3">
             <div className="p-2 bg-white/10 rounded-md">
               <FaMapMarkerAlt className="text-lime-400 text-lg" />
             </div>
             <p className="text-gray-200">
               Adejo Village, Awooro, Devotion, Ogun State, Nigeria.
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
            href="mailto:smith@fruitnveggis.com"
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

export default Blog;