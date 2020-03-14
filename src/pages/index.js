import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects/Projects'
import About from '../components/About/About'
import Hero from '../components/Hero'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Daniel Scott's Portfolio" />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </Layout>

  )
}

export default IndexPage
