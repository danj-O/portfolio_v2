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
    <div className='hero-container'>
      <div>
        <Img 
          fluid={data.file.childImageSharp.fluid}
          key={data.file.childImageSharp.id}
        />
      </div>
        
      <div className='hero-text'>
        <h1 className='hero-header'>
          Hello
          {/* {props.header} */}
        </h1>
        <h2 className='hero-subHeader'>
          Helloooooooo
          {/* {props.subHeader} */}
        </h2>
      </div>
    </div>
  )
}
