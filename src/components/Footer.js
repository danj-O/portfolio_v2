import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Made by me.
    </footer>
  )
}
