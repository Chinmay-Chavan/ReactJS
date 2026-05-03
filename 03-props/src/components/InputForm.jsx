import React from 'react'
import { useState } from 'react'

const InputForm = ({setName, setAge, setCity}) => {

   const handleSubmit = (e) => {
    e.preventDefault()
   }

  return (
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter your name' onChange={e => setName(e.target.value)} />
    <input type="number" placeholder='Enter your age' onChange={e => setAge(e.target.value)} />
    <input type="text" placeholder='Enter your city' onChange={e => setCity(e.target.value)} />
    <button type='submit'>Submit</button>
   </form>
  )
}

export default InputForm
