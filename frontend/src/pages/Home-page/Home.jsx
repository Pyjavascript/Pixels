import React from 'react'
import Hero from './HomeSections/Hero'
import Navbar from '../../components/Navbar'
import SSI from '../SSI/SSI'

const Home = () => {
  return (
    <>
    <div className=' h-auto overflow-x-hidden'>
      <Navbar/>
      <Hero />
      <SSI/>
    </div>
    </>
  )
}

export default Home