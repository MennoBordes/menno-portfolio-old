import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Title from "../Globals/Title"
import ProjectPreview from "./ProjectPreview"

const Project = ({ data }) => (
  <section className="projects py-5">
    <div className="container">
      <Title title="Gemaakte projecten" />
      {/* Projects */}
      <div className="row">
        {/* Webshop */}
        <ProjectPreview
          image={data.articWebshop.childImageSharp.fixed}
          imageAlt="Webshop"
          title="Webshop"
          description="Een webshop gemaakt met behulp van React, Javascript en SQL"
          linkTo="/portfolio/Artic_webshop"
        />
        <ProjectPreview image={data.ballenbuis.childImageSharp.fixed} />
      </div>
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        articWebshop: file(relativePath: { eq: "PersonalImage.png" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        ballenbuis: file(relativePath: { eq: "ballenbuis.png" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Project data={data} {...props} />}
  />
)
