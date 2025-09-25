// src/App.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight } from "react-icons/fa";
    import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

 
const ServicePage= () => {
  const services = [
 
  {
    title: "Aggregation & Market Linkages",
    description:
      "We connect farmers to fair and profitable markets, ensuring they get the value their hard work deserves.",
  },
  {
    title: "Cold Storage & Logistics",
    description:
      "With solar-powered cooling systems, mobile cold-chain vehicles, and centralized storage facilities, we extend shelf life and reduce losses.",
  },
  {
    title: "Value Addition",
    description:
      "We process raw produce into consumer-ready products, creating new income streams and reducing waste.",
  },
  {
    title: "Training & Capacity Building",
    description:
      "Through farmer trainings and school gardening programs, we empower youth and women with practical agribusiness skills.",
  },
];

  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

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
    <div className="font-sans px-3 mt-10 text-gray-900">
   
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
 


      {/* HERO */}
      <section className="relative max-w-5xl mx-auto h-auto md:mt-20  mt-10 min-h-[60vh] md:min-h-[80vh]">
        <img
          src="/service.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-10 rounded-md">
          <h1 className="text-white mb-4 mt-20 text-4xl md:text-5xl font-bold max-w-xl">
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
      </section>

      {/* SERVICES */}
    


    <section className="max-w-5xl mx-auto px-4 py-12 space-y-4">
      <div className="bg-[#264733] text-white rounded-xl shadow-md overflow-hidden">
        {/* Title */}
        <div className="px-6 py-4 font-semibold text-lg">
          Farming & Cultivation
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-4">
          <p className="text-sm">
            We grow high-quality vegetables and fruits using sustainable
            practices to meet consumer demand while protecting the environment.
          </p>

          {/* 3 Images in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <img
              src="/farm1.jpg"
              alt="Farm 1"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src="/farm2.jpg"
              alt="Farm 2"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src="/vission3.png"
              alt="Farm 3"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
  

      {services.map((service, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div
            key={index}
            className="bg-[#264733] text-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg focus:outline-none"
            >
              {service.title}
              {isOpen ? (
                <FaChevronDown className="text-gray-300" />
              ) : (
                <FaChevronRight className="text-gray-300" />
              )}
            </button>

            {/* Content */}
            {isOpen && (
              <div className="px-6 pb-6 space-y-4">
                <p className="text-sm">{service.description}</p>

                {/* Images (if exists) */}
                {service.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    {service.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Service ${index} img ${i}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
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

export default ServicePage;