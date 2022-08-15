import React from 'react'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Upto from './components/Upto'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Activities />
      <Upto />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App