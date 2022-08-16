import React , {createContext, useEffect, useState} from 'react';


//API
import { getBlogs } from '../../services/api';

//context core
export const BlogDataContext = createContext()

const BlogDataContextProvider = ({children}) => {
    const[blogs,setBlogs] = useState([])

    useEffect(() => {
        const fetchAPI = async() => {
            setBlogs(await getBlogs())
        }
        fetchAPI()
    },[])
    return (
        <BlogDataContext.Provider value={blogs}>
            {children}
        </BlogDataContext.Provider>
    );
};

export default BlogDataContextProvider;