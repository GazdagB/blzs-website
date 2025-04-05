import React from 'react';
import TypeHeader from '../components/TypeHeader';
import ImageCaresoul from '../components/ImageCaresoul';

const bodyText = `A tervezőgrafika lényege, hogy vizuális eszközökkel hatékonyan közvetítsen üzeneteket.
A színek, formák, képek és kompozíciók tudatos használatával segít eligazodni, megragadja a figyelmet,
és érzelmi kapcsolatot teremt a nézővel.
A jó tipográfia nem csupán esztétikai elem, hanem az információ átadásának egyik legfontosabb eszköze.`;

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

const Design = () => {
  return (
    <div className='h-[100vh] w-[100vw] overflow-x-hidden bg-white flex flex-col justify-start items-center'>
      <TypeHeader direction="right" bodyText={bodyText} header='design' subHeader='graphic' />
      <ImageCaresoul images={images}></ImageCaresoul>
    </div>
  )
}

export default Design;
