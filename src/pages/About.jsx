import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight } from "react-icons/fa";
    import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaBolt,
  FaAward,
} from "react-icons/fa";

  
 
const About= () => {
 const team = [
  {
    name: "Abdul-Azeez Alawiye",
    role: "(Founder & COO)",
    img: "/alawiye.png",
  },
  {
    name: "Sammy Ebiere Ebikebina",
    role: "(Head of Operations)",
    img: "/sammy.png",
  },
  {
    name: "Blessing Nwachukwu",
    role: "(Project Manager)",
    img: "/blessing.png",
  },
  {
    name: "Joy Jama",
    role: "(Sales and Business Development)",
    img: "/joy.png",
  },
  {
    name: "Darlington Johnny",
    role: "(Farm Manager)",
    img: "/lastimg.png",
  },
];

  
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
          className="px-6 py-2 text-xs md:text-sm shadow-[0_0_20px_#BDDA02] hover:shadow-[0_0_10px_#BDDA02] 
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
 
 {/* HERO (centered container, not full width) */}
      <section className="px-6 py-12 flex justify-center">
        <div className="relative w-full max-w-4xl h-auto min-h-[70vh] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/about.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 md:p-12">
            <h1 className="text-white text-2xl mt-20 mb-3 md:text-5xl font-bold max-w-2xl">
              Revolutionizing agriculture
            </h1>
            <p className="text-white md:text-sm text-xs  max-w-2xl">
              At FruitVeggie, we revolutionize agriculture with sustainable
              practices and innovative solutions. By empowering farmers,
              particularly women and youth, we promote food security, minimize
              waste, and foster community growth.
            </p>
       <Link to="/contact" >   <button className="md:px-6 px-3 mt-3  py-3 text-xs md:text-sm  rounded-lg font-semibold flex items-center justify-center gap-2 
  bg-[#BDDA02] text-black 
  shadow-[0_4px_15px_rgba(189,218,2,0.6)] 
  hover:shadow-[0_6px_20px_rgba(189,218,2,0.8)] 
  transition duration-300 ease-in-out active:scale-95">
              Contact Us <FaArrowRight />
            </button></Link>
          </div>
        </div>
      </section>

      {/* VISION & MISSION (also centered, not full width) */}
      <section className="px-6 py-16 flex justify-center">
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/farm1.jpg"
              alt="Vision"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl">The Vision</h3>
              <p className="text-gray-600 text-sm mt-2">
                We strive to create a sustainable, high-quality food production,
                distribution, and retail system.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/farm2.jpg"
              alt="Mission"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl">Our Mission</h3>
              <p className="text-gray-600 text-sm mt-2">
                We empower farmers, strengthen food systems, and enhance product
                preservation through training, collaboration, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE (full-width bg image, centered container) */}
    
    <section className="w-full">
  <img
    src="/section.png" 
    alt="Theory of Change"
    className="w-full h-full object-cover rounded-lg"
  />
</section>

 
    <div className="w-full font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow">
          <img
            src="/farm1.jpg"
            alt="Hero"
            className="w-full h-72 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-sm uppercase text-red-500 font-bold mb-2">
              Our Story
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Connecting farmers to fair markets and better futures.
            </h1>
            <p className="mb-6 text-gray-600">
              We build trust and empower farmers by providing them with access
              to markets, fair pricing, and sustainable agricultural practices.
            </p>
           <a
  href="mailto:smith@fruitnveggis.com">  <button className="px-6 py-3  bg-[#BDDA02] text-black 
  shadow-[0_4px_15px_rgba(189,218,2,0.6)] 
  hover:shadow-[0_6px_20px_rgba(189,218,2,0.8)] 
  transition duration-300 ease-in-out active:scale-95 rounded-md font-semibold ">
              Join us in building a sustainable future
            </button></a>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="w-full bg-green-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm uppercase text-red-500 font-bold mb-2">
            Core Values
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-12">
            Turning Resources into Results
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <FaLeaf className="text-green-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-sm text-gray-600">
                We partner environmentally responsible practices.
              </p>
            </div>
            <div>
              <FaHandshake className="text-green-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold">Integrity</h3>
              <p className="text-sm text-gray-600">
                We build trust through transparency and fairness.
              </p>
            </div>
            <div>
              <FaLightbulb className="text-green-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold">Innovation</h3>
              <p className="text-sm text-gray-600">
                We embrace technology and creativity.
              </p>
            </div>
            <div>
              <FaUsers className="text-green-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold">Collaboration</h3>
              <p className="text-sm text-gray-600">
                We work with farmers, markets and communities.
              </p>
            </div>
            <div>
              <FaBolt className="text-green-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold">Empowerment</h3>
              <p className="text-sm text-gray-600">
                We create opportunities for growth and success.
              </p>
            </div>
            <div>
              <FaAward className="text-green-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold">Excellence</h3>
              <p className="text-sm text-gray-600">
                We deliver high-quality products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm uppercase text-red-500 font-bold mb-2">
            Leadership Team
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-12">
            The minds behind Fruitieveggie
          </h1>

         <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
  {team.map((person, idx) => (
    <div key={idx} className="text-center">
      <img
        src={person.img}
        alt={person.name}
        className="w-54 h-54 object-cover rounded-full mx-auto mb-3"
      />
      <h3 className="font-semibold">{person.name}</h3>
      <p className="text-sm text-gray-600">{person.role}</p>
    </div>
  ))}
</div>
</div>
      </section>

     
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

export default About;