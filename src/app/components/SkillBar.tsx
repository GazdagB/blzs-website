import React from 'react'
import Image from 'next/image'


interface SkillIcon{
    src: string,
    alt: string,
    width: number,
    height: number
}

interface SkillBarTypes {
    skillType: string,
    skillIcons: SkillIcon[],
    className: string
}

const SkillBar : React.FC<SkillBarTypes> = ({skillType, skillIcons, className}) => {
  return (
    <div className={className}>
        <p className='text-white text-xl me-5'>{skillType}:</p>
        <div className='flex items-center mt-4 md:mt-0 md:justify-center gap-5'>
            {skillIcons.map((icon: SkillIcon , id: number)=>{
                return (<Image key={id} src={icon.src} width={icon.width} height={icon.height} alt={icon.alt}/>)
            })}
        </div>
    </div>
  )
}

export default SkillBar 