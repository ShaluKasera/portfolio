"use client";
import React from "react";
import ProjectCard from "@/cards/ProjectCard";
import { projects } from "@/constants/constant";

const Project = () => {
  return (
    <section id="projects" className="px-5 md:px-16 lg:px-32 xl:px-80 py-12">
      {/* Page Heading */}
      <p className="text-center text-3xl md:text-5xl font-bold mb-12">A small selection of
       <span className="text-blue-200"> recent
projects</span>
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.img} // ✅ match constant
            techStack={project.iconLists} // ✅ match constant
            title={project.title}
            description={project.des} // ✅ match constant
            liveLink={project.link} // ✅ match constant
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
