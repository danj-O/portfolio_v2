import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './About.scss'


export default function About() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "about"}}) {
        id
        frontmatter {
          title
        }
        html
      }
    }
  `)

  return (
    <div id= 'about' className='about-box'>
      <div className='about' 
        data-sal="slide-right"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        dangerouslySetInnerHTML= {{__html: data.markdownRemark.html}} 
      />
    </div>
  )
}