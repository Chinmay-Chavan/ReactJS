import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = (props) => {
  return (
    <div className='flex  gap-2 p-8 h-[70vh]'>

     <HeroLeft  />
     <HeroRight  user={props.user}/>

    </div>
  )
}

export default Hero
