import React, {useContext, useState, useEffect, useParams} from 'react'
import {BlogContext} from '../BlogProvider.js'


export const MainDisplay = (props) => {
const {blogs, getBlogs} = useContext(BlogContext)
const [latestBlog, setLatestBlog] = useState({title: '', blogBody: '', imageURL: ''})
const [body, setBody] = useState('')
let blogId = parseInt(props.match.params.BlogId)

useEffect(() => {
    getBlogs()
},[])

useEffect(() => {
    if(!isNaN(blogId)) {
      setLatestBlog(blogs[blogId -1])
    } else {
        setLatestBlog(blogs[0])
    }
},[blogs, blogId])

useEffect(() => {
    const lb = latestBlog.blogBody.split("\\n").map(p => 
        <p>{p}</p>  
    )
    setBody(lb)
},[latestBlog])

return <div className="main-container">
        <div className="title-image-container" style={{
            backgroundImage: `url(${latestBlog.imageURL})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize:"100%"
            }}>
            <div className="title-container">
            <h2 className="title-text">{latestBlog.title}</h2>
            </div>
        </div>  
            <div>{body}</div>
    </div>
}