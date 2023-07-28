import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
       <footer>
        <div>
        <Link to='/' className='links'>Home</Link>
        <Link to='/about-us' className='links'>About</Link>
        <Link to='/contact-us' className='links'>Contact</Link>
        <Link to='/posts' className='links'>Posts</Link>
        </div>
        <Link to='/login' className='links'>Login</Link>
        <div>
        <Link to='/' className='links'>Home</Link>
        <Link to='/about-us' className='links'>About</Link>
        <Link to='/contact-us' className='links'>Contact</Link>
        <Link to='/posts' className='links'>Posts</Link>
        </div>
        <Link to='/login' className='links'>Login</Link>
        <div>
        <Link to='/' className='links'>Home</Link>
        <Link to='/about-us' className='links'>About</Link>
        <Link to='/contact-us' className='links'>Contact</Link>
        <Link to='/posts' className='links'>Posts</Link>
        </div>
        <Link to='/login' className='links'>Login</Link>
    </footer>  
    </>
  )
}

export default Footer