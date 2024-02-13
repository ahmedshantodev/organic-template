import React from 'react'

const Heading = (props) => {
  return (
    props.tagname ? (
        <props.tagname className={props.style}>{props.text}</props.tagname>
    ) : (
        <h1 className={props.style}>{props.text}</h1>
    )
    
  )
}

export default Heading