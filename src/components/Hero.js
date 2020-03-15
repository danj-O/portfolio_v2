import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'
import './Hero.scss'
// import Resume from '../images/2020_02-Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import Codewars from '../images/codewars.svg'

//props for text over hero
export default function Hero(props) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: {eq: "splash.jpg"}) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //         id
  //       }
  //     }
  //   }
  // `)
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
        <div className='links'>
          <a href={`/2020_02-Resume.pdf`}>
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
          <a href="mailto: danjowanjo@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/danj-O" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/dan-scott-87938768/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          {/* <a href={`/2020_02-Resume.pdf`} download='Daniel_Scott_Resume.pdf'>Resume PDF</a> */}
          {/* <a href={`.pdf`} download>Download the file from the static folder</a> */}
        </div>
      </div>
    </div>
  )
}
