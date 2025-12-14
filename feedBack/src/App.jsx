import { useContext, useEffect, useState } from 'react'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import './App.css'
import { format } from 'date-fns'
import { DataProvider } from './context/DataContext'
import { Link, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import EditPost from './EditPost'

function App() {
  

  return (
    <>
 
    <NavBar />


    <DataProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newpost' element={<AddPost />} />
        <Route path='/editpost/:id' element={<EditPost />} />
        
{/* 
    <AddPost />
    <hr />
    <br /> 
    <Home /> */}

    </Routes>
</DataProvider>
    </>
  )
}

export default App



