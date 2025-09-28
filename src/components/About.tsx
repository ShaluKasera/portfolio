"use client";
import React from "react";
import { workExperience, education } from "@/constants/constant";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-16 lg:px-32 xl:px-65 py-12 space-y-16"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Work Experience */}
        <div className="flex-1 space-y-6">
          <motion.p
            className="text-2xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-blue-200"> Work Experience</span>
          </motion.p>

          {workExperience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 border border-gray-700 flex flex-col items-start gap-2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <Icon className="text-4xl text-blue-400 mb-2" />
                <h3 className="text-xl font-bold">{item.heading}</h3>
                <p className="text-gray-300">{item.para}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Education */}
        <div className="flex-1 space-y-6">
          <motion.p
            className="text-2xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-blue-200">Education</span>
          </motion.p>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 border border-gray-700 flex flex-col gap-3"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              {/* Heading + Year */}
              <div className="flex justify-between items-center w-full">
                <h3 className="text-xl font-bold">{edu.heading}</h3>
                <span className="text-sm text-gray-400">{edu.year}</span>
              </div>

              {/* College / School */}
              <p className="text-gray-300">{edu.para1}</p>

              {/* Extra para for B.Tech */}
              {edu.para2 && (
                <p className="text-gray-400 text-sm">{edu.para2}</p>
              )}

              {/* Marks */}
              <p className="text-gray-300 font-medium">{edu.marks}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
