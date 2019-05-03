import React, { Component } from "react"

import Layout from "../components/layout"
import TextSection from "../components/Globals/TextSection"
import MainTitle from "../components/Globals/MainTitle"

export default class over extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-center">Welkom op de about pagina.</h1>
        <MainTitle title="Over mij" />
        <TextSection>
          <p>Wie ik ben, wat ik doe</p>
          <p>foto</p>
          <p>persoonlijke details</p>
        </TextSection>
      </Layout>
    )
  }
}
