import 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

    const [data, setData] = useState([])

    const getData = async () =>
    {
        const response = await axios.get("https://picsum.photos/v2/list")
        console.log(response.data)
        setData(response.data)  

    }


  return (
    <>

    <div>
      <button className='btn' onClick={getData}>Click</button>
    </div>

    <div>
        
       { data.map(function(elem,idx){
        return <h1 key={idx}>{elem.author}{" "}{idx}</h1>

       }
       )}
    </div>

    
    
    </>
  )
}

export default App
