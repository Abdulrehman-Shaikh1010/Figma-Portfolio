import React from "react";
import Link from "next/link";
import Image from "next/image";

// Importing project images for Next.js optimization
import Portfolio from "../../../public/MyProject/Portfolio.png";
import Personal from "../../../public/MyProject/Personal.png";
import Hackathon from "../../../public/MyProject/Hackathon.png";

const Project = () => {
  return (
    <div id="Project" className="text-gray-900 body-font bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <section className="text-gray-300 body-font">
        <div className="container px-5 mx-auto">
          
          {/* Section Heading */}
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-blue-400">
              My Projects
            </h1>
            <p className="mt-2 text-gray-400">
              Here are some of my works showcasing my skills in web development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            
            {/* Project 1 */}
            <div className="w-full sm:w-[360px] p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 cursor-pointer">
                <Image
                  alt="Static Resume - Web Development Project"
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-t-lg"
                  src={Portfolio}
                  width={500}
                  height={300}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center text-center p-5 opacity-0 group-hover:opacity-100">
                  <h2 className="text-blue-400 text-sm font-medium mb-1">
                    Custom CSS Project
                  </h2>
                  <h1 className="text-lg font-semibold text-white mb-3">
                    Portfolio
                  </h1>
                  <p className="text-gray-300 mb-3">
                    A practice project to create a Custom Css Portfolio for learning purposes.
                  </p>
                  <Link href="https://custom-css-portfolio-roan.vercel.app/" target="_blank">
                    <span className="text-blue-400 font-medium hover:text-purple-500 transition-all">
                      View Project →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="w-full sm:w-[360px] p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 cursor-pointer">
                <Image
                  alt="Portfolio Website"
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-t-lg"
                  src={Personal}
                  width={500}
                  height={300}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center text-center p-5 opacity-0 group-hover:opacity-100">
                  <h2 className="text-blue-400 text-sm font-medium mb-1">
                    Portfolio Project
                  </h2>
                  <h1 className="text-lg font-semibold text-white mb-3">
                     Portfolio
                  </h1>
                  <p className="text-gray-300 mb-3">
                    My personal portfolio website built with Next.js and Tailwind CSS.
                  </p>
                  <Link href="https://abdulrehmanshaikh.vercel.app/" target="_blank">
                    <span className="text-blue-400 font-medium hover:text-purple-500 transition-all">
                      View Project →
                    </span>
                  </Link>
                </div>
                </div>
              </div>
              {/* Project 3 */}
            <div className="w-full sm:w-[360px] p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 cursor-pointer">
                <Image
                  alt="E-Commerce Website"
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-t-lg"
                  src={Hackathon}
                  width={500}
                  height={300}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center text-center p-5 opacity-0 group-hover:opacity-100">
                  <h2 className="text-blue-400 text-sm font-medium mb-1">
                    E-Commerce Project
                  </h2>
                  <h1 className="text-lg font-semibold text-white mb-3">
                    Online Store
                  </h1>
                  <p className="text-gray-300 mb-3">
                    A modern e-commerce website with a beautiful UI/UX experience.
                  </p>
                  <Link href="https://hackathon-template-8-steel.vercel.app/" target="_blank">
                    <span className="text-blue-400 font-medium hover:text-purple-500 transition-all">
                      View Project →
                    </span>
                  </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
