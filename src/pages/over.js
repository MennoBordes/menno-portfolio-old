import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Globals/Title"
import AboutInfo from "../components/About/AboutInfo"
import PersonalInfo from "../components/About/PersonalInfo"

const overPage = ({ data }) => (
  <Layout>
    <SEO title="Over" keywords={[`gatsby`, `application`, `react`]} />
    <Title
      title="Over mij"
      styleClass="text-uppercase font-weight-bold"
      // titleOrientation="text-left"
      headerType="2"
    />
    <AboutInfo />
    <PersonalInfo image={data.PersonalImage} />
  </Layout>
)

// childImageSharp {
//   fluid(maxWidth: 500, maxHeight: 500) {
//     ...GatsbyImageSharpFluid
//   }

export const query = graphql`
  query {
    PersonalImage: file(relativePath: { eq: "PersonalImage.png" }) {
      ...squareImage
    }
  }
`

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default overPage
