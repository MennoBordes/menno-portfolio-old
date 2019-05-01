import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaDesktop } from "react-icons/fa"
import BackgroundSection from "../components/Globals/BackgroundSection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welkom</h1>
    <h6>Made by Menno</h6>
    <p>Deze website is momenteel onder constructie!</p>
    <p>
      Deze website zal worden gebruikt om een portfolio op weer te geven van
      mijn gedane activiteiten.
    </p>
    <FaDesktop />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Portfolio"
      styleClass="default-background"
    />
  </Layout>
)

// Below query is being used to get the "ballenbuis.png" and pass it on to the "data" in the IndexPage
export const query = graphql`
  {
    img: file(relativePath: { eq: "ballenbuis.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
