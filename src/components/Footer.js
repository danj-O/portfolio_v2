import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
