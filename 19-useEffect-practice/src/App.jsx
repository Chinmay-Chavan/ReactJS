import'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(1000)

  function handleClick1() {
    console.log('Button 1 clicked')
  }
  
  function handleClick2() {
    console.log('Button 2 clicked')
  }

  useEffect(function() {
    console.log('useEffect called')
    handleClick1(),
    handleClick2()
  }, [count1, count2])

  return (
    <div>
      <h1>Count 1: {count1}</h1>
      <h1>Count 2: {count2}</h1>
      <br/>
      <button onClick={() =>
      {
        setCount1(count1 + 1)
      }}>Click me 1</button>
      <br/>
      <br/>
      <button onClick={() =>
      {
        setCount2(count2 + 1000)
      }}>Click me 2</button>
    </div>
  )
}

export default App
