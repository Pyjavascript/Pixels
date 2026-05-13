import React from 'react'
import Hero from './HomeSections/Hero'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <>
    <div className='w-screen h-[100vh]'>
      <Navbar/>
      <Hero />
    </div>
    </>
  )
}

export default Home