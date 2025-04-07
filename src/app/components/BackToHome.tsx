'use client'
import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { animateDown, animateLeft, animateRight, animateUp } from '../utils/animationUtils';
import { useTransitionRouter } from 'next-view-transitions';

type animationDirection = "left" | "down" | "right" | "up"

interface backToHomeType {
    animationDirection: animationDirection
}

const BackToHome : React.FC<backToHomeType> = ({animationDirection}) => {
  const [hovered, setHovered] = useState(false);

  const router = useTransitionRouter(); 

  const getAnimation = (direction: animationDirection) => {
    switch (direction) {
      case 'left':
        return animateLeft;
      case 'down':
        return animateDown;
      case 'right':
        return animateRight;
      case 'up': 
        return animateUp
      default:
        return () => {}; // default case if no valid direction is passed
    }
  };


  return (
    <Link
    href={"/"} 
     onClick={(e )=>{
              e.preventDefault();
              router.push("/",{
                onTransitionReady: getAnimation(animationDirection)
              })
            }}
    className="sticky bottom-12 right-12 z-20 w-[100vw] flex items-center justify-end px-5 md:px-10 pointer-events-none">
      <div >
        {/* Button container */}
        <motion.div
          className="bg-blzs-teal h-20 w-20 text-white text-4xl rounded-full flex items-center justify-center shadow-xl cursor-pointer pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <FaHome />
        </motion.div>
      </div>

      {/* Slide-out text */}
      <motion.div
        className="absolute bottom-6 right-24 text-white py-2 px-5 bg-blzs-teal rounded-full z-0 pointer-events-none"
        initial={{ opacity: 0, x: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? -50 : 100,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Viassza a kezdőlapra
      </motion.div>
    </Link>
  );
}

export default BackToHome;