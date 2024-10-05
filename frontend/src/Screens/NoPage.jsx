import React from 'react'
import img from '../images/nopage.png'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-yellow-50'> 
      <img src={img} alt="page not found" width="400px"/>
      <Link to='/' className='p-2 px-4 bg-blue-800 mt-4 rounded-md text-white'> Back to Home Page</Link>
    </div>
  )
}

export default NoPage