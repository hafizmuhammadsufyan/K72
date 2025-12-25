import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center gap-9 mt-7 text-white'>
      <div className='border-2 px-6 rounded-full h-[13vh] hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center'>
        <Link className='text-[5vw] font-bold uppercase' to='/projects'>Projects</Link>
      </div>
      <div className='border-2 px-6 rounded-full h-[13vh] hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center'>
        <Link className='text-[5vw] font-bold uppercase' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText