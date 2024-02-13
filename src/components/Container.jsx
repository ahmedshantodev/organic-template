import React from 'react'

const Container = ({children , style}) => {
  return (
    <div className={`container max-w-[1200px] mx-auto ${style}`}>
        {children}
    </div>
  )
}

export default Container