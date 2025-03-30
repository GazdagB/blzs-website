"use client";

import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { spring } from "motion";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [flyOutOpen, setFlyOutOpen] = useState(false)

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when component unmounts
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className="text-blzs-teal font-bold md:rounded-md max-w-[1250px] bg-white/80 backdrop-blur-lg py-7 z-10 w-full flex fixed top-0 right-[50%] translate-x-[50%] items-center justify-between px-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="logo font-sans flex items-center jusitfy-center gap-2">
          KOVÁCS BALÁZS <br className="md:hidden" />{" "}
          <span className="hidden md:block">-</span> GRAFIKUS.
        </div>

        <div className="block lg:hidden">
          <Hamburger
            rounded
            color="#005A67"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>

        <ul className="hidden lg:flex items-center gap-7">

          <div className="relative">
            <li onClick={()=>{setFlyOutOpen(prev => !prev)}} className="flex items-center justify-center gap-2 cursor-pointer">
            <FaCaretDown className={`${flyOutOpen ? "rotate-180": ""} transition-all duration-300`} />
            SZAKTERÜLET</li>

            <AnimatePresence>
            {flyOutOpen && (
              <motion.div
              initial={{y: -20, opacity: 0, height: 0}}
              animate={{y:0, opacity: 1, height: 200}}
              exit={{y: -20, opacity: 0, height: 0}}
              className="bg-white flex flex-col items-center justify-center backdrop-blur-lg shadow-md rounded-md h-20 w-50 absolute top-15">
                <div>
                  <p className="cursor-pointer">GRAPHIC DESIGN</p>
                  <div className="h-[2px] w-full bg-blzs-teal my-2"></div>
                  <p className="cursor-pointer">DIGITAL ART</p>
                  <div className="h-[2px] w-full bg-blzs-teal my-2"></div>
                  <p className="cursor-pointer">DIGITAL PRINT</p>
                </div>
              </motion.div>)}
            </AnimatePresence>
          </div>

           {/* divider */}
           <div className="h-5 w-0.5 bg-gray-500"></div>

          <li className="cursor-pointer">RÓLAM</li>

          {/* divider */}
          <div className="h-5 w-0.5 bg-gray-500"></div>

          <li className="cursor-pointer">KAPCSOLAT</li>

          {/* divider */}
          <div className="h-5 w-0.5 bg-gray-500"></div>

          <li className="cursor-pointer" >BLOG</li>
        </ul>
      </motion.nav>

        {/* Menu Navbar Animated  */}
      <motion.div
        className="lg:hidden w-[100svw] flex flex-col items-center justify-center h-[100vh] fixed top-0 right-0 z-0 bg-white"
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: 0 } : {}}
        transition={{duration: .7 , type: "spring"}}
      >
        <ul className="text-xl text-blzs-teal flex flex-col gap-2.5 justify-center items-center">
          <li>RÓLAM</li>
          <li>KAPCSOLAT</li>
          <li>BLOG</li>
        </ul>
        <div className="h-[1.5px] w-40 bg-blzs-teal my-5"></div>
        <ul className="text-xl text-blzs-teal flex flex-col gap-2.5 justify-center items-center mb-10">
          <li>DESIGN</li>
          <li>ART</li>
          <li>PRINT</li>
        </ul>

        <div className="flex items-center gap-4">
        <Image src={"/icons/instagram-teal.png"} width={30} height={30} alt="TikTok Icon"/>
        <Image src={"/icons/linkedin-teal.png"} width={30} height={30} alt="TikTok Icon"/>
        <Image src={"/icons/tiktok-teal.png"} width={30} height={30} alt="TikTok Icon"/>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
