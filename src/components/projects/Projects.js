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
    <div className='projects-comp'>
      <div className='project-btns'>
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
      <div className='project-content-container'>
        {
          data.allMarkdownRemark.edges.map(edge => {
            if (edge.node.frontmatter.title === `${setFocused}`){
              return (
                <div className='project-content' key={edge.node.frontmatter.title}>
                  <div className='image-box'>
                    <Img fluid={edge.node.frontmatter.screenshot.childImageSharp.fluid} />
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
