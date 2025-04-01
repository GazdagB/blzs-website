import React from 'react'
import TypeHeader from '../components/TypeHeader'

const bodyText = "A digitális nyomtatás gazdaságos kis példányszámú nyomatok esetén, például címkék, egyedi kiadványok és dekorációs elemek gyártásánál. Különböző papírokkal és fóliákkal is dolgozunk."

const Print = () => {
  return (
    <div className='bg-white h-[100vh] w-[100vw] flex items-center justify-center'>
      <TypeHeader direction="left" header='print' subHeader='digital' bodyText={bodyText}/>
    </div>
  )
}

export default Print    