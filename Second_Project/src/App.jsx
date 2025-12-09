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
  const Addstudnets=()=>{
    const sname=document.querySelector('.in').value;
    const newStudent={id:list.length+1,sname:sname,fee:false};
    setList([...list,newStudent]);
    document.querySelector('.in').value='';
  }
  const SearchStudent=()=>{
    const sname=document.querySelectorAll('.in')[1].value;
    const newList=list.filter((ls)=>ls.sname.toLowerCase().includes(sname.toLowerCase()));
    setList(newList);
    document.querySelectorAll('.in')[1].value='';
  }
  return (
    <>
    {/* <Header /> */}
    <div className="container">
     <h1>Student List</h1>
     <input type='text' placeholder='New Student'className='in'></input>
     <button onClick={Addstudnets}> ADD </button><br></br><br></br>
     <input type='text' placeholder='search' className='in'></input>
     <button onClick={SearchStudent}>search</button>
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
