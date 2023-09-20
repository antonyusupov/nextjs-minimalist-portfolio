'use client'
import Link from 'next/link'
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className='flex items-center justify-between px-8 py-8 fixed z-50 w-screen'>
      <div className='flex items-center justify-center'>
        <Link href='/'>
          <Image
            src='images/logo.svg'
            height={50}
            width={50}
            alt='logo'
            priority
          />
        </Link>
      </div>
      <div className='flex items-end justify-end relative w-full'>
        <div className='flex items-center justify-center'>
          <div className='hidden md:flex mr-6'>
              <p className='ml-12 text-lg'><Link href='#home'>Home</Link></p>
              <p className='ml-12 text-lg'><Link href='#about'>About</Link></p>
              <p className='ml-12 text-lg'><Link href='#portfolio'>Portfolio</Link></p>
              <p className='ml-12 text-lg'><Link href='#contact'>Contact</Link></p>
          </div>
          <button 
            className='outline-none px-2 py-1 border border-white rounded-xl md:hidden'
            onClick={() => setNavbar(!navbar)}
            >{navbar ? 'Close': 'Menu'}</button>
        </div>
        {navbar ? (
                  <div id='menuLinks' className='absolute top-16 right-1 bg-custom_light_gray px-2 pb-2 z-50 rounded-xl'>
                  <p className='mt-2'><Link href='#home' onClick={() => setNavbar(!navbar)}>Home</Link></p>
                  <p className='mt-2'><Link href='#about' onClick={() => setNavbar(!navbar)}>About</Link></p>
                  <p className='mt-2'><Link href='#portfolio' onClick={() => setNavbar(!navbar)}>Portfolio</Link></p>
                  <p className='mt-2'><Link href='#contact' onClick={() => setNavbar(!navbar)}>Contact</Link></p>
                </div>
        ) : (
          <div>
            
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar