import { Link } from "gatsby"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';



const Header = ({ siteTitle }) => {

  return (
    <header>
      <div>
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
      <div>
        {/* <Link to='/#about'>
          About
        </Link> */}
        <button onClick={() => scrollTo('#about')}>About</button>

      </div>
      <div>
        {/* <Link to='/#projects'>
          Projects
        </Link> */}
        <button onClick={() => scrollTo('#projects')}>Projects</button>
      </div>
    </header>
  )
}

export default Header
