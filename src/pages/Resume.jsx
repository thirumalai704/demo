import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className=" min:h-screen   bg-[#14213d]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className=" flex items-center justify-center py-6 px-4 sm:px-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto"
        >
          <motion.h1
            className=" pt-8 text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            My Resume
          </motion.h1>

          {/* Resume Preview */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className=" mb-6  max-w-2xl mx-auto"
          >
            <div className="ring-1 ring-[#ffffff]/30 p-3 rounded-2xl">
              <div className="bg-white text-black p-4 sm:p-8 rounded-lg text-left space-y-4">
                <div className="text-center border-b pb-4">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Thirumalaiselvam
                  </h2>
                  <p className="text-gray-600">MERN Stack Developer</p>
                  <p className="text-xs sm:text-sm">
                    thirumalaiselvam2025.dev@gmail.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">Education</h3>
                  <div className="ml-2 sm:ml-4">
                    <p className="font-semibold text-sm sm:text-base">
                      B.E. Computer Science and Engineering
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Arunai Engineering College | 2025
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">Skills</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 mt-3">
                    {[
                      {
                        name: "HTML",
                        icon: "🌐",
                        color: "from-orange-400 to-red-500",
                      },
                      {
                        name: "CSS",
                        icon: "🎨",
                        color: "from-blue-400 to-blue-600",
                      },
                      {
                        name: "Tailwind CSS",
                        icon: "💨",
                        color: "from-cyan-400 to-cyan-600",
                      },
                      {
                        name: "React.js",
                        icon: "⚛️",
                        color: "from-blue-400 to-cyan-400",
                      },
                      {
                        name: "JavaScript",
                        icon: "📜",
                        color: "from-yellow-400 to-yellow-600",
                      },
                      {
                        name: "Node.js",
                        icon: "🟢",
                        color: "from-green-400 to-green-600",
                      },
                      {
                        name: "MongoDB",
                        icon: "🍃",
                        color: "from-green-500 to-green-700",
                      },
                      {
                        name: "Express.js",
                        icon: "⚡",
                        color: "from-gray-600 to-gray-800",
                      },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-r ${skill.color} p-2 sm:p-3 rounded-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer`}
                      >
                        <div className="text-xl sm:text-2xl mb-1">
                          {skill.icon}
                        </div>
                        <div className="text-white font-medium text-xs sm:text-sm">
                          {skill.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.button
            className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg sm:text-xl overflow-hidden group"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 50px rgba(147, 51, 234, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <motion.span className="relative z-10 flex items-center  space-x-3">
              <span>📄</span>

              <a href="/Thirumalaiselvam_CV.pdf" download className= "text-sm md:text-lg ">
                Download Resume
              </a>
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
