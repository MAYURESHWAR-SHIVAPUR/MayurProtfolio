import React from 'react'
import ErrorCss from './Errors.module.css'

const Error = () => {
  return (
    <div className={ErrorCss.center}>
      <div className={ErrorCss.img}></div>
      <div className={ErrorCss.well}></div>
      <br />
      <h2>Sorry, We don't have Access there.......</h2>
      <h1>plz reload page or get back to Home</h1>
    </div>
  )
}

export default Error