import React from 'react'
import HeroCard from './HeroCard'

const HeroRight = (props) => {
  
  return (
    <div className='w-full flex flex-nowrap lg:w-3/4  overflow-x-auto gap-6  '>

      {props.user.map(function(user){
        return <HeroCard key={user.id} id={user.id} user={user} img={user.img} desc={user.desc} tag={user.tag} />
      })}
    </div>
  )
}

export default HeroRight
