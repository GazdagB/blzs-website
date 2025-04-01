import React from 'react'
import TypeHeader from '../components/TypeHeader'

const bodyText = "A digitális művészet végtelen lehetőségeket rejt magában. Szórakoztató, mégis művészi alkotások,a modern technológia eszközeit ötvözöm, hogy egyedi, személyre szabott alkotásokat hozzak létre.Legyen szó humoros karikatúráról, amely megragadjaegy személy vagy helyzet jellegzetességeit, vagy illusztrációról, amely vizuálisan mesél el egy történetet. Minden egyes képem célja, hogy érzelmeket közvetítsen."

const Art = () => {
  return (
    <div className='bg-white h-[100vh] w-[100vw] flex items-center justify-center'>
      <TypeHeader direction="left" bodyText={bodyText} subHeader={"digital"} header={"art"} />
    </div>
  )
}

export default Art