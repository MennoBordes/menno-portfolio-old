import React, { Component } from "react"
import Img from "gatsby-image"
import "./PersonalInfo.css"

import TextSection from "../Globals/TextSection"
import moment from "moment"

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: props.image,
    }
  }
  render() {
    // The date of today
    var currentDate = moment.now()
    // My birthday
    const birthDate = moment([1997, 9, 4])
    return (
      <TextSection>
        <p className="font-weight-bold text-capitalize">Naam:</p>
        <p>Menno Bordes</p>
        {/* Birthdate */}
        <p className="font-weight-bold text-capitalize">Leeftijd:</p>
        <p>{-birthDate.diff(currentDate, "years")}</p>
        {/* Living location */}
        <p className="font-weight-bold text-capitalize">Locatie:</p>
        <p>Zevenhuizen ZH, Nederland</p>
        <hr />
        {/* Profile picture */}
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
