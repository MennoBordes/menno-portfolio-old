import React from "react"

import Layout from "../components/layout"
import TextSection from "../components/Globals/TextSection"
import Title from "../components/Globals/Title"
import SEO from "../components/seo"

const portfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Title
      title="Welkom op mijn portfolio"
      styleClass="text-uppercase font-weight-bold"
      headerType="2"
    />
    <TextSection>
      <p>Momenteel is mijn portfolio nog te vinden op wordpress</p>
      <a
        href="https://portfoliomennobordes.wordpress.com/portfolio-2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn text-uppercase btn-yellow">
          wordpress portfolio
        </button>
      </a>
    </TextSection>
  </Layout>
)

export default portfolioPage
