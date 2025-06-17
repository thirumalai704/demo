import React from "react";
import { motion } from "framer-motion";


function Project() {
  const projects = [
    {
      id: 1,
      icons:"🎵",
      title: "Spotify Clone",
      description: "Spotify clone using React js",
      tags: ["React", "Tailwindcss", "HTML"],
      
      live: "https://spotifythiru.netlify.app/",
    },
    {
      id: 2,
      icons:"💰",
      title: "Expense Tracker",
      description: "Expense Tracker using Mern Stack",
      tags: ["React", "Node.js", "Express","MongoDB"],
      
      live: "https://mernexpense.netlify.app/",
    },
    {
      id: 3,
      title: "Movie Search",
      icons:"🍿",
      description: "Mobie Search Using API",
      tags: ["React", "Three.js", "Framer Motion"],
      live: "https://movie-search-bay-sigma.vercel.app/",
    },
    {
      id: 4,
      title: "Fylo",
      icons:"📱",
      description: "Responsive Website make using Tailwindcss ",
      tags: ["Tailwindcss","HTML","CSS","JavaScript"],
      github: "#",
      live: "https://fylo-thiru.netlify.app/",
    },
    {
      id: 5,
      title: "Hotal",
      icons:"🧑‍💻",
      description: "CRUD oparation in hotal as  adding cart removeing items  ",
      tags: ["React.js","Tailwindcss","HTML","CSS"],
      github: "#",
      live: "https://swiggy-clone-e057nwv3k-thirus-projects-c72f6104.vercel.app/cart",
    },
  ];

  // Parent container for staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Custom animation direction based on index
  const getDirectionVariant = (id) => {
    const directions = {
      1: { x: -100, y: 0 },
      2: { x: 0, y: -100 },
      3: { x: 100, y: 0 },
      4: { x: 0, y: 100 },
    };

    const dir = directions[id] || { x: 0, y: 50 };
    return {
      hidden: { opacity: 0, ...dir },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };
  };

  return (

<div className="bg-[#14213d] py-4  min-h-screen">
    <div className="pt-10 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="font-bold text-center bg-clip-text text-transparent text-3xl md:text-5xl bg-gradient-to-r from-[#8338ec] to-[#3a86ff]">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6 px-8 mt-6">
          {projects.map((project) => {
            const variant = getDirectionVariant(project.id);

            return (
              <motion.div
                key={project.id}
                variants={variant}
                whileHover={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                className="group p-4 rounded-2xl ring-1 ring-gray-400 bg-[#17122F] cursor-pointer"
              >
                <div className="flex flex-col  justify-center items-center">
                <p className="text-3xl animate-bounce" >{project.icons}</p>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-6 group-hover:bg-gradient-to-r group-hover:text-transparent bg-clip-text from-blue-600 to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                </div>
                <p className="text-white/70 mb-2 md:mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(147, 51, 234, 0.3)",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="flex-1 py-1 md:py-3 md:px-4 text-sm bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-center text-white font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>

</div>


  );
}

export default Project;
