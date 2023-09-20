import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Image src="/Logo.png" width={150} height={50} />
        <div className='navbar-links'>
            <Link className='navbar-link' href="/">Home</Link>
            <Link className='navbar-link' href="/">Services</Link>
            <Link className='navbar-link' href="/">About</Link>
            <Link className='navbar-link' href="/">Clinical Test</Link>
            <Link className='navbar-link' href="/">Knowledge Center</Link>
            <Link className='navbar-link' href="/">Contact Us</Link>
        </div>
        <div className='navbar-call'> 
            <button className='primary-btn'>
            <Image className='call-icon' src="/phone.png" width={15} height={15} />
                +371 2933096
            </button>
        </div>
    </div>
  )
}

export default Navbar

