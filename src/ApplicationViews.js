import React from 'react'
import { Blog } from './Blog.js'
import { Route } from "react-router-dom"
import {Form} from './components/form/Form.js'
import {BlogProvider} from './components/BlogProvider.js'

export const ApplicationViews = (props) => {
    return <>
    <BlogProvider>
      <Route exact path="/" render={(props) => <Blog {...props} />} />
      <Route path="/:BlogId(\d+)" render={(props) => <Blog {...props} />}/> 
      <Route exact path="/form" render={(props) => <Form {...props} />} />
    </BlogProvider>
    </>
}
