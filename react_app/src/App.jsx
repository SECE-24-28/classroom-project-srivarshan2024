import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import './Style.css'

function App() {
  let [num,setNum]=useState(100);
  let demo=(name)=>{
    console.log("Hey 😉 "+name)
    console.log(num)
  }
  return (
    <>
      <button onClick={()=>demo("Varshan")}>Click Me</button>
      <Header/>
    </>
  )
}

export default App
