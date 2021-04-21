import React, {useContext, useState, useEffect} from 'react'
import {BlogContext} from '../BlogProvider.js'


export const MainDisplay = () => {
const {blogs, getBlogs} = useContext(BlogContext)
const [latestBlog, setLatestBlog] = useState({})

useEffect(() => {
    getBlogs()
},[])

useEffect(() => {
    setLatestBlog(blogs[0])
},[blogs])

    return <div className="main-container">
        {/* <h3>MAIN DISPLAY</h3>
            <p>{latestBlog.title}</p>
            <p>{latestBlog.blogBody}</p>
            <img className="mainDisplay-img" src={latestBlog.imageURL}/> */}
    </div>
}