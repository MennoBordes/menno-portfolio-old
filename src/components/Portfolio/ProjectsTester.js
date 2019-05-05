import React, { Component } from "react"
import Title from "../Globals/Title"
import ProjectPreview from "./ProjectPreview"

export default class ProjectsTester extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: props.image,
    }
  }
  render() {
    console.log(this.state.Webshop)

    return (
      <section className="projects py-5">
        <div className="container">
          <Title title="Gemaakte projecten" />
          {/* Projects */}
          <div className="row">
            {/* Webshop */}
            <ProjectPreview
              image={this.state.image.childImageSharp.fixed}
              imageAlt="Webshop"
              title="Webshop"
              description="Een webshop gemaakt met behulp van React, Javascript en SQL"
              linkTo="/portfolio/Artic_webshop"
            />
            <ProjectPreview image={this.state.image.childImageSharp.fixed} />
          </div>
        </div>
      </section>
    )
  }
}
