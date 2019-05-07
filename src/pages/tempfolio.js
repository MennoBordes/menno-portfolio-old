import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "./portfolio.css"

export default function tempfolio({ data }) {
  return (
    <div className="site">
      <header className="masthead">
        <Img fixed={data.bg_img.childImageSharp.fixed} alt="" />
        <p className="site-title">Welkom op mijn portfolio</p>
        <p className="site-description">
          Momenteel is mijn portfolio nog te vinden op wordpress.
        </p>
        <button>wordpress portfolio</button>
      </header>

      <h1 class="page-title">Welkom</h1>
      {/* <p>welkom</p>
      <p>gemaakte projecten, side by side</p>
      <p>footer</p> */}
    </div>
  )
}

export const query = graphql`
  {
    bg_img: file(relativePath: { eq: "ballenbuis.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
