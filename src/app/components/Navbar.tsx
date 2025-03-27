"use client";

import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { motion } from "motion/react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  
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
        className="text-blzs-teal font-bold md:rounded-md max-w-[1140px] bg-white/80 backdrop-blur-lg py-7 z-10 w-full flex fixed top-0 right-[50%] translate-x-[50%] items-center justify-between px-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="logo font-sans flex items-center jusitfy-center gap-2">
          KOVÁCS BALÁZS <br className="md:hidden" />{" "}
          <span className="hidden md:block">-</span> GRAFIKUS.
        </div>

        <div className="block md:hidden">
          <Hamburger
            rounded
            color="#005A67"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>

        <ul className="hidden md:flex items-center gap-7">
          <li>RÓLAM</li>

          {/* divider */}
          <div className="h-5 w-0.5 bg-gray-500"></div>

          <li>KAPCSOLAT</li>

          {/* divider */}
          <div className="h-5 w-0.5 bg-gray-500"></div>

          <li>BLOG</li>
        </ul>
      </motion.nav>
      <motion.div
        className="md:hidden w-[100svw] flex flex-col items-center justify-center h-[100svh] fixed top-0 right-0 z-0 bg-white"
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: 0 } : {}}
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
