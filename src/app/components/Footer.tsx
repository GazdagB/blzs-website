import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blzs-teal w-[100vw] text-white flex flex-col justify-between py-5 md:px-20 items-center overflow-hidden'>
        <div className='flex flex-col items-center overflow-hidden py-2'>
            <p><span className='font-bold'>© 2025 Blzs Studio.</span> Minden jog fenntartva.</p>
            <p> Weboldal készítette: <a className='font-bold' href="">Gazdag Studio</a></p>
        </div>
        <p><a href="">Impresszum</a> |<a href=""> Adatkezelés</a></p>
    </footer>
  )
}

export default Footer