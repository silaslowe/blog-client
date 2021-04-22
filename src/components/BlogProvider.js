import React, {useState, useContext} from 'react'

export const BlogContext = React.createContext()

export const BlogProvider = (props) => {
    const [blog, setBlog] = useState({title: '', blogBody: '', imageURL: ''})
    const [blogs, setBlogs] = useState([{title: '', blogBody: '', imageURL: ''}])

    const getBlogs = () => {
        return fetch("http://my-json-server.typicode.com/silaslowe/blog-test-json/blogs",)
        .then((res) => res.json())
        .then((parsed) => {
            setBlogs(parsed)
        })
    }
    
    const getSingleBlog = (id) => {
        return fetch(`http://my-json-server.typicode.com/silaslowe/blog-test-json/blogs/${id}`)
        .then((res) => res.json())
        .then((parsed) => {
            setBlog(parsed)
        })
    } 
    return (
        <BlogContext.Provider value ={{blog, blogs, setBlogs, getBlogs, getSingleBlog}}>
            {props.children}
        </BlogContext.Provider>
    )
} 