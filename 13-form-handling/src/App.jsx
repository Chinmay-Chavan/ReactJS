import React from 'react'

const App = () => {

  const clickSubmit = (e) =>
  {
    e.preventDefault();                   // When user submits form it will no refresh it's state.
    console.log("Form Submitted");     
  }

  return (
    <div>
      <form onSubmit={ (e) =>
        {
          clickSubmit(e);
        }
      }>
        <input type='text' placeholder='Enter your name'></input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
