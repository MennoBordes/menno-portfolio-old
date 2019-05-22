import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Title from "../Globals/Title"
import ProjectPreview from "./ProjectPreview"

const Project = ({ data }) => (
  <section className="projects py-5">
    <div className="container">
      <Title title="Gemaakte projecten" />
      {/* Projects */}
      <div>
        {/* <div className="row"> */}
        {/* Webshop */}
        <ProjectPreview
          image={data.articWebshop.childImageSharp.fixed}
          imageAlt="Webshop"
          title="Kunst webshop"
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
      fragment projectPreview on File {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      query {
        articWebshop: file(relativePath: { eq: "PersonalImage.png" }) {
          ...projectPreview
        }
        ballenbuis: file(relativePath: { eq: "ballenbuis.png" }) {
          ...projectPreview
        }
      }
    `}
    render={data => <Project data={data} {...props} />}
  />
)
