import React, { Component } from "react"

import Layout from "../components/layout"
import TextSection from "../components/Globals/TextSection"
import Title from "../components/Globals/Title"

export default class over extends Component {
  render() {
    return (
      <Layout>
        <Title
          title="Over mij"
          styleClass="text-uppercase font-weight-bold"
          // titleOrientation="text-left"
          headerType="2"
        />
        {/* Make responsive to the screen size eg: place everything in columns and display x columns side by side if screen is wide enough, else resize elements  */}
        <TextSection>
          <hr />
          <p>
            Ik ben momenteel student aan de{" "}
            <a
              href="https://www.hogeschoolrotterdam.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hogeschool Rotterdam
            </a>
            , waaraan ik de Bachelor Software Engineering volg.
          </p>
          <p className="font-weight-bold text-capitalize">Naam:</p>

          <p>Menno Bordes</p>
          <p className="font-weight-bold text-capitalize">Leeftijd:</p>
          <p>21</p>
          <p className="font-weight-bold text-capitalize">Locatie:</p>
          <p>Zevenhuizen ZH, Nederland</p>
          <hr />
          <p>foto</p>
        </TextSection>
      </Layout>
    )
  }
}
