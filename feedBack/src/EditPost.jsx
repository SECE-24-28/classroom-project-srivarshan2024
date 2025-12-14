import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { useParams } from 'react-router-dom'

const EditPost = () => {
    const {posts}=useContext(DataContext)
    const {id}=useParams()
    const post=posts.find((p)=>p.id==id)
    if(!post){
        return (
            <div><h2>There is no data</h2></div>
        )
    }

  return (
    <div className='eddiv'>
        <h1>Edit Post</h1>
        <input type='text' value={post.title} className='edpt'/>
        <textarea value={post.body} className='edpt'/>
        <button className='btn'>Delete</button>

    </div>
  )
}

export default EditPost