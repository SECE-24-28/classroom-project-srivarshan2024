import { format } from "date-fns";
import {  createContext, useEffect, useState } from "react";
import api from '../api/Post'
import { useNavigate } from "react-router-dom";


const DataContext=createContext()
export const DataProvider=({children})=>
{

  const [posts,setPosts]=useState([])
  const [search,setSearch] = useState("") 
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const navigate=useNavigate()

  useEffect(()=>
  {
    const fetData=async()=>{
      const res = await api.get("/feedback");
      setPosts(res.data)
    }
    fetData()
  },[])


  useEffect(()=>
  {
    const filterd=posts.filter((post)=>(post.title.toLowerCase()).includes(search.toLowerCase()))
    setSearchResult(filterd.reverse())
  },[posts,search])


  const handleSubmit=(e)=>
  {
    e.preventDefault()
    const id = (posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime = format(new Date(), "MMM dd,yyyy pp")
    // newObj={id:id,title:title,datetime:datetime,body:body} This is valid
   const  newObj={id,title,datetime,body}
    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
    alert("Feedback posted")
    navigate('/')
  }

    return (
        <DataContext.Provider value={{posts,title,setTitle,body,setBody,search,setSearch,searchResult,handleSubmit}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext