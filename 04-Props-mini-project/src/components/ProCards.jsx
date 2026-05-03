import React from 'react'
import { Bookmark } from 'lucide-react'

const ProCards = ({ company, logo, post, role, tag1, tag2, paymentPerHr, location }) => {
  return (
    <div className='card'>

      <div className='top'>
        <img src={logo} alt={company} />
        <button > Save  <Bookmark size={13} color="#5c5b5b" strokeWidth={1} /> </button>
      </div>

      <div className='center'>
        <p>{company} <span>{post}</span></p>
        <h3>{role}</h3>
        <div className='tags'>
          <p>{tag1}</p>
          <p>{tag2}</p>
        </div>
      </div>

      <div className='bottom'>
        <div>
          <h3>${paymentPerHr}/hr</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>

      </div>

    </div>
  )
}

export default ProCards
