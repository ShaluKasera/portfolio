"use client"; // ✅ Add this at the very top
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center px-10 md:px-16 lg:px-32 xl:px-80 py-12 text-center">
      <p className="text-3xl md:text-5xl font-bold mb-6">
        Ready to take your{" "}
        <span className="text-blue-200">digital presence</span> to the next
        level?
      </p>
      <p className="mb-6">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      <MagicButton
        title="My Resume"
        icon={<FaLocationArrow />}
        position="right"
        handleClick={() =>
          window.open(
            "https://drive.google.com/file/d/11OEzR09-070ENS7iXUTNrYA5-OUURiLy/view?usp=sharing",
            "_blank"
          )
        }
      />
    </section>
  );
};

export default Contact;
