"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start px-6 md:px-12 lg:px-20">

        {/* Left Section - Map & Contact Details */}
        <motion.div
          className="md:w-2/3 relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-500 p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg"
              frameBorder={0}
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=..."
              style={{ filter: "contrast(1.2) opacity(0.9)" }}
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-90 shadow-md p-6 rounded-b-2xl">
            <h2 className="text-blue-400 text-xl font-semibold mb-3">Get in Touch</h2>
            <p className="text-gray-300 mb-2">
              <strong>Address:</strong> House no 03, Tando Mir Ghulam Hussain, Latifabad no 9, Hyderabad.
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> 
              <a href="mailto:abdulrehman.shaikh29042@email.com" className="text-blue-400 hover:underline ml-1">
                abdulrehman.shaikh29042@email.com
              </a>
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> 03195904120
            </p>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="md:w-1/3 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl mt-8 md:mt-0 md:ml-10 border-2 border-transparent hover:border-blue-500 transition-all duration-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-400 text-2xl font-bold mb-5">Contact Me</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-1 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 mt-1 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition outline-none"
                placeholder="Write your message"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 py-3 rounded-lg text-lg transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-blue-500/50"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>

      {/* Glowing Background Effect */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Contact;
