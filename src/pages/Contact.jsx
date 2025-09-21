// src/App.jsx
import {  FaTwitter, FaInstagram, FaArrowRight, FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

 
const Contact= () => {
  const faqs = [
  {
    question: "What is FruitVeggies Farmacy Limited all about?",
    answer:
      "FruitVeggies is an agricultural enterprise focused on reducing post-harvest losses, empowering farmers, and ensuring food security. We provide innovative post-harvest solutions, including cold storage, logistics, and market access for fresh produce.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with farmers, distributors, retailers, and consumers interested in fresh produce.",
  },
  {
    question: "What makes FruitVeggies different?",
    answer:
      "Our unique focus on sustainability, innovation, and farmer empowerment sets us apart. We reduce waste, improve logistics, and connect farmers directly with markets.",
  },
  {
    question: "How can farmers benefit from FruitVeggies?",
    answer:
      "Farmers benefit from access to cold storage, logistics, training, and improved market opportunities that increase profits and reduce losses.",
  },
  {
    question: "Do you only serve farmers?",
    answer:
      "No. While farmers are a core part of our mission, we also serve distributors, retailers, and households that want fresh produce.",
  },
  {
    question: "How does FruitVeggies promote sustainability?",
    answer:
      "We help reduce food waste, encourage eco-friendly farming practices, and provide efficient storage and transport solutions to preserve freshness.",
  },
  {
    question: "Can I partner with FruitVeggies?",
    answer:
      "Yes. We welcome partnerships with individuals, organizations, and businesses aligned with our mission.",
  },
  {
    question: "Do you provide training for farmers?",
    answer:
      "Yes. We train farmers in best agricultural practices, storage methods, and ways to access wider markets.",
  },
  {
    question: "What products do you handle?",
    answer:
      "We handle fresh fruits, vegetables, and other perishable produce.",
  },
  {
    question: "Can I visit your farm or facilities?",
    answer:
      "Yes, visits can be arranged. Please contact our support team to schedule one.",
  },
  {
    question: "How do I place an order for fresh produce?",
    answer:
      "Orders can be placed through our website, mobile app, or customer service channels.",
  },
  {
    question: "Do you deliver nationwide?",
    answer:
      "Yes. We deliver to several states nationwide through our logistics partners.",
  },
  {
    question: "What is the minimum order size?",
    answer:
      "Minimum order size may vary depending on the type of produce. Contact us for details.",
  },
  {
    question: "How do you ensure freshness during delivery?",
    answer:
      "We use cold chain logistics and proper packaging to ensure all produce arrives fresh.",
  },
  {
    question: "How should I store the produce after purchase?",
    answer:
      "We provide storage tips for different produce to help customers preserve freshness after delivery.",
  },
  {
    question: "Do you offer subscriptions or regular delivery services?",
    answer:
      "Yes. Customers can subscribe for weekly or monthly fresh produce delivery services.",
  },
  {
    question: "What happens if my order arrives damaged or incomplete?",
    answer:
      "Please contact our support team immediately. We will arrange a replacement or refund.",
  },
  {
    question: "Do you also sell processed products?",
    answer:
      "Our main focus is fresh produce, but we plan to introduce processed products in the future.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We accept debit/credit cards, bank transfers, and mobile payment options.",
  },
  {
    question: "How can I contact FruitVeggies?",
    answer:
      "You can reach us through email, phone, or the contact form on our website.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
 
    
      {/* Hero Image */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex mx-auto mt-20 max-w-4xl   text-white"
>
        <img
          src="/faq.png"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
        />
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-center text-lg mb-8">
            Simply fill in your details and submit the form below, and we’ll
            respond as quickly as possible.
          </h2>
          <form className="space-y-6">
            {/* Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded-md w-full"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded-md w-full"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Tell us how we can help"
              rows="5"
              className="border p-3 rounded-md w-full"
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

   

    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-medium text-gray-800 hover:text-green-600 focus:outline-none"
            >
              {faq.question}
              <span className="ml-2 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`mt-2 text-gray-600 transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
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

export default Contact;