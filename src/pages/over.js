import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Globals/Title"
import AboutInfo from "../components/About/AboutInfo"
import PersonalInfo from "../components/About/PersonalInfo"
import BackgroundSection from "../components/Globals/BackgroundSection"

// export default class over extends Component({ data }) {
const overPage = ({ data }) => (
  // render() {
  // return (
  <Layout>
    <SEO title="Over" keywords={[`gatsby`, `application`, `react`]} />
    <Title
      title="Over mij"
      styleClass="text-uppercase font-weight-bold"
      // titleOrientation="text-left"
      headerType="2"
    />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="over mij"
      styleClass="about-background"
    />
    <AboutInfo />
    <PersonalInfo />
  </Layout>
)
//   }
// }

// Below query is being used to get the "about-background.jpeg" and pass it on to the "data" in the IndexPage
export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default overPage
