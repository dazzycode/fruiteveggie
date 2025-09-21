// src/App.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// Reusable StatCard
function StatCard({ target, suffix, label, imgSrc }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000; 
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
      <img src={imgSrc} alt={label} className="h-16 w-16 mb-4" />
      <h2 className="text-3xl font-bold text-green-700">
        {count}
        {suffix}
      </h2>
      <p className="mt-2 text-gray-700">{label}</p>
    </div>
  );
}
 
const Impact= () => {
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
 
  const [selectedSDG, setSelectedSDG] = useState(null);
const sdgs = [
  {
    id: 1,
    img: "/sdg1.png",
    title: "SDG 1: No Poverty",
    description:
      "End poverty in all its forms everywhere by providing equal access to economic resources and basic services.",
  },
  {
    id: 2,
    img: "/sdg2.png",
    title: "SDG 2: Zero Hunger",
    description:
      "End hunger, achieve food security, improve nutrition and promote sustainable agriculture.",
  },
  {
    id: 3,
    img: "/sdg3.png",
    title: "SDG 3: Good Health and Well-being",
    description:
      "Ensure healthy lives and promote well-being for all at all ages.",
  },
  {
    id: 5,
    img: "/sdg5.png",
    title: "SDG 5: Gender Equality",
    description:
      "Achieve gender equality and empower all women and girls.",
  },
  {
    id: 4,
    img: "/sdg4.png",
    title: "SDG 4: Quality Education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
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
    <div className="font-sans mt-10 text-gray-900">
   
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
     

      {/* Hero Section */}
      <section
        id="home"
        className="relative  min-h-[70vh] mx-auto mt-20 flex items-center max-w-4xl rounded-lg justify-center text-center text-white"
      >
        <img
          src="/impact.png"
          alt="Agriculture"
          className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-2xl" />
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Transforming Agriculture Across Africa
          </h1>
          <p className="mt-4 text-lg">
            At Fruitweggie Farmwey, we measure success not just in numbers,
            but in lives transformed, food saved, and communities empowered.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-12 px-6 text-center bg-gray-50">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
    <StatCard
      target={700}
      suffix="+"
      label="Farmers Supported"
      imgSrc="/stat1.png"
    />
    <StatCard
      target={60}
      suffix="%"
      label="Empowered in Agriculture"
      imgSrc="/stat2.png"
    />
    <StatCard
      target={30}
      suffix="%"
      label="Post-Harvest Losses Reduced"
      imgSrc="/stat3.png"
    />
  </div>

      </section>

      {/* SDGs */}
     <div className="py-8 px-6 text-center">
  <h2 className="md:text-2xl text-sm text-black font-bold mb-6">
    Sustainable Development Goals
  </h2>
  <div className="flex justify-center flex-wrap gap-6">
    {sdgs.map((sdg) => (
   <img
  key={sdg.id}
  src={sdg.img}
  alt={sdg.title}
  className="h-22 cursor-pointer hover:scale-110 transition-transform shadow-lg hover:shadow-2xl rounded-lg"
  onClick={() => setSelectedSDG(sdg)}
/>

    ))}
  </div>
</div>
{selectedSDG && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
      <button
        className="absolute top-2 right-2 text-[#BDDA02] hover:text-red-500"
        onClick={() => setSelectedSDG(null)}
      >
        ✖
      </button>
      <img
        src={selectedSDG.img}
        alt={selectedSDG.title}
        className="h-24 mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-red-700 mb-2">
        {selectedSDG.title}
      </h3>
      <p className="text-black text-sm">{selectedSDG.description}</p>
    </div>
  </div>
)}


    
     
 

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

export default Impact;