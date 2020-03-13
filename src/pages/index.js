import React from "react"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects/Projects'

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             description
  //             path
  //             screenshot {
  //               childImageSharp {
  //                 fixed {
  //                   ...GatsbyImageSharpFixed
  //                 }
  //                 fluid {
  //                   ...GatsbyImageSharpFluid
  //                 }
  //               }
  //             }
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Daniel Scott's Portfolio" />
      <Projects />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>

  )
}

export default IndexPage
