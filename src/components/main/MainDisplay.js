import React, {useContext, useState, useEffect, useParams} from 'react'
import {BlogContext} from '../BlogProvider.js'


export const MainDisplay = (props) => {
const {blog,blogs, getBlogs, getSingleBlog} = useContext(BlogContext)
const [latestBlog, setLatestBlog] = useState({title: '', blogBody: '', imageURL: ''})
const [body, setBody] = useState('')
let blogId = parseInt(props.match.params.BlogId)
const [refresh, setRefresh] = useState(true)

useEffect(() => {
    getBlogs()
},[])

// useEffect(() => {
//     getBlogs()
//     setRefresh(!true)
// },[blogId])


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
        <h3>MAIN DISPLAY</h3>
            <p>{latestBlog.title}</p>
            <div>{body}</div>
            <img className="mainDisplay-img" src={latestBlog.imageURL}/>
    </div>
}