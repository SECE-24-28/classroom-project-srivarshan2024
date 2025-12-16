import axios from "axios";

const API = axios.create({baseURL:"http://localhost:4000/api"})

export const getCourses =()=> API.get("/courses")
export const addCourses = (course) => API.post("/courses",course)
export const updateCourses = (id,course) => API.put(`/courses/${id}`,course)
export const deleteCourses =(id) => API.delete(`/courses/${id}`)
 
