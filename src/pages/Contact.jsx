import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Oops! Something went wrong.");
        }
      );

    setTimeout(() => setStatus(""), 5000);
  };

  const details = [
    { icon: "💌", Label: "thirumalaiselvam2025.dev@gmail.com" },
    { icon: "📱", Label: "+91 9345300347" },
    { icon: "🍭", Label: "Tiruvannamalai" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#14213d] to-[#1a1a2e] text-white py-10 px-3">
      <h1 className="text-center bg-gradient-to-r md:pt-7 from-[#8338ec] to-[#3a86ff] bg-clip-text text-transparent text-2xl md:text-5xl mb-3 md:mb-7 font-bold ">
        Contact Me
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-12">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full md:w-1/2 self-center  shadow-amber-400/30 inset-shadow-2xs bg-white/10 backdrop-blur-md p-3 md:p-6 rounded-2xl ring-1 ring-gray-500 md:space-y-6 space-y-3 shadow-lg"
        >
          <h2 className="text-xl md:text-4xl font-bold text-white/90">
            Get in Touch
          </h2>
          <p className="text-white/60 md:text-lg text-sm">
            I am waiting for your message! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out using
            the form or the contact details below.
          </p>
          {details.map((detail, index) => (
            <div key={index} className="md:flex hidden  items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600  md:text-2xl flex items-center justify-center rounded-full shadow">
                {detail.icon}
              </div>
              <h2 className="md:text-md  lg:text-lg">{detail.Label}</h2>
            </div>
          ))}
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl ring-1 ring-purple-300 md:space-y-4 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-white/90">
            Send a Message
          </h2>

          <div className="space-y-2">
            <label className="text-white/80 text-sm font-semibold">Name</label>
            <input
              name="name"
              placeholder="Enter Your Name"
              type="text"
              required
              className="w-full p-1 md:p-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/80 text-sm font-semibold">Email</label>
            <input
              name="email"
              placeholder="Enter Your Email"
              type="email"
              required
              className="w-full p-1 md:p-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/80 text-sm font-semibold">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="For Project "
              required
              className="w-full p-1 md:p-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/80 text-sm font-semibold">
              Message
            </label>
            <textarea
              name="message"
              placeholder="I want Talk To You !!!"
              required
              rows={4}
              className="w-full p-3 rounded bg-white/20 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 w-full md:py-3 py-1 rounded font-semibold text-white"
          >
            Send
          </button>

          {/* Status Message */}
          {status && (
            <div className="text-center text-sm font-semibold text-green-400 mt-2">
              {status}
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
