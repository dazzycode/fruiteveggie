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
  
 
  const sdgs = [
  {
    id: 1,
    img: "/sdg1.png",
    title: "SDG 1: No Poverty",
    description: "We empower smallholder farmers with fair market access, training, and post-harvest solutions that increase their incomes and break the cycle of poverty in rural communities."
  },
  {
    id: 2,
    img: "/sdg2.png",
    title: "SDG 2: Zero Hunger",
    description: "By reducing post-harvest losses and ensuring affordable, nutritious food reaches markets, we contribute directly to food security and improved nutrition across Nigeria."
  },
  {
    id: 3,
    img: "/sdg3.png",
    title: "SDG 5: Gender Equality",
    description: "We prioritize women’s participation in agriculture with about 60% of our workforce are women and actively empower female farmers with tools, knowledge, and opportunities for leadership."
  },
  {
    id: 4,
    img: "/sdg5.png",
    title: "SDG 8: Decent Work & Economic Growth",
    description: "Through agribusiness innovation and youth-led solutions, we create decent jobs, build local capacity, and promote sustainable growth in the food value chain."
  },
 {
    id: 5,
    img: "/sdg4.png",
    title: "SDG 17: Partnerships for the Goals",
    description: "Collaboration is at the heart of our model. We work with governments, development partners, and private sector actors to scale impact, strengthen food systems, and achieve shared sustainability goals."
  }];

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
    <div className=" mt-10 min-h-screen w-full  text-gray-900">
   
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
    {/* Hero Section */}
<section
  id="home"
  className="relative md:min-h-[80vh] min-h-[50vh] mt-20 flex items-center w-full  text-left text-white"
>
  {/* Background image */}
  <img
    src="/impact.png"
    alt="Agriculture"
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50 " />

  {/* Content */}
  <div className="relative z-10 md:max-w-3xl w-full px-6 md:px-12">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      Transforming Agriculture Across Africa
    </h1>
    <p className="mt-4 text-xs md:text-xl">
      At Fruitieveggie, we measure success not just in numbers,
      but in lives transformed, food saved, and communities empowered.
    </p>
  </div>
</section>


      {/* Impact Stats */}
      <div id="impact" className="py-12 px-6 text-center bg-gray-50">
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

      </div>

   


    <div className="py-12 px-6 flex flex-col items-center">
      <h2 className="md:text-2xl text-lg text-black font-bold mb-10 text-center">
        Sustainable Development Goals
      </h2>

      <div className="max-w-4xl w-full flex flex-col gap-8">
        {sdgs.map((sdg) => (
          <div
            key={sdg.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 rounded-lg shadow-md"
          >
            {/* Image */}
            <img
              src={sdg.img}
              alt={sdg.title}
              className="h-52 w-52 object-contain rounded-lg shadow"
            />

            {/* Text */}
            <div className="flex-1 ">
              <h3 className="md:text-xl text-sm  font-semibold text-blackmb-2">
                {sdg.title}
              </h3>
              <p className="text-gray-700 md:text-lg text-xs  leading-relaxed">
                {sdg.description}
              </p>
            </div>
          </div>
        ))}
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

export default Impact;