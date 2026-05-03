import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between  p-3 pl-35 pr-20 items-center'>
        <p className='border border-gray-300 p-2 bg-black text-white uppercase rounded-3xl text-sm'>target audiance</p>
        <button className='uppercase font-medium text-gray-600 border border-none p-2 bg-gray-200 rounded-3xl pl-2 pr-2  tracking-widest'>Digital banking platform</button>
      </nav>
    </div>
  )
}

export default Navbar
