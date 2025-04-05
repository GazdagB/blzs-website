import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blzs-teal text-white flex justify-between py-5 px-20 items-center'>
        <div className='flex flex-col items-start overflow-hidden'>
            <p><span className='font-bold'>© 2025 Blzs Studio.</span> Minden jog fenntartva.</p>
            <p> Weboldal készítette: <a className='font-bold' href="">Gazdag Studio</a></p>
        </div>
        <p><a href="">Impresszum</a> |<a href=""> Adatkezelés</a></p>
    </footer>
  )
}

export default Footer