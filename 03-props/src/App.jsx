import React from 'react'
import Card from './components/Cardprops'
import InputForm from './components/InputForm'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  return (
    <>
      <div className='parent'>

        <InputForm setName={setName} setAge={setAge} setCity={setCity} />
        <Card name={name} age={age} city={city} />



      </div>
    </>
  )
}

export default App
