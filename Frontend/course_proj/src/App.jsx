import { useEffect, useState } from 'react'
import './App.css'
import { getCourses } from './api/CourseApi'
import { addCourses } from './api/CourseApi'
import { updateCourses } from './api/CourseApi'
import { deleteCourses } from './api/CourseApi'


function App() {
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")
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
  return (
    <>
      <h1>Course Details</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text"  value={title}
          onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" value={duration}
        onChange={(e)=> setDuration(e.target.value)}/>
        <button type="submit">Add Course</button>

      </form>
      <ul>
        {
          courses.map(course=>
            <li >{course.title}-{course.duration}</li>
          )
        }
      </ul>

    </>
  )
}

export default App
