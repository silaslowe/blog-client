import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Nav } from '../nav/Nav'
import {BlogContext} from '../BlogProvider.js'

export const Form = (props) => {
    const {createBlog} = useContext(BlogContext)
    const date = Date.now()
    const history = useHistory()
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log({...data, date: date})
        createBlog({...data, date: date})
        history.push("/")

    }
    return <>
    <Nav/>
    <h1>FORM</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Title:</label>
          <input {...register("title")}/>
          <br/>
          <label htmlFor="imageURL">Image:</label>
          <input {...register("imageURL", {required: true})}/>
          <br/>
          <label htmlFor="blogBody">Blog Text:</label>
          <textarea rows="10" cols="50" {...register("blogBody", {required: true})}/>
          <br/>
          <input type="submit"/>
        </form>
    </>
} 