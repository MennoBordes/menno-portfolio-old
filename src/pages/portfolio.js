import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import TextSection from "../components/Globals/TextSection"
import Title from "../components/Globals/Title"
import SEO from "../components/seo"
import Menu from "../components/Portfolio/Projects"

const portfolioPage = ({ data }) => (
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
    <Menu items={data.projects} />
  </Layout>
)

export const query = graphql`
  {
    projects: allContentfulPortfolioElements {
      edges {
        node {
          id
          title
          category
          description {
            description
          }
          images {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default portfolioPage
