"use client"
import React from 'react'
import Polaroid from './Polaroid'
import { FaArrowLeftLong } from "react-icons/fa6";
import {motion} from "motion/react"

const CaseStudy = () => {
  return (
    <div className='min-h-[100vh] w-[100vw] flex flex-col lg:flex-row overflow-x-hidden'>
        <div className='lg:w-[50%] pt-20 bg-white md:bg-gray-200 flex items-end lg:items-center justify-center lg:justify-end lg:px-[7%] z-0'>
            <motion.div
            initial={{ x: 1000, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{delay: .5, duration: .5}}
            className='scale-140 lg:scale-100'
            >
                <Polaroid bottomPart={false} width={600} height={600} src={"/references/art/majka.webp"}></Polaroid>
            </motion.div>
        </div>
        <div className='min-h-[50vh] lg:w-[50%] py-20 flex items-center justify-center lg:justify-start px-10 lg:px-[5%] bg-white z-10'>
            <motion.div
            initial={{y: 300, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .5, duration: .5}}
            className='max-w-[500px]'>
                <p className='mb-16 flex items-center gap-4 justifycenter cursor-pointer'> <FaArrowLeftLong className='text-blzs-teal'/>
                 Vissza a többi munkára</p>

                <p className='text-3xl font-bold font-sans uppercase mb-1 text-blzs-teal'>Csoportos karikatúra</p>
                <p className='text-gray-400 mb-5'>rajz</p>

                <p className='mb-7'>Több mint 10 éves tapasztalattal rendelkezem, amit a reklámipar számos területén kamatoztatok. Célom, hogy elmélyedjek a tipográfia és tervezőgrafika világában és kreatív művészeti készségeimet ötvözzem a dizájnban.Mindig igyekszem újabb és újabb kihívások elé állítani magam, hogy fejlődjek és minél kreatívabb munkákat hozhassak létre.</p>

                <p className='uppercase text-gray-400'>Készült: 2022.05.31</p>
            </motion.div>
        </div>
    </div>
  )
}

export default CaseStudy