import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import './Hero.scss'

//props for text over hero
export default function Hero(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "splash.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
  `)
  return (
    <div className='hero-container'
    data-sal="fade"
    data-sal-duration="800"
    data-sal-delay="300"
    data-sal-easing="ease"
    >
      <div className="image-box">
        {/* <Img 
          fluid={data.file.childImageSharp.fluid}
          key={data.file.childImageSharp.id}
        /> */}
      </div>
        
      <div className='hero-text'>
        <h1 className='hero-header'>
          Daniel Scott
        </h1>
        <h2 className='hero-subHeader'>
          Developer, tinkerer.
        </h2>
      </div>
    </div>
  )
}
