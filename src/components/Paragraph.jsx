import React from 'react'

const Paragraph = (props) => {
  return (
    <p className={props.style}>{props.text}</p>
  )
}

export default Paragraph