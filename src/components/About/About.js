import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


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
    <div className='about'>
      {/* {data.markdownRemark.frontmatter.title} */}
      <div>
        <div className='projects' 
          dangerouslySetInnerHTML= {{__html: data.markdownRemark.html}} 
        />
      </div>
    </div>
  )
}
