import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaDesktop } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welkom</h1>
    <h6>Made by Menno</h6>
    <p>Deze website is momenteel onder constructie. </p>
    <p>
      De website zal worden gebruikt om een portfolio op weer te geven van mijn
      gedane activiteiten.
    </p>
    <FaDesktop />
  </Layout>
)

export default IndexPage
