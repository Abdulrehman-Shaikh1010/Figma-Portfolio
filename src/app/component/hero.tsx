"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";

// Importing image statically for better optimization
import Profile from "../../../public/MyPhoto/Profile.jpg";
import Link from "next/link";

export const Hero = () => {
  // Function for smooth scrolling
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-24 text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-20">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            I am{" "}
            <br className="hidden lg:inline-block" />
            <span className="text-blue-600">
              <Typewriter
                options={{
                  strings: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </span>
          </h1>

          <div className="w-[100px] h-[3px] bg-blue-700 mb-6"></div>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Hi, I’m <span className="text-blue-400 font-semibold">Abdulrehman</span>—a passionate web developer specializing in{" "}
            <span className="text-blue-500 font-medium">Next.js, TypeScript,</span> and{" "}
            <span className="text-blue-500 font-medium">Tailwind CSS</span>. I love building seamless, beautiful digital experiences. Let's make something amazing!
          </p>
          
          <Link href='#Contact'>
          <div className="flex justify-center">
            
            <Button
              className="inline-flex text-white bg-blue-600 border-0 py-4 px-10 focus:outline-none hover:bg-blue-700 rounded-lg text-xl transition-all shadow-lg"
            >
              Contact Me
            </Button>
            </div>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden bg-white/10 backdrop-blur-lg shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-500">
            <Image
              src={Profile}
              alt="Abdulrehman Shaikh"
              width={300}
              height={300}
              className="object-cover object-center rounded-full hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Animated Border */}
            <div className="absolute inset-0 border-[3px] border-transparent rounded-full animate-border-glow"></div>
          </div>
        </div>

      </div>

      {/* Glowing Background Effect */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
    </section>
  );
};
