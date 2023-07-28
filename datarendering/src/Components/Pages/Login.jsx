import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <h1>Login page</h1>
      <div className='login-container'>
         <div>
          <label htmlFor="">Username</label>
         <input type="text" placeholder='enter username' />
         <label>Password</label>
         <input type='password' placeholder='enter password'/>
         <button><Link to='/'>Login</Link></button>
         </div>
      </div>
    </>
  )
}

export default Login