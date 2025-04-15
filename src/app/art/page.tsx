import React from 'react'
import TypeHeader from '../components/TypeHeader'
import BackToHome from '../components/BackToHome'
import ImageCarousel from '../components/ImageCaresoul'
import caseStudies from '../utils/caseStudies'; 

const bodyText = "A digitális művészet végtelen lehetőségeket rejt magában. Szórakoztató, mégis művészi alkotások,a modern technológia eszközeit ötvözöm, hogy egyedi, személyre szabott alkotásokat hozzak létre.Legyen szó humoros karikatúráról, amely megragadjaegy személy vagy helyzet jellegzetességeit, vagy illusztrációról, amely vizuálisan mesél el egy történetet. Minden egyes képem célja, hogy érzelmeket közvetítsen."


const Art = () => {
  return (
    <div className='min-h-[100vh] w-[100vw] bg-white flex flex-col justify-between items-center pb-10 h-full'>
      <TypeHeader direction="left" bodyText={bodyText} subHeader={"digital"} header={"art"} />
      <ImageCarousel type='art' images={caseStudies}></ImageCarousel>
      <BackToHome animationDirection='up'/>
    </div>
  )
}

export default Art