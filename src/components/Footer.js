import React from 'react'
import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
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
      <div className='copywrite'>
        © {new Date().getFullYear()} Made by me.
      </div>
    </footer>
  )
}
