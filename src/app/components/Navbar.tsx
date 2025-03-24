'use client'

import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import {motion} from "motion/react"


const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false); 

  return (
    <motion.nav className='text-blzs-teal font-bold max-w-[1140px] py-7 w-full flex items-center justify-between px-10'
    initial={{y: -100, opacity: 0}}
    animate={{ y: 0, opacity: 1}}
    
    >
       <div className='logo font-sans flex items-center jusitfy-center gap-2'>KOVÁCS BALÁZS <br className='md:hidden' /> <span className='hidden md:block'>-</span> GRAFIKUS.</div> 

       <div className='block md:hidden'>
           <Hamburger rounded color='#005A67' toggled={isOpen} toggle={setIsOpen} />
       </div>

       <ul className='hidden md:flex items-center gap-7'>
            <li>RÓLAM</li>

            {/* divider */}
            <div className='h-5 w-0.5 bg-gray-500'></div>

            <li>KAPCSOLAT</li>

            {/* divider */}
            <div className='h-5 w-0.5 bg-gray-500'></div>

            <li>BLOG</li>
       </ul>
    </motion.nav>
  )
}

export default Navbar