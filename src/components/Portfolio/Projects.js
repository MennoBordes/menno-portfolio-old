import React, { Component } from "react"
import Img from "gatsby-image"

import Title from "../Globals/Title"

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      projectItems: props.items.edges,
    }
  }
  render() {
    const Titles = "Gemaakte projecten"
    if (this.state.items.length > 0) {
      // Retrieved portfolio elements
      return (
        <section className="projects py-5">
          <div className="container">
            <Title title={Titles} />
            {/* Categories */}
            {/* Projects */}
            <div className="row">
              {this.state.projectItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    {/* Project image */}
                    <div>
                      <Img fixed={node.images.fixed} />
                    </div>
                    {/* Project text */}
                    <div>
                      <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-0">
                            <small>{node.title}</small>
                          </h6>
                        </div>
                        <p className="text-muted">
                          <small>{node.description.description}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      // Didn't retrieve portfolio elements
      return (
        <section className="projects py-5">
          <div className="container">
            <Title title={Titles} />
            <div className="row">
              <div className="col-10 col-sm-11 mx-auto text-center text-uppercase">
                <h1>Er zijn momenteel geen projecten om weer te geven.</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
