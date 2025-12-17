import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Search from './Search'
import { Link } from 'react-router-dom'

const Home = () => {
  const{searchResult}=useContext(DataContext)

  return (

    <div className='container'>
      <h1>Home Page</h1>
      <Search />< br></br>
      <table className='tble'>
        <thead>
            <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Date & Time</td>
            <td>Body</td>
          </tr>
          </thead>
          <tbody >
            {
      searchResult.map((post)=>
    
          <tr >
            <td><Link to={`/editpost/${post.id}`} className='clink'>{post.id}</Link></td>
            <td><Link to={`/editpost/${post.id}`} className='clink'>{post.title}</Link></td>
            <td><Link to={`/editpost/${post.id}`} className='clink'>{post.datetime}</Link></td>
            <td><Link to={`/editpost/${post.id}`} className='clink'>{post.body}</Link></td>
          </tr>
         
      )
    }
     </tbody>
     </table>
    </div>
  )
}

export default Home