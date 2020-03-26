import React from "react"

import SEO from "../components/seo"
// import Header from "../components/header"
import Projects from '../components/projects/Projects'
import About from '../components/About/About'
import Skills from '../components/skills/Skills'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Form from '../components/Form/Form'

import './index.scss'

const IndexPage = () => {

  return (
    <div className='app'>
      <SEO title="Daniel Scott's Portfolio" />
      {/* <Header /> */}
      <Hero />
      <div className='about-skills'>
        <About />
        <Skills />
      </div>
      <Projects />
      <Form />
      <Footer />
    </div>

  )
}

export default IndexPage
