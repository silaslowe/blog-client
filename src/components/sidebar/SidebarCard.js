import React from 'react'

export const SidebarCard = (props) => {
const date = new Date(props.blog.date)
const d = date.toLocaleString({day: "numeric", month: "numeric", year: "numeric"})


    return <div className="sidebarCard">
    <h3>{props.blog.title}</h3>
    <p>{d}</p>
    <p>{props.blog.blogBody.substr(0, 175)}</p>
    <img className="sidebarCard-img" src={props.blog.imageURL} alt=""/>
    </div>  
} 