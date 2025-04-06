import React from 'react'
import TypeHeader from '../components/TypeHeader'
import BackToHome from '../components/BackToHome'
import ImageCarousel from '../components/ImageCaresoul'

const bodyText = "A digitális művészet végtelen lehetőségeket rejt magában. Szórakoztató, mégis művészi alkotások,a modern technológia eszközeit ötvözöm, hogy egyedi, személyre szabott alkotásokat hozzak létre.Legyen szó humoros karikatúráról, amely megragadjaegy személy vagy helyzet jellegzetességeit, vagy illusztrációról, amely vizuálisan mesél el egy történetet. Minden egyes képem célja, hogy érzelmeket közvetítsen."

const images = [
  "/references/art/majka.webp",
  "/references/art/marics.webp",
  "/references/art/csalad.webp",
  "/references/art/fa.webp",
  "/references/art/mikrofon.webp",
  "/references/art/wedding.webp",
  "/references/art/selfportraits.webp",
  "/references/art/tilla.webp",
];

const Art = () => {
  return (
    <div className='min-h-[100vh] w-[100vw] bg-white flex flex-col justify-start items-center pb-10 h-full'>
      <TypeHeader direction="left" bodyText={bodyText} subHeader={"digital"} header={"art"} />
      <ImageCarousel images={images}></ImageCarousel>
      <BackToHome animationDirection='up'/>
    </div>
  )
}

export default Art