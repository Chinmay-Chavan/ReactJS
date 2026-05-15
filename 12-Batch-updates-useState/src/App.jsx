import React, { useState } from 'react'

const App = () => {

  const [newBt, setBt] = useState(0);

  const obj = () => {
    setBt(prev => (prev + 1));
    setBt(prev => (prev + 1));     // newBt updates by 3 no
    setBt(prev => (prev + 1));
  }

  return (
    <div>
      <h1>{newBt}</h1>
      <button onClick={obj}>Click</button>
    </div>
  )
}

export default App
