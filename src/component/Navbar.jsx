import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "🧑‍💻" },
    { path: "/resume", label: "Resume", icon: "📄" },
    { path: "/project", label: "Project", icon: "⚡" },
    { path: "/skill", label: "Skill", icon: "🛠️" },
    { path: "/contact", label: "Contact", icon: "📧" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-[#1A1B2F]/10 hidden md:flex md:p-4 backdrop-blur-md justify-center rounded-b-md fixed w-full z-20 top-0 start-0 border-b-2 px-4 shadow-md border-[#3A3A4B]">
        <div className="w-full flex justify-center items-center space-x-8">
          {navigationItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded text-[#edede9] hover:bg-[#3A3A4B] hover:scale-105 transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg shadow-blue-500/50 text-white"
                    : ""
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-5 right-5 z-30 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-64 bg-[#1A1B2F]/95 backdrop-blur-md rounded-xl p-4 space-y-4 shadow-xl z-20 md:hidden transition-all duration-300">
          {navigationItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded-lg text-[#edede9] hover:bg-[#3A3A4B] transition duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-400 to-purple-600 text-white"
                    : ""
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
