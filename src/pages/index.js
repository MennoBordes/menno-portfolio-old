import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaDesktop } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello visitor</h1>
    <p>Welcome to my new Portfolio site.</p>
    <FaDesktop />
  </Layout>
)

export default IndexPage
