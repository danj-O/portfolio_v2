import React, { useState, }from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './projects.scss'


const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              github
              live
              type
              description
              screenshot {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)
  // const [setActive, setActiveState] = useState('')
  const [setFocused, setFocusedState] = useState('Kocian Meats')
  // const [setFocusedHtml, setFocusedHtmlState] = useState('')

  const handleProjectClick = (e) => {
    // setActiveState(setActive === '' ? 'active' : '')
    setFocusedState(e.target.value)
    
    // console.log('in func',setFocused)
  }

  // useEffect(() => {
  //   console.log('in effect',{setFocused})
  // }, [setFocused])

  return (
    <div id="projects" className='projects-comp'>
      <div className='projects-header-box'
      data-sal="slide-up"
      data-sal-duration="800"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
        <h1>Projects</h1>
      </div>
      <div className='project-btns'
      data-sal="slide-down"
      data-sal-duration="800"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
        {
          data.allMarkdownRemark.edges.map((edge) => {
            if (edge.node.frontmatter.type === 'project'){
              return (
                <button 
                  value = {edge.node.frontmatter.title}
                  className={`btn `}
                  key={edge.node.id}
                  onClick={handleProjectClick}
                >
                  {edge.node.frontmatter.title}
                </button>
              )
            }
            return null
          })
        }
      </div>
      <div className='project-content-container'
      data-sal="fade"
      data-sal-duration="800"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
        {
          data.allMarkdownRemark.edges.map(edge => {
            if (edge.node.frontmatter.title === `${setFocused}`){
              return (
                <div className='project-content' key={edge.node.frontmatter.title}>
                  <div className='image-box'>
                    <Img fluid={edge.node.frontmatter.screenshot.childImageSharp.fluid} />
                  </div>
                  <div className='project-links'>
                    <a href={edge.node.frontmatter.github} target='_blank' rel="noopener noreferrer">Source</a>
                    <a href={edge.node.frontmatter.live} target='_blank' rel="noopener noreferrer">Live</a>
                  </div>
                  <div>
                    <div className='projects'
                    dangerouslySetInnerHTML= {{__html: edge.node.html}} />
                  </div>
                </div>
              )
            }
            return null
          })
        }
      </div>

    </div>
  )
}

export default Projects
