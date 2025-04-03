import React from 'react'
import Image from 'next/image'
import Caricature from "../assets/caricature.png"

const Polaroid = () => {
  return (
    <div className='shadow-lg pb-25'>
        <Image src={Caricature} alt='Karikatúra rajz'/>
    </div>
  )
}

export default Polaroid