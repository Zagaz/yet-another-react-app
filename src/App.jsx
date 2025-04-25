import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="For Developers" subtitle=" Browse our React jobs and start your career today" />
      <HomeCards />
    </>
  )
}


export default App
