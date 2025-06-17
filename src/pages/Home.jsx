import React from "react";
import { FaBook, FaBrain, FaHome } from "react-icons/fa";
import { NavLink } from "react-router";
import About from "./About";

import Contact from "./Contact";
import Resume from "./Resume";
import Skill from "./Skill";
import Project from "./Project";
import { motion, spring } from "framer-motion";
function Home() {
  return (
    <div 
    >
      
      <div className=" text-white bg-[#14213d]  min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex  flex-col space-y-4 md:space-y-10 mx-auto items-center    "
        >
          <motion.h1 
            initial={{x:-100}}
            animate={{x:0}}
            transition={{ type:"spring"}}
          className="font-bold bg-clip-text text-transparent text-4xl md:text-7xl bg-gradient-to-r from-[#8338ec] to-[#3a86ff]">
            Thirumalaiselvam
          </motion.h1>

          <h4 className="md:text-4xl text-xl tracking-wider font-medium">
            Full Stack Developer{" "}
          </h4>
          <p className="capitalize  md:tracking-wider text-sm tracking-wider p-3 md:p-0 md:text-lg text-center md:font-medium">
            I’m a passionate Full Stack Developer with hands-on experience in
            building responsive, scalable, and user-friendly web applications.
          </p>
          <div className="flex space-x-3 md:space-x-5">
            <NavLink
              to={"/project"}
              className="bg-gradient-to-r cursor-pointer md:hover:scale-105 transition-transform  transform duration-300 from-[#8338ec] to-[#3a86ff] text-[#ffffff]  px-3 py-1 md:px-4 hover: md:py-3 hover:shadow-2xl shadow-[#8338ec]/40 rounded-full  font-medium text-sm md:text-lg
              "
            >
              View My Work
            </NavLink>

            <NavLink
              to={"/contact"}
              className=" border-gray-200 ring ring-gray-200 cursor-pointer py-1 text-sm hover:scale-105 transition-transform  transform duration-300  text-[#ffffff] md:px-4 px-2 md:py-3 rounded-full font-medium md:text-lg
              "
            >
              Get In Touch
            </NavLink>
          </div>
        </motion.div>
      </div>
       <About />
      < Skill />
      <Resume />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
