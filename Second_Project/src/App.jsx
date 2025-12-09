import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Header'

function App() {
   const [list,setList]= useState([
    {id:1,sname:"Varshan",fee:true},
    {id:2,sname:"nova",fee:true},
    {id:3,sname:"gookul",fee:false},
    {id:4,sname:"Kalai",fee:true},
    {id:5,sname:"vijay",fee:false},
    {id:6,sname:"abhishek",fee:true},
    {id:7,sname:"naren",fee:false},
    {id:8,sname:"shyam",fee:true}
   ]);
   

   const handleDelete=(id)=>{
     const newList=list.filter((ls)=>ls.id!=id) 
      setList(newList)
   }

   const handleCheck=(id)=>{
       const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
       setList(newList)
  }
  return (
    <>
    <Header />
    <div className="container">
     <h1>Student List</h1>
     <hr />
     <ul >
     {
      list.map((ls)=>
        <li key={ls.id} className="btn">
          <input className='cbox' type="checkbox" checked={ls.fee}
           onChange={()=>handleCheck(ls.id)}></input>
          <label>{ls.sname} </label>
          <button  onClick={()=>handleDelete(ls.id)}>Delete</button>
        </li>
              
    )
     }
     </ul>
     </div>
    </>
  )
}

export default App
