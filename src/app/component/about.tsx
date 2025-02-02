"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-20">
        
        {/* Left Side - Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            About Me
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hi, I’m <span className="text-blue-400 font-semibold">Abdulrehman</span>—a passionate web developer specializing in  
            <span className="text-blue-500 font-medium"> Next.js, TypeScript,</span> and  
            <span className="text-blue-500 font-medium"> Tailwind CSS</span>. I love building seamless, beautiful digital experiences.  
            Let’s create something amazing together! 🚀
          </p>
          <Link href="/MyCV/Abdulrehman Shaikh.pdf" target="_blank">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white px-6 py-3 rounded-lg text-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-blue-500/50">
              View CV
            </Button>
          </Link>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-500">
            <Image
              src="/MyPhoto/Profile1.png"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl hover:scale-105 transition-transform duration-500"
            />
            {/* Animated Border */}
            <div className="absolute inset-0 border-[3px] border-transparent rounded-2xl animate-border-glow"></div>
          </div>
        </motion.div>

      </div>

      {/* Glowing Background Effect */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
    </section>
  );
};

export default About;
