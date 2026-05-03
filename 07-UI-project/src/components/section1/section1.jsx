import React, { use } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const section1 = (props) => {

  return (
    <div className='h-screen w-full bg-white'>
      <Navbar />
      <Hero user={props.user} />
    </div>
  )
}

export default section1
