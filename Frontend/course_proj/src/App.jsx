import { useEffect, useState } from 'react'
import './App.css'
import { getCourses } from './api/CourseApi'
import { addCourses } from './api/CourseApi'
import { updateCourses } from './api/CourseApi'
import { deleteCourses } from './api/CourseApi'

function App() {
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")
  const [editId,setEditId] = useState("")
  const [courses, setCourses] = useState([])

  const fetchCourse= async()=>{
    
    const respone = await getCourses()
    setCourses(respone.data)
  }

useEffect(() => {
  fetchCourse()
}, [])

const handleSubmit=async(e)=>{
  e.preventDefault()
  await addCourses({title,duration})
  fetchCourse()
  setTitle("")
  setDuration("")
}

const handleDelete=async(id)=>{
  await deleteCourses(id)
  fetchCourse()
  alert("Course Deleted Successfully....")
}

const handleEdit=(course)=>{
  setTitle(course.title)
  setDuration(course.duration)
  setEditId(course._id)
}

const update = async()=>{
  await updateCourses(editId,{title,duration})
  setTitle("")
  setDuration("")
  setEditId("")
  fetchCourse()

}


  return (
    <>
      <h1>Course Details</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Course Name' value={title}
          onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder='Duration' value={duration}
        onChange={(e)=> setDuration(e.target.value)}/>
        <button type="submit">Add Course</button>
        <button type='button' onClick={update}>update</button>

      </form>
      <ul>
        {
          courses.map(course=>
            <li key={course._id}>
              {course.title}-{course.duration}-
              <button onClick={()=>handleEdit(course)}>EDIT</button>
              <button onClick={()=>handleDelete(course._id)}>Delete</button>
              </li>
          )
        }
      </ul>

    </>
  )
}

export default App
