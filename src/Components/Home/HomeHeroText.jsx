import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='text-center py-5 text-[10vw] font-[font300] uppercase text-white leading-[8vw]'>
      <div>
        The spark for
      </div>
      <div className='flex justify-center items-center'>
        all <div className='overflow-hidden h-[17vh] w-[18vw] rounded-full -mt-3.5'><Video/></div> things
      </div>
      <div>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText