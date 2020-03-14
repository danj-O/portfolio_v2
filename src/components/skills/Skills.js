import React, { useState, }from "react"
import { useStaticQuery, graphql } from "gatsby"
import './Skills.scss'


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
            }
            html
          }
        }
      }
    }
  `)
  const [setFocused, setFocusedState] = useState('Skills')

  const handleProjectClick = (e) => {
    setFocusedState(e.target.value)
  }

  return (
    <div id="skills" className='skills-box'>
      <div className='skills-header-box'
      data-sal="slide-left"
      data-sal-duration="800"
      data-sal-delay="600"
      data-sal-easing="ease"
      >
        <h1>Skills</h1>
      </div>
      <div className='skills-btns'
        data-sal="slide-left"
        data-sal-duration="800"
        data-sal-delay="800"
        data-sal-easing="ease"
      >
        {
          data.allMarkdownRemark.edges.map((edge) => {
            if (edge.node.frontmatter.type === 'skills'){
              return (
                <button 
                  value = {edge.node.frontmatter.title}
                  className={`skills-btn`}
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
      <div className='skills-content-container'
        data-sal="slide-left"
        data-sal-duration="800"
        data-sal-delay="1000"
        data-sal-easing="ease"
      >
        {
          data.allMarkdownRemark.edges.map(edge => {
            if (edge.node.frontmatter.title === `${setFocused}`){
              return (
                <div className='skills-content' key={edge.node.frontmatter.title}>
                  <div className='skills'
                    dangerouslySetInnerHTML= {{__html: edge.node.html}} />
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
