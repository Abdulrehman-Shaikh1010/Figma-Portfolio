"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "Next.js", level: 75 },
  { name: "Graphic Designing", level: 85 },
];

const Skill = () => {
  return (
    <section id="Skill" className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-24 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-blue-400 tracking-widest font-semibold">
            SKILLS
          </h2>
          <h1 className="sm:text-4xl text-3xl font-bold text-white">
            My Skills
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="flex rounded-lg h-full p-6 flex-col bg-gray-800/70 shadow-lg hover:shadow-2xl transition-all border border-gray-700">
                
                {/* Skill Title */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center mb-3"
                >
                  <div className="w-9 h-9 mr-3 flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <h2 className="text-white text-lg font-semibold">{skill.name}</h2>
                </motion.div>

                {/* Skill Bar */}
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-700 rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="absolute bg-blue-500 h-2 rounded-lg"
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <p className="font-bold text-blue-400 text-right mt-1 text-sm">{skill.level}%</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing Background Effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Skill;
