import Container from './Container'
import React from 'react'
import Paragraph from '../components/Paragraph'

const Topbar = () => {
  return (
    <section className=' bg-dark-green h-[50px] text-white flex items-center font-inter'>
        <Container>
            <Paragraph text="Welcome To Our Organsio Store."/>
        </Container>
    </section>
  )
}

export default Topbar