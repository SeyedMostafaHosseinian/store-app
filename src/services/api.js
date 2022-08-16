import  axios from "axios"

export const getProducts  = async() => {
    const BASE_URL = "https://digistore.glitch.me";
     const response = await axios.get(`${BASE_URL}/products`) 

     return response.data;

 }
export const getBlogs  = async() => {
    const BASE_URL = "https://digistore.glitch.me";
     const response = await axios.get(`${BASE_URL}/blogs`) 

     return response.data;

 }