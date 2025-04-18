"use client"
import React from 'react'
import Polaroid from './Polaroid'
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion" 
import {  useTransitionRouter } from 'next-view-transitions';
import { CaseStudyType } from '../utils/caseStudies';
import { animate } from '../utils/animationUtils';

interface CaseStudyProps {
  work: CaseStudyType;
}

const CaseStudy: React.FC<CaseStudyProps> = ({work}) => {
    const router = useTransitionRouter();

    const handleBackToPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, destination: string, direction: "left"| "down" | "right") => {
       e.preventDefault(); 
       console.log("Transition triggered:", destination, direction);
       
       // Use the native router.push from next-view-transitions
       router.push(destination, {
         onTransitionReady: () => {
           console.log("Transition ready to animate");
           animate(direction);
         },
       });
     }

  return (
    <div className='min-h-[100vh] w-[100vw] flex flex-col lg:flex-row overflow-x-hidden'>
        <div className='lg:w-[50%] pt-20 bg-white md:bg-gray-200 flex items-end lg:items-center justify-center lg:justify-end lg:px-[7%] z-0'>
            <motion.div
            initial={{ x: 1000, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{delay: .5, duration: .5}}
            className='scale-140 lg:scale-100'
            >
                <Polaroid bottomPart={false} width={600} height={600} src={work.image}></Polaroid>
            </motion.div>
        </div>
        <div className='min-h-[50vh] lg:w-[50%] py-20 flex items-center justify-center lg:justify-start px-10 lg:px-[5%] bg-white z-10'>
            <motion.div
            initial={{y: 300, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .5, duration: .5}}
            className='max-w-[500px]'>
                {/* Use an anchor tag with onClick instead if Link isn't working */}
                <a 
                  onClick={(e)=> handleBackToPage(e, `/${work.type}`, "down")} 
                  href={`/${work.type}`} 
                  className='mb-16 flex items-center gap-4 justifycenter cursor-pointer'
                > 
                  <FaArrowLeftLong className='text-blzs-teal'/>
                  Vissza a többi munkára
                </a>

                <p className='text-3xl font-bold font-sans uppercase mb-1 text-blzs-teal'>{work.title}</p>
                <p className='text-gray-400 mb-5'>{work.subtitle}</p>

                <p className='mb-7'>{work.description}</p>

                <p className='uppercase text-gray-400'>Készült: {work.date}</p>
            </motion.div>
        </div>
    </div>
  )
}

export default CaseStudy