import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "HTML & CSS", level: 99, icon: "📘", color: "#3178C6" },
  { name: "Javascript", level: 90, icon: "🎮", color: "#000000" },
  { name: "Tailwindcss", level: 95, icon: "🎮", color: "#3776AB" },
  { name: "React.js", level: 80, icon: "⚛️", color: "#61DAFB" },
  { name: "Node.js", level: 80, icon: "🟢", color: "#339933" },
  { name: "MongoDB", level: 82, icon: "🍃", color: "#47A248" },
 
];

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#14213d] pb-10 md:pb-0 ">

    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className=" pt-14 md:pt-16 z-10  bg-gradient-to-r text-transparent bg-clip-text from-blue-600 to-purple-400"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto  px-6 "
      >
        <h1
        
          className="text-3xl md:text-6xl font-bold text-gradient text-center mb-8  md:mb-16"
        >
          My Skills
        </h1>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className=" ring-1 ring-[#ffffff]/20 p-6 rounded-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  
                

                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <motion.span
                  className="text-2xl font-bold text-gradient"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color})`,
                  }}
                  initial={{ width: 0 }}
                  animate={
                    animateSkills ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-50"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                      boxShadow: `0 0 10px ${skill.color}`,
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1 + index * 0.1,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>

              {/* Skill description */}
              <motion.p
                className="text-white/60 text-sm mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                {skill.level >= 90 &&
                  "Expert level - Advanced projects and mentoring"}
                {skill.level >= 80 &&
                  skill.level < 90 &&
                  "Advanced level - Complex applications"}
                {skill.level >= 70 &&
                  skill.level < 80 &&
                  "Intermediate level - Production ready"}
                {skill.level < 70 &&
                  "Learning - Basic to intermediate projects"}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Skills;
