"use client";
import React,{useEffect} from "react";
import Image from "next/image";


// Library imports
import { motion } from "motion/react";

interface PreloaderTypes  {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

// Import of logo parts
import B from "../assets/logo/b.svg";
import L from "../assets/logo/l.svg";
import Z from "../assets/logo/z.svg";
import S from "../assets/logo/s.svg";

const Preloader: React.FC<PreloaderTypes> = ({isVisible,setIsVisible}) => {
  const rectWidth = 300;
  const rectHeight = 440;
  const perimeter = 2 * (rectWidth + rectHeight);

  const animationDuration = 5.5

  const handleAnimationEnd = ()=>{
    sessionStorage.setItem("preloaderWatched", "true");
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
        setIsVisible(false)
    }, animationDuration * 1000)

    return () => clearTimeout(timer)
  }, [])

  if(!isVisible) return null; 

  return (
    <div className="w-[100svw] h-[100svh] fixed z-10 top-0 left-0 bg-white flex items-center justify-center  overflow-hidden">
        {/* Logo Container */}
      <motion.div
        initial={{ scale: 1, translateZ: 0, opacity: 1 }}
        animate={{ scale: 10, translateZ: 800, opacity: 0 }} // Moves toward the viewer
        transition={{ delay: 3.5, duration: 2 }}
        onAnimationComplete={handleAnimationEnd}
        className="relative scale-75 md:scale-100  h-[440px] w-[300px] overflow-hidden"
        style={{ perspective: 1000 }}
      >

        {/* Circle Fill */}
        <motion.div
          className="absolute top-0 left-10 w-10 h-10 bg-blzs-teal rounded-full"
          initial={{ x: -50, y: -50, scale: 0, opacity: 1 }}
          animate={{ scale: 30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        />

        {/* Stroke animation */}
        <motion.svg
          width={rectWidth}
          height={rectHeight}
          viewBox={`0 0 ${rectWidth} ${rectHeight}`}
          className="absolute"
        >
          <motion.rect
            x="0"
            y="0"
            width={rectWidth}
            height={rectHeight}
            fill="transparent"
            stroke="#005A67"
            strokeWidth="10"
            strokeDasharray={perimeter}
            initial={{ strokeDashoffset: perimeter }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0 }}
          />
        </motion.svg>

        {/* SVG LETTER B*/}
        <motion.div
          className="top-0 left-0 absolute"
          initial={{ y: 30, x: -200, scale: 2 }}
          animate={{ y: 30, x: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        >
          <Image src={B} alt="B Logo" width={100} height={100} />
        </motion.div>

        {/* SVG LETTER L */}
        <motion.div
          className="absolute top-0 right-0"
          initial={{ x: 500, y: -25, scale: 2 }}
          animate={{ x: 15, y: -25 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
        >
          <Image src={L} alt="L Logo" width={100} height={100} />
        </motion.div>

        {/*SVG LETTER Z*/}
        <motion.div
          className="absolute bottom-0 left-0"
          initial={{ x: -200, y: -20, scale: 2 }}
          animate={{ x: 10, y: -20 }}
          transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
        >
            <Image src={Z} alt="Z Logo" width={100} height={100}/>
        </motion.div>

        {/* SVG LETTER S */}
        <motion.div
        className="absolute bottom-0 right-0"
        initial={{ x: 200, y: -45, scale: 2 }}
        animate={{ x: -20, y: -45 }}
        transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}
        >
            <Image src={S} alt="S Logo" width={100} height={100}/>
        </motion.div>


      </motion.div>

      {/* Expanding black circle */}
    </div>
  );
};

export default Preloader;
