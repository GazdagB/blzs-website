import React from 'react'
import Image from 'next/image'

interface PolaroidTypes {
  src: string,
  width: number,
  height: number
  bottomPart? : boolean
}

const Polaroid: React.FC<PolaroidTypes> = ({src,width, height, bottomPart = true}) => {
  return (
    <div className={`shadow-lg ${bottomPart ? "pb-25" : ""} scale-75 sm:scale-90 lg:scale-100 bg-white`}>
        <Image width={width} height={height} src={src} alt='Karikatúra rajz'/>
    </div>
  )
}

export default Polaroid