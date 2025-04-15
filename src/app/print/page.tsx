import React from 'react'
import TypeHeader from '../components/TypeHeader'
import BackToHome from '../components/BackToHome'
import ImageCarousel from '../components/ImageCaresoul'
import caseStudies from '../utils/caseStudies'

const bodyText = "A digitális nyomtatás gazdaságos kis példányszámú nyomatok esetén, például címkék, egyedi kiadványok és dekorációs elemek gyártásánál. Különböző papírokkal és fóliákkal is dolgozunk."

const Print = () => {
  return (
    <div className='min-h-[100vh] w-[100vw]  bg-white flex flex-col justify-between items-center pb-10 h-full'>
      <TypeHeader direction="left" header='print' subHeader='digital' bodyText={bodyText}/>
      <ImageCarousel type='print' images={caseStudies}></ImageCarousel>
      <BackToHome animationDirection='left'/>
    </div>
  )
}

export default Print    