import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <div>
        <Link to='/' className='links'>Home</Link>
        <Link to='/about-us' className='links'>About</Link>
        <Link to='/contact-us' className='links'>Contact</Link>
        <Link to='/posts' className='links'>Posts</Link>
        </div>
        <Link to='/login' className='links'>Login</Link>
    </nav>
        
    </>
  )
}

export default Navbar