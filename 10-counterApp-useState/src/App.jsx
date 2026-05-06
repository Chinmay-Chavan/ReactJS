import React from 'react'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [count, setCount] = useState(0);

  function add() {
    if (count < 100) {
      setCount(count + 1);

    }
  }

  function subtract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className='container'>
      <h1 className='header'>Counter App</h1>
      <button className='btn sbtn' onClick={subtract}>-</button>
      <span className='count'>{count}</span>
      <button className='btn pbtn' onClick={add}>+</button>
      <br />
      <button className='btn rbtn ' onClick={reset}><i className="ri-reset-left-line "></i></button>

    </div>
  )
}

export default App
