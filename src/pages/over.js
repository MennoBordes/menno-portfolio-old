import React, { Component } from "react"

import Layout from "../components/layout"
import TextSection from "../components/Globals/TextSection"
import Title from "../components/Globals/Title"

export default class over extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-center">Welkom op de about pagina.</h1>
        <Title title="Over mij" styleClass="text-capitalize" />
        <TextSection>
          <p>Wie ik ben, wat ik doe</p>
          <p>foto</p>
          <p>persoonlijke details</p>
        </TextSection>
      </Layout>
    )
  }
}
