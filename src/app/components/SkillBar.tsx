import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

interface SkillIcon {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SkillBarTypes {
  skillType: string;
  skillIcons: SkillIcon[];
  className: string;
}

const SkillBar: React.FC<SkillBarTypes> = ({ skillType, skillIcons, className }) => {
  // Parent container variants with staggerChildren
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delay: 1 // Delay between each child's animation
      },
    },
  };

  // Child variants for each icon
  const itemVariants = {
    hidden: { opacity: 0, x: 30 }, // Initially, icons are off-screen to the right and invisible
    show: {
      opacity: 1,
      x: 0, // Move to original position (no offset)
      transition: { duration: 0.5,},
    },
  };

  return (
    <div className={className}>
      <p className="text-white text-xl me-5">{skillType}:</p>
      <motion.div
        className="flex items-center mt-4 md:mt-0 md:justify-center gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >
        {skillIcons.map((icon: SkillIcon, index: number) => (
          <motion.div
            key={index}
            variants={{
              ...itemVariants,
              show: {
                ...itemVariants.show,
                transition: { ...itemVariants.show.transition, delay: index * 0.2 }, // Add delay based on the index
              },
            }}
          >
            <Image src={icon.src} width={icon.width} height={icon.height} alt={icon.alt} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillBar;
