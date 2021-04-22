import React, {useContext, useState, useEffect} from 'react'
import {BlogContext} from '../BlogProvider.js'


export const MainDisplay = () => {
const {blogs, getBlogs} = useContext(BlogContext)
const [latestBlog, setLatestBlog] = useState({title: '', blogBody: '', imageURL: ''})
const [body, setBody] = useState('')

useEffect(() => {
    getBlogs()
},[])

useEffect(() => {
    setLatestBlog(blogs[0])
},[blogs])

useEffect(() => {
    const lb = latestBlog.blogBody.split("\\n").map(p => 
        <p>{p}</p>  
    )
    setBody(lb)
},[latestBlog])

    return <div className="main-container">
        <h3>MAIN DISPLAY</h3>
            <p>{latestBlog.title}</p>
            <div>{body}</div>
            <img className="mainDisplay-img" src={latestBlog.imageURL}/>
    </div>
}