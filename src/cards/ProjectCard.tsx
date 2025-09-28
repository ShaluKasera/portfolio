"use client";
import React, { FC } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
interface ProjectCardProps {
  image: string; 
  techStack: string[]; // array of icon paths
  title: string;
  description: string;
  liveLink?: string; 

}

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  techStack,
  title,
  description,
  liveLink,

}) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Tech stack icons */}
        <div className="flex gap-3 mb-2">
          {techStack.map((icon, index) => (
            <div key={index} className="w-6 h-6 relative">
              <Image src={icon} alt={`tech-${index}`} fill className="object-contain" />
            </div>
          ))}
        </div>

        {/* Title */}
        <p className="text-lg font-semibold mb-2">{title}</p>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 flex-1">{description}</p>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 flex text-lg gap-2 font-bold"
            >
             Check Live Site <FaLocationArrow className="mt-1"/>
            </a>
          )}
          {/* {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-700 text-white rounded-md text-sm hover:bg-gray-600 transition-colors"
            >
              Code
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
