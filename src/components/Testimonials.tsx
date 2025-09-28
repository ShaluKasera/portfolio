"use client";
import React from "react";
import { testimonials } from "@/constants/constant";

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-10 md:px-16 lg:px-32 xl:px-80 py-12 overflow-hidden">
      {/* Section Heading */}
      <p className="text-center text-3xl md:text-5xl font-bold mb-12">
        Kind words from
        <span className="text-blue-200"> satisfied clients</span>
      </p>

      {/* Scrolling Wrapper */}
      <div className="scroll-container">
        <div className="scroll-wrapper">
          {/* Duplicate testimonials to create seamless loop */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="italic mb-2">“{item.quote}”</p>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
