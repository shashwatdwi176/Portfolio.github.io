import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
