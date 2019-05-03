import React, { Component } from "react"

import Layout from "../components/layout"
import Title from "../components/Globals/Title"
import AboutInfo from "../components/About/AboutInfo"
import PersonalInfo from "../components/About/PersonalInfo"

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
        <AboutInfo />
        <PersonalInfo />
      </Layout>
    )
  }
}
