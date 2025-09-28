"use client";
import React from "react";
import Image from "next/image";
import { socialMedia } from "@/constants/constant";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-6 sm:px-8 lg:px-50 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      {/* Left side - Contact details */}
      <div className="space-y-1 text-center sm:text-left">
        <p className="text-sm">Copyright &copy; 2025 Shalu Kumari</p>
        <p className="text-sm">Email: shalukumari93129@gmail.com</p>
        <p className="text-sm">Phone: +91 6200457091</p>
      </div>

      {/* Right side - Social Icons */}
      <div className="flex space-x-6  text-sm">
        {socialMedia.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Image
              src={social.img}
              alt={`social-${social.id}`}
              width={20}
              height={20}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
