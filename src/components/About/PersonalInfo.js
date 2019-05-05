import React, { Component } from "react"
import Img from "gatsby-image"
import "./PersonalInfo.css"

import TextSection from "../Globals/TextSection"

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: props.image,
    }
  }
  render() {
    return (
      <TextSection>
        <p className="font-weight-bold text-capitalize">Naam:</p>
        <p>Menno Bordes</p>
        <p className="font-weight-bold text-capitalize">Leeftijd:</p>
        <p>21</p>
        <p className="font-weight-bold text-capitalize">Locatie:</p>
        <p>Zevenhuizen ZH, Nederland</p>
        <hr />
        <div id="imageContainer" className="mx-auto">
          <Img
            fluid={this.state.image.childImageSharp.fluid}
            alt="Smoelenfoto"
            fadeIn="true"
          />
        </div>
      </TextSection>
    )
  }
}
