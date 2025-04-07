import React from 'react'
import {motion } from "framer-motion"; 

import blzsLogo from "../assets/logo/blzs-logo.svg";
import Image from "next/image";
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions';
import {animate} from "../utils/animationUtils"
import { useRef, useEffect } from 'react';
import { useInView } from "motion/react";

interface HeroProps {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>; 
}

const Hero: React.FC<HeroProps> = ({setActiveLink}) => {
  const router = useTransitionRouter();

  const myRef = useRef<HTMLDivElement>(null)
  const inView = useInView(myRef, {amount: 0.9})


  const handleChangePage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, destination: string, direction: "left"| "down" | "right")=>{
    e.preventDefault(); 
    router.push(destination , {
      onTransitionReady: () => {
        animate(direction);
      },
    });
  }

  useEffect(()=>{
    
    if(inView){
      setActiveLink("home")
    }
  },[inView])

  return (
    <section className='pb-30 min-h-[100svh] flex flex-col items-center justify-center'
    ref={myRef}
    >
        
        <motion.div className="flex flex-col items-center justify-center mt-35 md:mt-30 text-center mb-20 md:mb-32"
         whileHover="hover"
         initial={{ opacity: 0, y: -100 }} 
         whileInView={{ opacity: 1, y: 0 }} 
         transition={{ duration: 0.75 }}
         viewport={{once: true}}
        >
        <Image className="h-[250px] md:h-[330px] lg:h-[500px]" src={blzsLogo} alt="BLZS Logo" />
      </motion.div>

      {/* PageNav container */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-44">
        
        {/* Design */}
        <Link
        onClick={(e)=>{handleChangePage(e,"/design", "left")}}
        href={"/design"}>
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          whileHover="hover"
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.75 }}
          viewport={{once: true}}
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
        </Link>

        {/* Art */}
        <Link 
        onClick={(e)=>{handleChangePage(e,"/art", "down")}}
        href={"/art"}>
        <motion.div className="flex flex-col items-center cursor-pointer"
         whileHover="hover"
         initial={{ opacity: 0, x: -100 }} 
         whileInView={{ opacity: 1, x: 0 }} 
         transition={{ duration: 0.75 }}
         viewport={{once: true}}
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
        </Link>

        {/*  */}
        <Link 
        onClick={(e)=>{handleChangePage(e,"/print", "right")}}
        href={"/print"}>
        <motion.div className="flex flex-col items-center cursor-pointer"
          whileHover="hover"
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.75 }}
          viewport={{once: true}}
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
          >PRINT</motion.span>
        </motion.div>
        </Link>

       
      </div>

    </section>
  )
}
export default Hero