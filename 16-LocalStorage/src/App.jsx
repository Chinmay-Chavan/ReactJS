import 'react'

const App = () => {

// localStorage.clear() // clear all local storage data

// sessionStorage.clear() // clear all session storage data

// localStorage.setItem('name', 'John Doe') // set item in local storage

// sessionStorage.setItem('name', 'John Doe') // set item in session storage

/*
const nameFromLocalStorage = localStorage.getItem( 'name') // get item from local storage
console.log(nameFromLocalStorage)
*/

/*
const nameFromSessionStorage = sessionStorage.getItem('name') // get item from session storage
console.log(nameFromSessionStorage)
*/

// localStorage.removeItem('name') // remove item from local storage

// sessionStorage.removeItem('name') // remove item from session storage

/*

const user =
{
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
}

const add = localStorage.setItem(user.name, JSON.stringify(user)) // store object in local storage

const get = localStorage.getItem(user.name) // get object from local storage
const userFromLocalStorage = JSON.parse(get) // parse the JSON string back to an object
console.log(userFromLocalStorage)

*/

  return (
    <div>
      
    </div>
  )
}

export default App
