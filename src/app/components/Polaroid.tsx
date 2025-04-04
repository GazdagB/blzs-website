import React from 'react'
import Image from 'next/image'

const Polaroid = ({src}) => {
  return (
    <div className='shadow-lg pb-25'>
        <Image width={450} height={450} src={src} alt='Karikatúra rajz'/>
    </div>
  )
}

export default Polaroid