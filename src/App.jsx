import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="My Title" subtitle="My Subtitle" />
      <HomeCards />
    </>
  )
}


export default App
