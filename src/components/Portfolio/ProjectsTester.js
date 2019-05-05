import React, { Component } from "react"
import Img from "gatsby-image"
import Title from "../Globals/Title"
import { Link } from "gatsby"

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
            {/* Webshop project */}
            <div className="col-11 col-md-6 d-flex mx-auto">
              <Link to="/" className="nav-link">
                {/* Project image */}
                <Img
                  fixed={this.state.image.childImageSharp.fixed}
                  alt="Smoelenfoto"
                />
                {/* Project text */}
                <div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      {/* Project title */}
                      <h6 className="mb-0">
                        <small>Webshop</small>
                      </h6>
                    </div>
                    {/* Project description */}
                    <p className="text-muted">
                      <small>
                        Een webshop gemaakt met behulp van React, Javascript en
                        SQL
                      </small>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* Voorraadbeheer project */}
            <div className="col-11 col-md-6 d-flex mx-auto">
              <Link to="/over" className="nav-link">
                {/* Project image */}
                <Img
                  fixed={this.state.image.childImageSharp.fixed}
                  alt="Smoelenfoto"
                />
                {/* Project text */}
                <div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      {/* Project title */}
                      <h6 className="mb-0">
                        <small>Voorraadbeheer</small>
                      </h6>
                    </div>
                    {/* Project description */}
                    <p className="text-muted">
                      <small>
                        Een voorraad beheer systeem gemaakt met behulp van
                        Windows Forms en C#
                      </small>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
