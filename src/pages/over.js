import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Globals/Title"
import AboutInfo from "../components/About/AboutInfo"
import PersonalInfo from "../components/About/PersonalInfo"

const overPage = () => (
  <Layout>
    <SEO title="Over" keywords={[`gatsby`, `application`, `react`]} />
    <Title
      title="Over mij"
      styleClass="text-uppercase font-weight-bold"
      // titleOrientation="text-left"
      headerType="2"
    />
    <AboutInfo />
    <PersonalInfo />
  </Layout>
)

export default overPage
