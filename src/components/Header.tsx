"use client";
import React from "react";
import { navLinks } from "@/constants/constant";

const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-blue-500/20 border border-gray-300 backdrop-blur-md px-2 lg:px-40 py-2 sm:py-3 rounded-2xl shadow-md z-50 w-[80%] sm:w-auto">
      <ul className="flex gap-2 sm:gap-6 lg:gap-8 justify-center items-center flex-wrap">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-white font-medium text-xs sm:text-sm lg:text-base hover:text-blue-300 transition-colors cursor-pointer"
            onClick={() => handleScroll(link.href.substring(1))} // remove '#' before id
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
