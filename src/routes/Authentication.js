import React from 'react'
import '../styles/authscreen.css'
import { Link } from 'react-router-dom'

function Authentication() {
  return (
    <div className='page-screen auth-screen'>
        <div className='auth-container bg-gray-50 shadow-md w-1/2 h-1/2 p-3 flex flex-col items-center justify-center gap-5'>
            <h1 className='mb-10 text-3xl text-black text-center font-bold flex items-center gap-2'>Login to <img style={{ height: 40 }} src={require('../assets/smallogo.png')} alt="" /> account</h1>
            <input className='w-4/5 p-3' type="text" placeholder='Enter your email' />
            <input className='w-4/5 p-3' type="password" placeholder='Enter your password' />
            <Link to='/dashboard' className='w-4/5 p-3 bg-black text-white'>Login</Link>
        </div>
    </div>
  )
}

export default Authentication