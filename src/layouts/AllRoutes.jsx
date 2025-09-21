
// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import About from "../pages/About";
import Impact from "../pages/Impact";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
              <Route path="/impact" element={<Impact/>} />
                   <Route path="/about" element={<About/>} />
                   <Route path="/services" element={<ServicePage/>} />
                   <Route path="/blog" element={<Blog/>} />
                   <Route path="/contact" element={<Contact/>} />


    </Routes>
  );
};

export default AllRoutes;
