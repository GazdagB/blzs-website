import React from 'react'
import {motion } from "framer-motion"; 

import blzsLogo from "../assets/logo/blzs-logo.svg";
import Image from "next/image";
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions';
import {animateRight,animateDown,animateLeft} from "../utils/animationUtils"

const Hero = () => {
  const router = useTransitionRouter();

  return (
    <div className='pb-30 min-h-[100svh] flex flex-col items-center justify-center'>
        
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
        onClick={(e )=>{
          e.preventDefault();
          router.push('/design',{
            onTransitionReady: animateLeft
          })
        }}
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
        onClick={(e)=>{
          e.preventDefault()
          router.push("/art",{
            onTransitionReady: animateDown
          })
        }}
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
        onClick={(e)=>{
          e.preventDefault();
          router.push("/print", {
            onTransitionReady: animateRight
          }); 
        }}
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

    </div>
  )
}
export default Hero