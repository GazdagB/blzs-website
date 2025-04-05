import React from 'react'
import Image from 'next/image'

interface PolaroidTypes {
  src: string
}

const Polaroid: React.FC<PolaroidTypes> = ({src}) => {
  return (
    <div className='shadow-lg pb-25 scale-75 sm:scale-90 lg:scale-100'>
        <Image width={450} height={450} src={src} alt='Karikatúra rajz'/>
    </div>
  )
}

export default Polaroid