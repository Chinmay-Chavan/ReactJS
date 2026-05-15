import { useState } from "react";

// The input doesn't manage itself — React's state does. Typing updates state, state updates the input. That sync in both directions = two-way binding.

const App = () => {

  const [name, setName] = useState("");



  const clickSubmit = (e) => {
    e.preventDefault();                       // When user submits form it will not refresh it's state.
    console.log("Form Submitted by", name);
    setName("");                             // After submitting form we want to clear the input field so we set name to empty string.
  }

  return (
    <div>
      <form onSubmit={(e) => {
        clickSubmit(e);
      }
      }>
        <input type='text' placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
