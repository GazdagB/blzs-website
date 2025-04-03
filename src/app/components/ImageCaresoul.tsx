"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";


const ImageCaresoul = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({
    state: false,
    direction: "left"
  });



  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      {/* Animated Cursor */}
      <motion.div
        className="h-8 w-8 z-20 flex items-center justify-center bg-blzs-teal rounded-full absolute pointer-events-none text-white"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isVisible.state ? 1 : 0,
          scale: isVisible.state ? 4 : 0,
        }}
        
      >
        {isVisible.direction === "right" ? <FaArrowRight />
: <FaArrowLeft />
}
      </motion.div>

      {/* Left Edge Button */}
      <div
        className="h-full w-[30%] top-0 left-0 absolute z-10 cursor-pointer"
        onMouseEnter={() => setIsVisible({state: true,direction: "left"})}
        onMouseLeave={() => setIsVisible({state: false, direction: "left"})}
      ></div>

      {/* Image Container */}
      <div className="flex">
        <div className="scale-75 rotate-[-5deg]">
          <Polaroid />
        </div>
        <Polaroid />
        <div className="scale-75 rotate-5">
          <Polaroid />
        </div>
      </div>

      {/* Right Edge Button */}
      <div
        className="h-full w-[30%] top-0 right-0 cursor-pointer absolute"
        onMouseEnter={() => setIsVisible({state: true, direction: "right"})}
        onMouseLeave={() => setIsVisible({state: false, direction: "right"})}
      ></div>
    </div>
  );
};

export default ImageCaresoul;
