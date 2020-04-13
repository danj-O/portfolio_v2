import React from 'react'
import './Hero.scss'
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
          Web Developer
        </h2>
        <div className='links'>
          <OutboundLink href={`/Daniel-Scott_2020_02-Resume.pdf`}>
            <FontAwesomeIcon icon={faFilePdf} />
          </OutboundLink>
          <OutboundLink href="mailto: dan@danjomedia.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </OutboundLink>
          <OutboundLink href="https://github.com/danj-O" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </OutboundLink>
          <OutboundLink href="https://www.linkedin.com/in/dan-scott-87938768/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </OutboundLink>
        </div>
      </div>
    </div>
  )
}
