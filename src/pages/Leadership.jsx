// src/App.jsx
import {  FaTwitter, FaInstagram,  FaArrowUp, FaLinkedinIn, FaFacebookF, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,  FaArrowRight, } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Leadership= () => {
  
 
  
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
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
const team = [
  {
    name: "Abdul-Azeez Alawiye",
    role: "(Founder & COO)",
    img: "/alawiye.png",
    bio: `Abdul-Azeez Alawiye is a visionary agribusiness expert, sustainability advocate, and the founder of Fruitieveggie Farmacy Limited, a pioneering enterprise dedicated to transforming Nigeria’s agricultural value chain. His mission is clear: to reduce post-harvest losses, empower farmers, and strengthen food security through innovative, climate-smart, and market-driven solutions.

With over nine years of experience in agribusiness, commodity trading, farm operations, and project management, Abdul-Azeez has consistently bridged the gap between smallholder farmers and profitable markets. His expertise spans crop production, agricultural logistics, cold-chain innovation, farm planning and setup, and value chain optimization. Under his leadership, Fruitieveggie has grown from a small farm startup into a recognized driver of agricultural innovation, serving hundreds of farmers and building partnerships with institutions such as HortiNigeria, Heifer International Nigeria, Fate Foundation, Ecotutu and Eweko Concept.

A passionate believer in post-harvest innovation, he is spearheading projects that integrate solar-powered cold storage, mobile cooling vehicles, aggregation hubs, and processing initiatives to tackle Nigeria’s food waste crisis. Through these efforts, Fruitieveggie is not only cutting losses but also creating new income streams for farmers, enhancing produce quality, and building consumer trust in local agricultural products.

His leadership style is youth-driven, inclusive, and impact-focused. With a team where over 60% are women and 100% are youth under 33 years, Abdul-Azeez is actively advancing gender equity and youth employment in agriculture. He has empowered more than 700 smallholder farmers, with a target of reaching 6,000 farmers (60% women) by 2026.

Abdul-Azeez’s influence extends beyond business, he was nominated as President of the Southwest Association of Vegetable Farmers and Sellers, where he champions advocacy, innovation, and partnerships for the collective growth of farmers. His efforts have also earned Fruitieveggie recognition as one of the top 50 innovative startups at the DBN Deal Room, alongside securing International pitch competition grants.

He is also a strong advocate for education and farmer training. Beyond running practical training programs for farmers, he contributes to initiatives like the Young Farmers’ Clubs revival program under the Renewed Hope Initiative of Nigeria’s First Lady, where he supports secondary school students in gaining hands-on agricultural knowledge.

His commitment to sustainable agriculture has earned him recognition through numerous entrepreneurship and agribusiness development programs facilitated by Fate Foundation, GIZ, FMARD, NASSI, Odua Farmers Academy, and Soilless Farm Lab (Eupepsia Place).

Looking ahead, Abdul-Azeez envisions a future where Nigeria leads a youth-driven agribusiness revolution, cutting post-harvest losses nationwide, unlocking export opportunities, and building a resilient food system that benefits farmers, consumers, and the environment alike.`
  },
  {
    name: "Blessing Nwachukwu",
    role: "(Project Manager)",
    img: "/blessing.png",
    bio: `Blessing Ugochi Nwachukwu is an agricultural engineer committed to advancing post-harvest innovation and strengthening food security. She graduated from the Federal Polytechnic Nekede, Owerri, Imo State, where she specialized in Soil and Water Engineering, gaining a solid foundation in agricultural science and engineering principles. Her academic background inspired a strong passion for tackling post-harvest losses and their impact on food availability and farmer livelihoods.

Blessing combines her technical expertise with exceptional organizational and communication skills. Having recently completed a project management program at ALX, she is equipped to lead cross-functional teams, coordinate projects efficiently, and deliver impactful results. She values collaboration and clarity, recognizing them as essential to building sustainable agricultural solutions.

Her drive extends beyond technical engineering as she is deeply motivated by the social and economic implications of food insecurity. Blessing believes that innovation and climate-smart solutions are critical to reducing losses, improving access to nutritious food, and empowering farming communities.

Outside her professional pursuits, Blessing enjoys singing and traveling, activities that provide creative balance while broadening her exposure to diverse cultures and perspectives. These experiences enrich her approach to problem-solving and reflect her well-rounded, dynamic personality.`
  },
 {
  name: "Sammy Ebiere Ebikebina",
  role: "(Head of Operations)",
  img: "/sammy.png",
  bio: `Sammy Ebiere Ebikebina is a seasoned agricultural professional with a strong background in inventory management, farm operations, and farmer capacity building. Over the years, Sammy has honed his expertise in ensuring operational efficiency and promoting sustainable farming practices within agricultural communities.

Between June 2015 and August 2017, Sammy effectively managed inventory for a farm store, ensuring accurate tracking and organization of produce and equipment. His role involved verifying product quality, tracking deliveries, and maintaining detailed material records, demonstrating a keen eye for detail and logistics.

From March 2021 to July 2022, Sammy transitioned to a more strategic role, providing comprehensive coaching to farmers on efficient farm management practices. He also coordinated workshops to introduce improved crop varieties, showcasing his ability to combine technical knowledge with farmer empowerment. Additionally, Sammy implemented innovative inventory management strategies while overseeing a general store warehouse, ensuring optimal organization and streamlined operations.
`,
  coreSkills: [
    "Food Safety and Sanitation: Extensive knowledge of regulatory compliance measures to ensure food safety throughout the production process.",
    "Quality Control and Assurance: Proficient in maintaining high product standards through regular testing and quality assurance systems.",
    "Agricultural Machinery Operation: Skilled in utilizing cutting-edge technology and machinery to maximize efficiency and precision in agricultural tasks."
  ]
}
,
  {
    name: "Darlington Johnny",
    role: "(Farm Manager)",
    img: "/lastimg.png",
    bio: `Darlington Tamarakuro Johnny is an agronomist and farmer from Delta State, Nigeria, currently based in Awowo, Ogun State. He holds a Bachelor of Science in Education from Delta State University, Abraka, and has developed a career centered on advancing sustainable agriculture and strengthening food security in Nigeria.

Darlington’s expertise spans soil fertility management, crop yield optimization, and climate-smart farming practices. He has trained local farmers on improved techniques in crop rotation, pest management, and irrigation, equipping them with tools to boost productivity and resilience. Through hands-on farm management, he has established model farms that demonstrate the viability of profitable and sustainable agriculture.

Beyond technical expertise, Darlington is an advocate for youth inclusion in agriculture. He mentors young farmers and leads workshops aimed at inspiring the next generation to view farming as a driver of innovation and economic opportunity.

Outside the field, he is passionate about music, which he sees as a universal language for creativity and community building. His dual commitment to agriculture and personal expression reflects a holistic approach to life and leadership.

Darlington remains dedicated to shaping a future where farming not only sustains communities but also fuels economic growth, environmental stewardship, and empowerment across Nigeria.`
  },
  {
    name: "Joy Jama",
    role: "(Sales and Business Development)",
    img: "/joy.png",
    bio: `Joy Jama leads sales and business development at Fruitieveggie, driving partnerships and customer growth. She focuses on expanding market access for smallholder farmers, strengthening client relationships, and positioning Fruitieveggie as a trusted brand for fresh and sustainable produce.`
  },
];


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

      {/* HERO */}
     <div
  id="home"
  className="relative md:min-h-[80vh] min-h-[50vh] mt-20 flex items-center w-full  text-left text-white"
>
  {/* Background image */}
  <img
    src="/blog2.jpg"
    alt="Agriculture"
    className="absolute inset-0 w-full h-full object-cover "
  />
               <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 md:p-12">
                 <h1 className="text-white text-2xl mt-20 mb-3 md:text-5xl font-bold w-full  md:max-w-3xl">
                   Revolutionizing agriculture
                 </h1>
                 <p className="text-white md:text-xl text-xs w-full md:max-w-3xl">
                   At Fruitieveggie, we revolutionize agriculture with sustainable
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
 
      {/* ================= LEADERSHIP ================= */}
     <div className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm uppercase text-red-500 font-bold mb-2">
          Leadership Team
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold mb-12">
          The minds behind Fruitieveggie
        </h1>

       <div className="grid grid-cols-1 gap-8">
  {team.map((person, idx) => {
    const isExpanded = expandedIndex === idx;
    return (
      <div
        key={idx}
        className="flex flex-col md:flex-row border-1 shadow-[0_0_10px_#BDDA02] 
                   hover:shadow-[0_0_20px_#BDDA02] bg-white rounded-xl p-6 
                   transition hover:shadow-xl text-left"
      >
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0 md:mr-6">
          <img
            src={person.img}
            alt={person.name}
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{person.name}</h3>
          <p className="md:text-sm text-xs font-semibold text-red-600 mb-2">
            {person.role}
          </p>

          {/* Bio paragraphs */}
          <div
            className={`md:text-sm text-xs text-gray-700 text-justify leading-relaxed space-y-3 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {person.bio.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Core Skills */}
            {person.coreSkills && (
              <div className="mt-3 text-left">
                <h4 className="font-semibold">Core Skills:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {person.coreSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Read More / Show Less */}
          <button
            onClick={() => toggleExpand(idx)}
            className="mt-2 md:text-sm text-xs text-black hover:underline self-start"
          >
            {isExpanded ? "Show Less <<" : "Read More >>"}
          </button>
        </div>
      </div>
    );
  })}
</div>

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

export default Leadership;