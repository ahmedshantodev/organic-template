import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' container-[1320px] mx-auto bg-orrange'>
        {children}
    </div>
  )
}

export default Container