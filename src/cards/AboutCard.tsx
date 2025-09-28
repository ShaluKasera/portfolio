"use client";
import React, { FC, ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  heading: string;
  para: string;
}

const AboutCard: FC<AboutCardProps> = ({ icon, heading, para }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform">
      {/* Icon */}
      <div className="text-blue-400 text-5xl mb-4">{icon}</div>

      {/* Heading */}
      <h3 className="text-2xl font-bold mb-2">{heading}</h3>

      {/* Paragraph */}
      <p className="text-gray-300 md:text-base text-sm ">{para}</p>
    </div>
  );
};

export default AboutCard;
