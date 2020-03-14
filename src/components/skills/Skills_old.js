import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './Skills.scss'


export default function About() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "skills"}}) {
        id
        frontmatter {
          title
        }
        html
      }
    }
  `)

  return (
    <div id= 'skills' className='skills-box'>
      <div className='skills' 
      data-sal="slide-left"
      data-sal-duration="800"
      data-sal-delay="600"
      data-sal-easing="ease"
        dangerouslySetInnerHTML= {{__html: data.markdownRemark.html}} 
      />
    </div>
  )
}
