import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Search = () => 
    {
        const{search,setSearch}=useContext(DataContext)
  return (
    <div>
        <input type="text" placeholder='Search' className='srch' value={search} onChange={(e)=> setSearch(e.target.value)} />
    </div>
  )
}

export default Search