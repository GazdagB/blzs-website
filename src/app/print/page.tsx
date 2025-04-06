import React from 'react'
import TypeHeader from '../components/TypeHeader'
import BackToHome from '../components/BackToHome'
import ImageCarousel from '../components/ImageCaresoul'

const bodyText = "A digitális nyomtatás gazdaságos kis példányszámú nyomatok esetén, például címkék, egyedi kiadványok és dekorációs elemek gyártásánál. Különböző papírokkal és fóliákkal is dolgozunk."

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

const Print = () => {
  return (
    <div className='min-h-[100vh] w-[100vw]  bg-white flex flex-col justify-start items-center pb-10 h-full'>
      <TypeHeader direction="left" header='print' subHeader='digital' bodyText={bodyText}/>
      <ImageCarousel images={images}></ImageCarousel>
      <BackToHome animationDirection='left'/>
    </div>
  )
}

export default Print    