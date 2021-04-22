import React, {useContext, useState, useEffect} from 'react'
import {BlogContext} from '../BlogProvider.js'
import { SidebarCard } from './SidebarCard.js'


export const Sidebar = () => {
    const {blogs, getBlogs} = useContext(BlogContext)


    useEffect(() => {
        getBlogs()
        console.log(blogs)
    },[])

    return <div className="sidebar-container">
        {blogs.map(blog => <SidebarCard key={blog.id} blog={blog}/>
        )}
    </div>
}