"use client";

import React, {useEffect, useState } from "react";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { CaseStudyType } from "../utils/caseStudies";
import { useTransitionRouter } from 'next-view-transitions';
import { animate } from "../utils/animationUtils";

interface caresoulTypes {
  images: CaseStudyType[],
  type: "design" | "art" | "print"
}

const ImageCarousel: React.FC<caresoulTypes> = ({images, type}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    state: false,
    direction: "left",
  });
  const [polaroidX, setPolaroidX] = useState(150);

  let isType = false;

  images.forEach((image) => {
    if (image.type === type) {
      isType = true;
    }
  })


  
  const router = useTransitionRouter(); 

  const totalImages = images.length;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, destination: string, direction: "left"| "down" | "right") => {
    e.preventDefault();
    console.log("Navigating to:", destination);
    
    
    // Use standard anchor navigation with transition
    router.push(destination, {
      onTransitionReady: () => {
                 console.log("Transition ready to animate");
                 animate(direction);
               },
    });
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    // Define the handler
    const handleResize = () => {
      const width = window.innerWidth;
    
      if (width > 1200) {
        setPolaroidX(380);
      } else if (width > 1024) {
        setPolaroidX(320);
      } else if (width > 768) {
        setPolaroidX(250);
      } else {
        setPolaroidX(180);
      }
    };

    handleResize();
    
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  if (!isType) return null; // If no images of the selected type, return null

  return (
    <div
      className="relative w-full h-[500px] mt-20 max-w-[1200px] min-h-[450px] sm:min-h-[550px] md:min-h-[700px]"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Cursor */}
      <motion.div
        className="h-8 hidden lg:flex w-8 z-20 items-center justify-center bg-blzs-teal rounded-full absolute pointer-events-none text-white"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isVisible.state ? 1 : 0,
          scale: isVisible.state ? 4 : 0,
          transition: {type: "spring", damping: 50, stiffness: 1000}
        }}
      >
        {isVisible.direction === "right" ? <FaArrowRight /> : <FaArrowLeft />}
      </motion.div>
      
      {/* Left Edge Button */}
      <div
        className="h-full w-[30%] top-0 left-0 absolute z-20 cursor-pointer"
        onClick={prevImage}
        onMouseEnter={() => setIsVisible({ state: true, direction: "left" })}
        onMouseLeave={() => setIsVisible({ state: false, direction: "left" })}
      ></div>
      
      {/* Image Container */}
      <div className="flex overflow-hidden justify-center items-center h-full relative">
    
        {images.map((image, index) => {
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
            xPosition = polaroidX;
          } else if (indexDiff === totalImages - 1) {
            // Left side image
            xPosition = -polaroidX;
          } else {
            // Images that should be off-screen
            xPosition = indexDiff < totalImages / 2 ? -1000 : 1000;
          }

          // Scale and rotation based on whether it's the center image
          const isCenter = indexDiff === 0;
          const scale = isCenter ? 1 : 0.5;
          const rotation = isCenter ? 0 : indexDiff === 1 ? 5 : -5;
          
          if(image.type !== type) return null; // Filter images based on type

          return (
              <motion.div
              key={`${image.slug}`}
              onClick={(e) => handleImageClick(e, `/${image.type}/${image.slug}`, "down")}
                className="absolute cursor-pointer"
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
                <Polaroid width={450} height={450} src={image.image} />
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

      <div className="lg:hidden flex items-center justify-center gap-5 text-4xl text-blzs-teal">
        <FaArrowLeft onClick={prevImage} className="cursor-pointer"></FaArrowLeft>
        <FaArrowRight onClick={nextImage} className="cursor-pointer"></FaArrowRight>
      </div>
    </div>
  );
};

export default ImageCarousel;