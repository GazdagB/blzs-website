"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const images = [
  "/references/art/majka.webp",
  "/references/art/marics.webp",
  "/references/art/csalad.webp",
  "/references/art/fa.webp",
  "/references/art/mikrofon.webp",
  "/references/art/wedding.webp",
  "/references/art/selfportraits.webp",
  "/references/art/tilla.webp",
];

const ImageCarousel = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    state: false,
    direction: "left",
  });

  const totalImages = images.length;

  const handleMouseMove = (e : React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div
      className="relative w-full mt-20 max-w-[1200px] min-h-[700px]"
      onMouseMove={handleMouseMove}
    >
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
        {isVisible.direction === "right" ? <FaArrowRight /> : <FaArrowLeft />}
      </motion.div>

      {/* Left Edge Button */}
      <div
        className="h-full w-[30%] top-0 left-0 absolute z-10 cursor-pointer"
        onClick={prevImage}
        onMouseEnter={() => setIsVisible({ state: true, direction: "left" })}
        onMouseLeave={() => setIsVisible({ state: false, direction: "left" })}
      ></div>

      {/* Image Container */}
      <div className="flex overflow-x-hidden justify-center items-center h-full relative">
        {images.map((src, index) => {
          // Calculate the position relative to the current index
          const indexDiff = (index - currentIndex + totalImages) % totalImages;

          // Determine if this image should be visible
          // Only show current image and one image on each side
          const isVisible =
            indexDiff === 0 || indexDiff === 1 || indexDiff === totalImages - 1;

          // Position images: left (-400px), center (0), right (400px)
          let xPosition;
          if (indexDiff === 0) {
            // Current image - center
            xPosition = 0;
          } else if (indexDiff === 1) {
            // Right side image
            xPosition = 400;
          } else if (indexDiff === totalImages - 1) {
            // Left side image
            xPosition = -400;
          } else {
            // Images that should be off-screen
            xPosition = indexDiff < totalImages / 2 ? -1000 : 1000;
          }

          // Scale and rotation based on whether it's the center image
          const isCenter = indexDiff === 0;
          const scale = isCenter ? 1 : 0.5;
          const rotation = isCenter ? 0 : indexDiff === 1 ? 5 : -5;

          return (
            <motion.div
              key={`${src}-${index}`}
              className="absolute"
              style={{ zIndex: isCenter ? 10 : 1 }}
              initial={{
                opacity: isVisible ? 1 : 0,
                x: xPosition,
                scale,
                rotate: rotation,
              }}
              animate={{
                x: xPosition,
                scale,
                rotate: rotation,
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Polaroid src={src} />
            </motion.div>
          );
        })}
      </div>

      {/* Right Edge Button */}
      <div
        className="h-full w-[30%] top-0 right-0 cursor-pointer absolute z-10"
        onClick={nextImage}
        onMouseEnter={() => setIsVisible({ state: true, direction: "right" })}
        onMouseLeave={() => setIsVisible({ state: false, direction: "right" })}
      ></div>
    </div>
  );
};

export default ImageCarousel;
