import React, { useEffect, useState } from "react";
import {  FaArrowRight, FaArrowUp, FaBars, FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaInstagram, FaTwitter} from "react-icons/fa";
 import { Link } from "react-router-dom";
import {  FaTimes } from "react-icons/fa";


 
// Reusable StatCard
function StatCard({ target, suffix, label, imgSrc }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 6000; 
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= target) {
        clearInterval(timer); 
        setCount(target);     
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} alt={label} className="w-12 md:h-12 h-10 mb-2" />
      <h3 className="text-2xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default function HomePage() {
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
  const [selectedSDG, setSelectedSDG] = useState(null);
const sdgs = [
  {
    id: 1,
    img: "/Sdg1.png",
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
 const slides = [
    {
      img: "/herobg.png",
      title: (
        <>
          Empowering Farmers <br /> Reducing Food Waste <br /> Feeding the Future
        </>
      ),
      text: "We are revolutionizing Nigeria’s agricultural value chain through sustainable farming, post-harvest solutions, and market access. From seed to storage, we empower farmers, reduce losses, and deliver fresh, high-quality produce to communities and markets.",
    },
    {
      img: "/bg2.png",
      title: (
        <>
          Empowering Farmers <br /> Reducing Food Waste <br /> Feeding the Future
        </>
      ),
      text: "Delivering fresh, high-quality fruits and vegetables directly from farmers to communities and markets, building trust and ensuring food security.",
    },
  ];

  return (
    <div className="font-sans px-1">

   <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
             {/* Logo */}
            <div className="flex items-center gap-2">
       <img
         src="/logor.png"
         alt="Fruit&Veggie Logo"
         className="h-12 w-auto"
       />
       <div className="flex flex-col leading-tight">
         <h2 className="font-semibold text-lg">Fruitieveggie</h2>
       <p className="text-sm text-gray-500">urban farm</p>
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
       
  

      {/* Hero */}
    <section className="relative w-full  md:py-0 mt-10 font-roboto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src={slide.img}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute  bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-start md:mx-10 mx-3 px-6 md:px-20 w-full md:max-w-4xl mt-20 md:mt-40 pb-16">
              <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-white mt-4 text-xs md:text-lg max-w-2xl">
                {slide.text}
              </p>

              <div className="mt-6 flex flex-row sm:flex-row gap-4">
                <Link to="/contact">
                  <button
                    className="md:px-6 px-3 py-3 text-xs md:text-sm rounded-lg font-semibold flex items-center justify-center gap-2 
                    bg-[#BDDA02] text-black 
                    shadow-[0_4px_15px_rgba(189,218,2,0.6)] 
                    hover:shadow-[0_6px_20px_rgba(189,218,2,0.8)] 
                    transition duration-300 ease-in-out active:scale-95"
                  >
                    Partner with us <FaArrowRight />
                  </button>
                </Link>

                <Link to="/contact">
                  <button
                    className="md:px-6 px-3 py-3 rounded-lg text-xs md:text-sm font-semibold flex items-center justify-center gap-2 
                    border border-[#BDDA02] text-[#BDDA02] 
                    shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
                    transition duration-300 ease-in-out active:scale-95"
                  >
                    Join as a Farmer <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Height control wrapper */}
      <style jsx>{`
        section {
          min-height: 50vh; /* Mobile */
        }
        @media (min-width: 768px) {
          section {
            min-height: 70vh; /* Tablet */
          }
        }
        @media (min-width: 1024px) {
          section {
            min-height: 90vh; /* Desktop */
          }
        }
      `}</style>
    </section>
  



      {/* About */}
      <div className=" mt-2 pb-5 bg-white text-center">
        <h3 className="md:text-3xl text-sm font-bold mt-2">
          Transforming Agriculture Across Africa
        </h3>

    <div className="mt-5 max-w-4xl mx-auto px-6">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000, // 3 seconds per slide
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="pb-10"
      >
        {/* Vision Slide */}
      
<SwiperSlide>
  <div className="flex flex-col py-5 items-left ">
    <img
      src="/vission1.png"
      alt="Vision"
      className="rounded-lg mb-4 w-full h-full object-cover"
    />
     <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Vision</h4>
    <p className="text-black md:text-lg text-left text-xs mb-6 mt-2">
     To lead Africa in sustainable, high-quality food production, distribution, and post-harvest solutions.

    </p>
    <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Mission</h4>
    <p className="text-black md:text-lg text-xs text-left mb-8 mt-2">
      We empower farmers, strengthen food systems, and reduce post-harvest losses through innovation, collaboration, and climate-smart solutions.
    </p>
  </div>
</SwiperSlide>

{/* Vision & Mission Slide 2 */}
<SwiperSlide>
  <div className="flex flex-col py-5 items-left ">
    <img
      src="/vission2.png"
      alt="Vision"
      className="rounded-lg mb-4 w-full h-full object-cover"
    />
    <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Vision</h4>
    <p className="text-black md:text-lg text-left text-xs mb-6 mt-2">
     To lead Africa in sustainable, high-quality food production, distribution, and post-harvest solutions.

    </p>
    <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Mission</h4>
    <p className="text-black md:text-lg text-xs text-left mb-8 mt-2">
      We empower farmers, strengthen food systems, and reduce post-harvest losses through innovation, collaboration, and climate-smart solutions.
    </p>
  </div>
</SwiperSlide>

{/* Vision & Mission Slide 3 */}
<SwiperSlide>
  <div className="flex flex-col py-5 items-left ">
    <img
      src="/vission3.png"
      alt="Vision"
      className="rounded-lg mb-4 w-full h-full object-cover"
    />
   <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Vision</h4>
    <p className="text-black md:text-lg text-left text-xs mb-6 mt-2">
     To lead Africa in sustainable, high-quality food production, distribution, and post-harvest solutions.

    </p>
    <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Mission</h4>
    <p className="text-black md:text-lg text-xs text-left mb-8 mt-2">
      We empower farmers, strengthen food systems, and reduce post-harvest losses through innovation, collaboration, and climate-smart solutions.
    </p>
  </div>
</SwiperSlide>

        {/* Vision & Mission Slide 4 */}
<SwiperSlide>
  <div className="flex flex-col py-5 items-left ">
    <img
      src="/farming10.jpg"
      alt="Vision"
      className="rounded-lg mb-4 w-full h-full object-cover"
    />
    <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Vision</h4>
    <p className="text-black md:text-lg text-left text-xs mb-6 mt-2">
      To inspire a generation of farmers and agri-entrepreneurs who will drive
      sustainable growth and nourish communities.
    </p>
    <h4 className="font-bold text-left text-sm text-red-700 tracking-widest">The Mission</h4>
    <p className="text-black md:text-lg text-xs text-left mb-8 mt-2">
      We innovate at every stage — from production to storage to distribution —
      to reduce losses, protect the environment, and uplift livelihoods.
    </p>
  </div>
</SwiperSlide>
      </Swiper>

      {/* Custom pagination styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d9d9d9 !important; /* inactive bullet */
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #BDDA02 !important; /* lime green active bullet */
        }
      `}</style>
    </div>
  
 

        <Link to="/about">   <button className="mt-8 px-6 py-3 rounded-lg font-semibold flex items-center gap-2  border border-[#BDDA02] text-[#BDDA02] 
  shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95 mx-auto">
          Learn More <FaArrowRight />
        </button></Link>
      </div>

      {/* Services */}
    
    <div className="bg-[#0f3d2e] text-white items-center justify-center py-8 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading & Button */}
        <div className="flex flex-col md:flex-row mt-10 justify-between items-start md:items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Building a Sustainable Future, <br />
            From Farm to Market.
          </h2>
         <Link to="/resources">    <button className="flex items-center gap-2 bg-[#BDDA02] text-black font-semibold px-5 py-3 rounded-lg shadow-md shadow-[0_0_30px_#BDDA02] hover:shadow-[0_0_10px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95transition">
            Learn More <FaArrowRight />
          </button></Link>
        </div>

        {/* Features */}
        <div className="mt-10  flex flex-col gap-8">
          <div className="flex justify-between items-center bg-[#164a38] p-5 rounded-lg border shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95transition">
            <div>
              <h3 className="font-semibold">Farming & Cultivation</h3>
              <p className="text-xs md:text-lg text-gray-300">
                We grow high-quality vegetables and fruits using sustainable
                practices to meet consumer demand while protecting the
                environment.
              </p>
            </div>
           <Link to="/farming">   <span className="text-[#BDDA02]">
              <FaArrowRight />
            </span></Link>
          </div>

          <div className="flex justify-between items-center bg-[#164a38] p-5 rounded-lg border shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95transition">
            <div>
              <h3 className="font-semibold">Aggregation & Market Linkages</h3>
              <p className="text-xs md:text-lg text-gray-300">
                We connect farmers to fair and profitable markets, ensuring they
                get the value their hard work deserves.
              </p>
            </div>
          <Link to="/aggregation">    <span className="text-[#BDDA02]">
              <FaArrowRight />
            </span></Link>
          </div>

         <div className="flex justify-between items-center bg-[#164a38] p-5 rounded-lg border shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95transition">
            <div>
              <h3 className="font-semibold">Cold Storage & Logistics</h3>
              <p className="text-xs md:text-lg text-gray-300">
                With solar-powered cooling systems, mobile cold-chain vehicles,
                and centralized storage facilities, we extend shelf life and
                reduce losses.
              </p>
            </div>
            <Link to="/storage">  <span className="text-[#BDDA02]">
              <FaArrowRight />
            </span></Link>
          </div>
            <div className="flex justify-between  items-center bg-[#164a38] p-5 rounded-lg border shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95transition">
            <div>
              <h3 className="font-semibold">Value Addition</h3>
              <p className="text-xs md:text-lg text-gray-300">
               We process raw produce into consumer-ready products, creating new revenue streams and reducing waste. </p>
            </div>
            <Link to="/value">  <span className="text-[#BDDA02]">
              <FaArrowRight />
            </span></Link>
          </div>
           <div className="flex justify-between py-2 items-center bg-[#164a38] p-5 rounded-lg border shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95transition">
            <div>
              <h3 className="font-semibold">Training & Capacity Building</h3>
              <p className="md:text-lg text-xs text-gray-300">
              Through farmer trainings and school gardening programs, we empower youth and women with practical agribusiness skills.

 </p>
            </div>
           <Link to="/training"> <span className="text-[#BDDA02]">
              <FaArrowRight />
            </span></Link>
          </div>
        </div>
      </div>
    </div>
 

      {/* Projects */}
      <div className="py-8 px-2 md:px-6 bg-gray-50">
        <h2 className="text-sm md:text-xl text-red-700 font-bold mx-5 text-left mb-2 tracking-widest">
          PROJECTS
        </h2>
       <h2 className="text-xl md:text-3xl font-bold mx-5 text-left mb-8">
  Driving agricultural transformation through innovation,<br />
  sustainability, and farmer empowerment to building a<br />
  future where food security and prosperity thrive.
</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="relative">
            <img
              src="/storage1.jpg"
              alt="Solar Cold Storage Utilization"
              className="rounded-xl w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 rounded-b-xl">
              Solar Cold Storage Utilization 
            </div>
          </div>
          <div className="relative">
            <img
              src="/training6.jpg"
              alt="School Gardening"
              className="rounded-xl w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 rounded-b-xl">
              School Gardening & Youth Empowerment Program 
            </div>
          </div>
          <div className="relative md:col-span-2">
            <img
              src="/vission2.png"
              alt="Farming Tractor"
              className="rounded-xl w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 rounded-b-xl">
              Large Scale Farming Project
            </div>
          </div>
        </div>
      </div>
<div
  className="py-6 px-4  text-center font-semibold "
>
  <h2 className="text-base md:text-3xl font-bold mx-auto leading-snug max-w-2xl mb-4">
    At Fruitieveggie, success is measured not only in numbers, but in{" "}
    <span className="text-[#BDDA02]">lives transformed</span>,{" "}
    <span className="text-[#BDDA02]">food saved</span>, and{" "}
    <span className="text-[#BDDA02]">communities empowered</span>.
  </h2>

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

 
      {/* Partners */}
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
  className="md:h-24 h-10 cursor-pointer hover:scale-110 transition-transform shadow-lg hover:shadow-2xl rounded-lg"
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


      {/* patners */}
      <div className="py-8 px-6 text-center bg-gray-50">
        <h2 className="md:text-xl text-sm text-red-700 font-bold mb-6">
         Our  partners 
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          <img src="/logo1.png" alt="SDG 1" className="md:h-18 h-12" />
          <img src="/logo2.png" alt="SDG 2" className="md:h-18 h-12" />
          <img src="logo3.png" alt="SDG 5" className="md:h-18 h-12" />
          <img src="/logo4.png" alt="SDG 8" className="md:h-18 h-12" />
        </div>
      </div>
   
     {/* Recommendations */}
      <div className="py-6 px-6 text-center bg-gray-50">
        <h2 className="md:text-xl text-sm text-red-700 font-bold mb-6">
        recognized and supported by
        </h2>
      <div className="flex justify-center">
  <img src="/logo5.png" alt="Our Partners" className="md:h-16 h-10" />
</div> </div>

    <div className="bg-gray-50">
      {/* FAQ Section */}
     
    <div className="bg-[#f5f7f5] flex flex-col items-center justify-center py-6 px-4">
      {/* Image Section */}
      <div className="relative w-full max-w-4xl">
        <img
          src="/faq.png" 
          alt="Support"
          className="w-full rounded-t-2xl object-cover h-[320px] md:h-[420px]"
        />

        {/* White Card Overlap Section */}
        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-md rounded-2xl p-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Do you have any questions?
          </h2>
         <Link to="/contact">    <button className="bg-[#BDDA02] text-xs  md:text-sm shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95transition text-black font-medium px-6 py-3 rounded-lg">
            See frequently asked questions →
          </button></Link>
        </div>
      </div>
    </div>
 
      {/* Blog Explore Section */}
      <div className="bg-green-50 mt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
            Explore More on Our Blog
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="/blog1.png"
                alt="Blog 1"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold mb-2">Insights on post-harvest loss reduction.</h4>
               
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="/blog2.png"
                alt="Blog 2"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold mb-2">Farmer Training Highlights.</h4>
                
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="/blog3.png"
                alt="Blog 3"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold mb-2">Partnership Announcements.</h4>
               
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/blog">   <button className="mt-8 px-6 py-3 rounded-lg font-semibold flex items-center gap-2  border border-[#BDDA02] text-[#BDDA02] 
  shadow-[0_0_10px_#BDDA02] hover:shadow-[0_0_20px_#BDDA02] 
  transition duration-300 ease-in-out active:scale-95 mx-auto">
              Explore more →
            </button></Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
    
      <div className="relative bg-gradient-to-r from-[#224031] to-[#6DBD29] mx-2 text-white px-6 py-8 mt-8 text-left rounded-t-[30px] rounded-b-[30px]">
        <div className="w-full mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold leading-snug">
            Join us in building a future
          </h2>
          <p className="mt-4 text-base md:text-2xl">
            Where farming thrives, communities prosper, and no harvest goes to
            waste. Partner with us today.
          </p>
        <a
              href="mailto:info@fruitieveggie.com"
> <button className="md:px-6 px-3  py-2 text-xs md:text-sm mt-3  rounded-full font-semibold flex items-center justify-center gap-2 
  bg-[#BDDA02] text-black 
  shadow-[0_4px_15px_rgba(189,218,2,0.6)] 
  hover:shadow-[0_6px_20px_rgba(189,218,2,0.8)] 
  transition duration-300 ease-in-out active:scale-95">
            Join us
          </button></a>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
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
 
  </div>
   
  );
}
