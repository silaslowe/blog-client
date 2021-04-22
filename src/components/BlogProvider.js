import React, {useState, useContext} from 'react'

export const BlogContext = React.createContext()

export const BlogProvider = (props) => {
    const [blog, setBlog] = useState({title: '', blogBody: '', imageURL: ''})
    const [blogs, setBlogs] = useState([{title: '', blogBody: '', imageURL: ''}])

    const getBlogs = () => {
        return fetch("http://localhost:3000/blogs",)
        .then((res) => res.json())
        .then((parsed) => {
            setBlogs(parsed)
        })
    }
    
    const getSingleBlog = (id) => {
        return fetch(`http://localhost:3000/blogs/${id}`)
        .then((res) => res.json())
        .then((parsed) => {
            setBlog(parsed)
        })
    } 

    const createBlog = (blog) => {
        return fetch("http://localhost:3000/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blog),
        }).then(getBlogs)
    }
    return (
        <BlogContext.Provider value ={{blog, blogs, setBlogs, getBlogs, getSingleBlog, createBlog}}>
            {props.children}
        </BlogContext.Provider>
    )
} 