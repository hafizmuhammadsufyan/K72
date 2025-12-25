import React from 'react'
import Video from '../Components/Home/Video'
import HomeBottomText from '../Components/Home/HomeBottomText'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeMiddleText from '../Components/Home/HomeMiddleText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeHeroText/>
        <HomeMiddleText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home