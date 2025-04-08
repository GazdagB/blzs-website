import React, { useEffect } from "react";
import blzs from "../assets/blzs.png";
import { motion } from "framer-motion"; // ✅ Correct import
import Image from "next/image";
import SkillBar from "./SkillBar";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillIconsSoftware = [
  { src: "/icons/illustrator.png", alt: "illustrator ikon", width: 35, height: 35 },
  { src: "/icons/photoshop.png", alt: "photoshop ikon", width: 35, height: 35 },
  { src: "/icons/indesign.png", alt: "indesign ikon", width: 35, height: 35 },
  { src: "/icons/blender.png", alt: "blender ikon", width: 40, height: 40 },
  { src: "/icons/figma.png", alt: "figma ikon", width: 25, height: 25 },
];

const socialIcons = [
  { src: "/icons/instagram.png", alt: "instagram ikon", width: 35, height: 35 },
  { src: "/icons/linkedin.png", alt: "linkedin ikon", width: 35, height: 35 },
  { src: "/icons/tiktok.png", alt: "tiktok ikon", width: 35, height: 35 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // ✅ Stagger animation
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

interface AboutProps {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>; 
}

const About: React.FC<AboutProps> = ({setActiveLink}) => {
  const myRef = useRef<HTMLDivElement>(null)
  const inView = useInView(myRef, {amount: 0.9})

  useEffect(()=>{
    if(inView){
      setActiveLink("about")
    }
  },[inView])

  return (
    <section
    ref={myRef}
    id="about"
      className="w-[100svw] flex items-center justify-center py-20 scroll-offset"
      style={{ backgroundImage: "url(/bg-teal.png)" }}
    >
      <div className="lg:w-[1200px] px-10 flex flex-col md:flex-row md:gap-15 lg:gap-30 justify-center items-center">
        <motion.div className="w-[220px] md:w-[280px] lg:w-[400px] flex items-center justify-center"
        initial={{x: -200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
        >
          <Image className="w-[350px] md:w-[450px] lg:w-[720px]" src={blzs} layout="responsive" width={4} height={5} alt="Balázs fotó" />
        </motion.div>

        {/* ✅ Wrap everything inside a motion.div */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="py-20"
        >
          <motion.h2 variants={itemVariants} className="text-white font-sans text-6xl lg:text-8xl font-black mb-8 text-center md:text-start">
            RÓLAM.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-white text-pretty md:w-96 text-md lg:text-xl md:max-w-2xl">
            Több mint 10 éves tapasztalattal rendelkezem, amit a reklámipar számos területén kamatoztatok. Célom, hogy elmélyedjek a tipográfia és tervezőgrafika világában, és kreatív művészeti készségeimet ötvözzem a dizájnban. Mindig igyekszem újabb és újabb kihívások elé állítani magam, hogy fejlődjek és minél kreatívabb munkákat hozhassak létre.
          </motion.p>

          <motion.div variants={itemVariants}>
            <SkillBar className="flex mt-10 flex-col md:flex-row" skillType="SZOFTVEREK" skillIcons={skillIconsSoftware} />
          </motion.div>

          <motion.div variants={itemVariants} className="h-[1.5px] md:w-full w-[190px] my-6 bg-white"></motion.div>

          <motion.div variants={itemVariants}>
            <SkillBar className="flex flex-col md:flex-row" skillType="SOCIAL MEDIA" skillIcons={socialIcons} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
