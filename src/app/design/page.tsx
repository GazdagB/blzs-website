import React from 'react';
import TypeHeader from '../components/TypeHeader';
import ImageCaresoul from '../components/ImageCaresoul';
import BackToHome from '../components/BackToHome';
import caseStudies from '../utils/caseStudies';

const bodyText = `A tervezőgrafika lényege, hogy vizuális eszközökkel hatékonyan közvetítsen üzeneteket.
A színek, formák, képek és kompozíciók tudatos használatával segít eligazodni, megragadja a figyelmet,
és érzelmi kapcsolatot teremt a nézővel.
A jó tipográfia nem csupán esztétikai elem, hanem az információ átadásának egyik legfontosabb eszköze.`;


const Design = () => {
  return (
    <div className='min-h-[100vh] w-[100vw]  bg-white flex flex-col justify-between items-center pb-10 h-full'>
      <TypeHeader direction="right" bodyText={bodyText} header='design' subHeader='graphic' />
      <ImageCaresoul type='design' images={caseStudies}></ImageCaresoul>
      <BackToHome animationDirection='right'/>
    </div>
  )
}

export default Design;
