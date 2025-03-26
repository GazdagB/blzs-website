"use client";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 

import blzsLogo from "./assets/logo/blzs-logo.svg";
import Image from "next/image";

export default function Home() {
  const [preloaderWatched, setPreloaderWatched] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const watched = sessionStorage.getItem("preloaderWatched");

    if (watched) {
      setPreloaderWatched(true);
    } else {
      sessionStorage.setItem("preloaderWatched", "true");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      {!preloaderWatched && <Preloader setIsVisible={setIsVisible} isVisible={isVisible} />}

      {/* Logo Container */}
      <div className="flex flex-col items-center justify-center text-center mt-5 md:mt-20 mb-20 md:mb-32">
        <Image className="h-[250px] md:h-[350px] lg:h-[520px]" src={blzsLogo} alt="BLZS Logo" />
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

        <motion.div className="flex flex-col items-center cursor-pointer"
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
  );
}
