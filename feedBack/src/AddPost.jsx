import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const AddPost = () => {
    const {title,setTitle,body,setBody,handleSubmit}=useContext(DataContext)
  return (
    <div>
      <h1>Post your feedbacks here</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" id="" placeholder='Title' className='tle' value={title} onChange={(e)=>setTitle(e.target.value)} required/><br></br><br></br>
        <textarea name="" id="" placeholder='Body' className='bdy' value={body} onChange={(e)=>setBody(e.target.value)} required></textarea><br></br>
        <button type='submit' className='btn'>Save</button>
        </form>
    </div>
  )
}

export default AddPost