import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.bg_img.childImageSharp.fluid}
      title="Menno Bordes"
      subTitle="Portfolio"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)

// Below query is being used to get the "ballenbuis.png" and pass it on to the "data" in the IndexPage
export const query = graphql`
  {
    bg_img: file(relativePath: { eq: "ballenbuis.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
