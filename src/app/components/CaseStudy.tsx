"use client"
import React from 'react'
import Polaroid from './Polaroid'
import { FaArrowLeftLong } from "react-icons/fa6";
import {motion} from "motion/react"

const CaseStudy = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex'>
        <div className='h-full w-[50%] bg-gray-200 flex items-center justify-end px-[7%] z-0'>
            <motion.div
            initial={{ x: 1000, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{delay: .5, duration: .5}}
            >
                <Polaroid width={600} height={600} src={"/references/art/majka.webp"}></Polaroid>
            </motion.div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-start ps-[5%] bg-white z-10'>
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