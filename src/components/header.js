// import { Link } from "gatsby"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import './Header.scss'



const Header = () => {

  return (
    <header className="header-container"
    data-sal="fade"
    data-sal-duration="800"
    data-sal-delay="300"
    data-sal-easing="ease"
    
    >
      <div
      >
        <button onClick={() => scrollTo('#about')}>About</button>
      </div>
      <div>
        <button onClick={() => scrollTo('#projects')}>Projects</button>
      </div>
    </header>
  )
}

export default Header
