import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return <div className="nav-container">
            <h1>Lowe Blog</h1>
            <Link to={{pathname: "/form"}}>Form</Link>
            <Link to={{pathname: "/"}}>Home</Link>
        </div>
}