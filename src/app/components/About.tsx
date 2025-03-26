import React from "react";
import blzs from "../assets/blzs.png";

import Image from "next/image";
import SkillBar from "./SkillBar";

const skillIconsSoftware = [
  {
    src: "/icons/illustrator.png",
    alt: "illustrator ikon",
    width: 35,
    height:35
  },
  {
    src: "/icons/photoshop.png",
    alt: "photoshop ikon",
    width: 35,
    height:35
  },
  {
    src: "/icons/indesign.png",
    alt: "indesign ikon",
    width: 35,
    height:35
  },
  {
    src: "/icons/blender.png",
    alt: "blender ikon",
    width: 40,
    height: 40
  },
  {
    src: "/icons/figma.png",
    alt: "figma ikon",
    width: 25,
    height:25
  },
];

const socialIcons = [

    {
        src: "/icons/instagram.png",
        alt: "instagram ikon",
        width: 35,
        height: 35
    },

    {
        src: "/icons/linkedin.png",
        alt: "linkedin ikon",
        width: 35,
        height: 35
    },

    {
        src: "/icons/tiktok.png",
        alt: "tiktok ikon",
        width: 35,
        height: 35
    },

   
]

const About = () => {
  return (
    <section
      className="w-[100svw] flex items-center justify-center py-20"
      style={{ backgroundImage: "url(/bg-teal.png)" }}
    >
      <div className="lg:w-[1200px] px-10 flex flex-col md:flex-row md:gap-15 lg:gap-30 justify-center items-center">
        <div className="w-[220px] md:w-[280px] lg:w-[400px] flex items-center justify-center">
            <Image className="w-[350px] md:w-[450px] lg:w-[720px] " src={blzs}  layout="responsive" 
              width={4} 
              height={5}  alt="Balázs fotó" />
        </div>

        <div className="py-20">
          <h2 className="text-white font-sans text-6xl lg:text-8xl font-black mb-8 text-center md:text-start">
            RÓLAM.
          </h2>
          <p className="text-white md:w-96 text-pretty text-md lg:text-xl md:max-w-2xl">
            Több mint 10 éves tapasztalattal rendelkezem, amit a reklámipar
            számos területén kamatoztatok. Célom, hogy elmélyedjek a tipográfia
            és tervezőgrafika világában és kreatív művészeti készségeimet
            ötvözzem a dizájnban.Mindig igyekszem újabb és újabb kihívások elé
            állítani magam, hogy fejlődjek és minél kreatívabb munkákat
            hozhassak létre.
          </p>
          <SkillBar className="flex mt-10 flex-col  md:flex-row" skillType="SZOFTVEREK" skillIcons={skillIconsSoftware} />
          <div className="h-[1.5px] md:w-full w-[190px]  my-6 bg-white"></div>
          <SkillBar className="flex flex-col md:flex-row" skillType="SOCIAL MEDIA" skillIcons={socialIcons} />
        </div>
      </div>
    </section>
  );
};

export default About;
