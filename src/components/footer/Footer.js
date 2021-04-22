import React from 'react'

export const Footer = (props) => {



// const date = Date.now()
// console.log("DATE", date)
// const d = date.toLocaleString({day: "numeric", month: "numeric", year: "numeric"})
// console.log("D", d)
return <>
<div className="footer-container">
    <p className="footer-text">Silas Lowe {new Date().getFullYear()}©</p>
</div>
</>
}