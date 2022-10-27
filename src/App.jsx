import React from 'react'

import Header from './components/header/header.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
//import Services from './components/services/services.jsx'
//import Services from './components/services/services.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/footer.jsx'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App