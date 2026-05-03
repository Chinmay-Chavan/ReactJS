import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const user = [

    {
      id:1,
      img: "https://i.pinimg.com/736x/51/fe/49/51fe4985b301e6667b5dbc455d278147.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe deleniti, dolorem, inventore, tempora deserunt quod quia.",
      tag: "Satisfied"
    },
    {
      id:2,
      img: "https://i.pinimg.com/736x/20/d5/d1/20d5d1bb7dbafff58104eac1fa46e90f.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe deleniti, dolorem, inventore, tempora deserunt quod quia.",
      tag: "Underserved"
    },
    {
      id:3,
      img: "https://i.pinimg.com/736x/7b/70/98/7b709808d09ffc791ce6303343023c86.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe deleniti, dolorem, inventore, tempora deserunt quod quia.",
      tag: "Neutral"
    },
    {
      id:4,
      img: "https://i.pinimg.com/736x/32/72/fd/3272fdbde5f3f2a613b4bfa3bc3f9135.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe deleniti, dolorem, inventore, tempora deserunt quod quia.",
      tag: "Underbanked"
    }
  ]
  return (
    <div>
      <Section1 user={user} />
      
    </div>
  )
}

export default App
