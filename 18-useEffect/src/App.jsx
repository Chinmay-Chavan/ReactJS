import 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function handleA() {
    console.log('A has been updated');
  }

  function handleB() {
    console.log('B has been updated');
  }

   useEffect(function() {
    handleA();
    handleB();
   }, [a, b]);

  return (
    <div>
      <h1>A: {a}</h1>
      <h1>B: {b}</h1>
      <button onClick={()=>
      {
        setA(a + 1);
      }}>Increment A</button>
      <button onClick={()=>
      {
        setB(b - 1);
      }}>Decrement B</button>
    </div>
  )
}

export default App
