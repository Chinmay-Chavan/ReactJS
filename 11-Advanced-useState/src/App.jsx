import { useState } from 'react'


const App = () => {


  /*
    const [newObj, setNewObj] = useState({ user: 'Chinmay', age: 22 })
  
    const obj = () => {
      const userUpdate = { ...newObj }     // To update the object we have to create a new object and then update the values and then set the state with the new object
      userUpdate.user = 'Rohan'
      userUpdate.age = 25
      setNewObj(userUpdate)
  */

  /*

const [newArr, setArr] = useState({ user: 'Chinmay', age: 22 })



const arr = () => {                                                 // Shortcut method to update or change date in Objects, array.
setArr(update => ({ ...update, user: 'om', age: 16 }))

}

*/


  const [newArr2, setArr2] = useState([10, 20, 30])



  const arr2 = () => {

    const add = [...newArr2];
    add.push(40)
    setArr2(add)
  }


  return (

    <>
      {
        /*
        <div>
    
          <h1>{newObj.user} {newObj.age}</h1>
          <button onClick={obj}>Click me</button>
    
        </div>
        */
      }

      {
        /*
            <div>
              <h1>{newArr.user} {newArr.age}</h1>
              <button onClick={arr}>Click</button>
            </div>
         
      */
      }

      < div>
        <h1>{newArr2}</h1>
        <button onClick={arr2}>Click</button>
      </div>

    </>

  )

}
export default App
