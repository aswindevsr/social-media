import axios from'axios'

const API = axios.create({baseURL:"http://localhost:5000"})
// const API = axios.create({baseURL:"http://192.168.1.6:5000"})
// const API = axios.create({baseURL:"https://192.168.1.6:5000"})


export const logIn = (formData)=> API.post('/auth/login' , formData)
export const signUp = (formData)=> API.post('/auth/register' , formData)