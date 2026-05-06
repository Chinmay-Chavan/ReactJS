import React, { useState, useSyncExternalStore } from 'react'

const App = () => {

  const [count, setCount] = useState(20);
  const [name, setName] = useState('John');
  const [arr, setArr] = useState([40,50,60]);

  function handleClick() {
    setCount(40);
    setName('Chinmay');
    setArr([70,80,90]);
  }

  return (
    <div>
      <h1>Count {count}</h1>
      <p>Name: {name}</p>
      <p>Array: {arr}</p>
      <button onClick={handleClick}>Change Count</button>
    </div>
  )
}

export default App
