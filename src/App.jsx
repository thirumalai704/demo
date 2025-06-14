import React from "react";
import { BrowserRouter, Routes, Route,useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Navbar from "./component/Navbar";

import About from "./pages/About";

import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Skill from "./pages/Skill";
import Project from "./pages/Project";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
   
      <Navbar />
      <div className="bg-[#14213d]">
       <AnimatedRoutes />

      </div>
    </BrowserRouter>
  );
}

export default App;
