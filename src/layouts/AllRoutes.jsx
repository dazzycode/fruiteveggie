// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import Impact from "../pages/Impact";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Vission from "../pages/Vission";
import Theory from "../pages/Theory";
import Story from "../pages/Story";
import Core from "../pages/Core";
import Leadership from "../pages/Leadership";
import Farming from "../pages/Farming";
import Agregation from "../pages/Agregation";
import Storage from "../pages/Storage";
import Value from "../pages/Value";
import Training from "../pages/Training";
import Faq from "../pages/Faq";
import ScrollToTop from "../pages/ScrollToTop";

const AllRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/vission" element={<Vission />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/resources" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/story" element={<Story />} />
        <Route path="/values" element={<Core />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/farming" element={<Farming />} />
        <Route path="/aggregation" element={<Agregation />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/value" element={<Value />} />
        <Route path="/training" element={<Training />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
