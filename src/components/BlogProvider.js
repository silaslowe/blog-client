import React, {useState, useContext} from 'react'

export const BlogContext = React.createContext()

export const BlogProvider = (props) => {
    // const [blog, setBlog] = useState({})
    const [blogs, setBlogs] = useState([{title: '', blogBody: '', imageURL: ''}])

    const getBlogs = () => {
        return fetch("http://my-json-server.typicode.com/silaslowe/blog-test-json/blogs",)
        .then((res) => res.json())
        .then((parsed) => {
            setBlogs(parsed)
        })
    } 
    return (
        <BlogContext.Provider value ={{ blogs, setBlogs, getBlogs}}>
            {props.children}
        </BlogContext.Provider>
    )
} 