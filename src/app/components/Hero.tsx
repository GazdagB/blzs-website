import React from 'react'
import { motion } from "framer-motion"; 

import blzsLogo from "../assets/logo/blzs-logo.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='pb-30 min-h-[100svh] flex flex-col items-center justify-center'>
        
        <div className="flex flex-col items-center justify-center mt-35 md:mt-30 text-center mb-20 md:mb-32">
        <Image className="h-[250px] md:h-[330px] lg:h-[500px]" src={blzsLogo} alt="BLZS Logo" />
      </div>

      {/* PageNav container */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-44">
        {/* This entire div is now the hover trigger */}
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          whileHover="hover"
        >
          <motion.span
            className="font-light text-2xl tracking-[5px]"
            variants={{
              hover: { x: 20 } 
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            graphic
          </motion.span>
          <motion.span
            className="text-4xl md:text-6xl font-sans font-bold text-black/80"
            variants={{
              hover: { x: -20 , color: "#005A67"} 
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            DESIGN
          </motion.span>
        </motion.div>

        <motion.div className="flex flex-col items-center cursor-pointer"
        whileHover="hover"
        >
          <motion.span className="font-light text-2xl tracking-[5px]"
          variants={{
            hover: {x:10}
          }}
          transition={{type: "spring", stiffness: 120}}
          >digital</motion.span>
          <motion.span className="text-4xl md:text-6xl font-sans font-bold text-black/80"
          variants={{
            hover: {x:-10, color: "#005A67"}
          }}
          transition={{type: "spring", stiffness: 120}}
          >ART</motion.span>
        </motion.div>

        <motion.div className="flex flex-col items-center cursor-pointer z-[-1]"
        whileHover="hover"
        whileInView="happend"
        >
          <motion.span className="font-light text-2xl tracking-[5px]"
          variants={{
            hover: {x:15},
            
          }}
          transition={{type: "spring", stiffness: 120}}
          >digital</motion.span>
          <motion.span className="text-4xl md:text-6xl font-sans font-bold text-black/80"
          variants={{
            hover: {x:-15, color: "#005A67"}
          }}
          transition={{type: "spring", stiffness: 120}}
          >PRINT</motion.span>
        </motion.div>

       
      </div>

    </div>
  )
}

export default Hero