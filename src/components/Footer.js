import React from 'react'
import './Footer.scss'
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
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
      <div className='copywrite'>
        © {new Date().getFullYear()} Made by me.
      </div>
    </footer>
  )
}
