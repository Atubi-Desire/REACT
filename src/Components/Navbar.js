import React from 'react'
import './navbar.css'

const Navbar = (props) => {
  const title = "This is my website";
  //var bot = "This is my website";

  return (
    <div>
      <h1> {title} </h1>
      <P>This is my Description</P>
      <h2>This is my {props.title}</h2>
      <p>This is my {props.Age}</p>
      
    </div>
  )
}

export default Navbar