import React, {useContext, useState, useEffect} from 'react'
import {BlogContext} from '../BlogProvider.js'


export const MainDisplay = () => {
const {blogs, getBlogs} = useContext(BlogContext)
const [latestBlog, setLatestBlog] = useState({})

useEffect(() => {
    getBlogs().then(setLatestBlog(blogs[0]))
    console.log(latestBlog)
},[])

    return <div className="main-container">
        <h3>MAIN DISPLAY</h3>
            <p>{latestBlog.title}</p>
            <p>{latestBlog.blogBody}</p>
            <img src={latestBlog.imageURL}/>
    </div>
}