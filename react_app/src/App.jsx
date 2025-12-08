import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let name="Varshan"
let nums=[11,22,33]
  return (
    <>
      <h1>Hey I am {name}</h1>
      <p>Lucky number :{nums}</p>
      <p>{"true"}</p>
      <p>{true}</p>
      <p>{JSON.stringify({name:"varshan",age:19})}</p>
    </>
  )
}

export default App
