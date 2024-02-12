import React from 'react'

const Image = (props) => {
  return (
    <img src={props.imageLink} alt={props.altText} className={props.style}/>
  )
}

export default Image