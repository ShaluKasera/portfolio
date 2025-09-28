"use client";
import React, { FC } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Hero: FC = () => {
   const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      {/* Profile Image */}
      <motion.div
        className="mb-6 border-4 border-blue-500 rounded-full shadow-blue-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpeg"
          alt="Shalu Kumari"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
          priority
        />
      </motion.div>

      {/* Heading */}
      <motion.p
        className="text-2xl lg:text-6xl font-bold max-w-[700px] mb-4 bg-gradient-to-r from-white via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Creating web products, brands, and experiences
      </motion.p>

      {/* Sub-text with typewriter */}
      <motion.div
        className="text-sm md:text-base text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Hi! I&apos;m Shalu Kumari, A Passionate{" "}
        <span className="text-blue-300 inline-block">
          <Typewriter
            options={{
              strings: ["Full Stack Web Developer", "Problem Solver"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10"
      >
        <MagicButton
          title="See Projects"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => scrollToSection("projects")}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
