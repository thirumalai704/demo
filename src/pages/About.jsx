import React from "react";
import { motion } from "framer-motion";

function About() {
  const items = [
    { type: "B.E", label: "Degree" },
    { type: "7.5", label: "CGPA"},
    { type: "2025", label: "Gradution Year" },
    { type: "100%", label: "Dedication" },
  ];
  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
  return (
    <div className="min-h-screen md:pb-2  w-full bg-[#14213d] flex items-center justify-center px-4">
        
      <div className="flex  flex-col md:flex-row items-center justify-center gap-12 max-w-6xl">
         
       
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="min-w-[250px] lg:min-w-md hidden md:flex ring-gray-400 md:h-[250px] lg:h-[350px]  ring p-2 flex justify-center items-center rounded-md"
        >
         
          <div
          
          className=" rounded-2xl bg-gradient-to-r from-[#8338ec] to-[#3a86ff] h-full w-full  flex items-center justify-center mx-auto text-6xl ">
            🧑‍💻
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-white flex flex-col gap-6 max-w-xl"
        >
          <h1 className="md:text-3xl  text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-blue-600 to-purple-400">
            About Me
          </h1>
          <p className=" text-sm leading-6 md:text-md lg:text-lg">
            I'm an aspiring Full Stack Developer and a recent graduate with a
            Bachelor's in Engineering (2025) from Arunai Engineering College,
            Tiruvannamalai. With a strong academic foundation reflected in my
            7.7 CGPA, I'm passionate about creating innovative digital solutions
            and eager to apply my theoretical knowledge in real-world projects.
          </p>
          <p className="text-sm md:text-md lg:text-lg">
            During my academic journey, I've developed a strong foundation in
            programming fundamentals and modern web technologies. I'm actively
            seeking internship opportunities and full-time positions where I can
            contribute my skills while learning from experienced professionals.
            I'm particularly interested in React, Node.js, and full-stack
            development.
          </p>
          <motion.div 
          variants={containerVariants}
            initial="hidden"
            animate="visible"
          className="grid grid-cols-2 justify-center md:gap-x-4 gap-3 md:gap-y-6">
            {items.map((item,index) => {
              
              return (
                <motion.div
                key={index}
                variants={cardVariants}
                 className={`ring-1   bg-[#3A3A4B]/10 text-center md:p-1 ring-gray-400 rounded-2xl `}>
                  <h1 className="font-semibold text-xl md:text-4xl bg-clip-text text-transparent  bg-gradient-to-r from-[#8338ec] to-[#3a86ff]">
                   {item.type}
                  </h1>
                  <h4 className="text-gray-300 font-semibold">{item.label}</h4>
                </motion.div>
              );
            })}

           
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
