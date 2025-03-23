'use client'

import React, { useState } from 'react'
import Hamburger from 'hamburger-react'


const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className='text-blzs-teal font-bold max-w-[1140px] py-7 w-full flex items-center justify-between px-10'>
       <div className='logo font-sans flex items-center jusitfy-center gap-2'>KOVÁCS BALÁZS <br className='md:hidden' /> <span className='hidden md:block'>-</span> GRAFIKUS.</div> 

       <div className='block md:hidden'>
           <Hamburger color='#005A67' toggled={isOpen} toggle={setIsOpen} />
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
    </nav>
  )
}

export default Navbar