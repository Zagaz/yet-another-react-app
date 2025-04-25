import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'



const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="For Developers" subtitle="Browse our React jobs and start your career today"
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />

    </>
  )
}

export default App
