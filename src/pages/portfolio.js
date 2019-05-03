import React, { Component } from "react"

import Layout from "../components/layout"
import TextSection from "../components/Globals/TextSection"

export default class portfolio extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-center">Welkom op mijn portfolio.</h1>
        <TextSection>
          <p>Momenteel is mijn portfolio nog te vinden op wordpress</p>
          <a
            href="https://portfoliomennobordes.wordpress.com/portfolio-2/"
            target="_blank"
          >
            <button className="btn text-uppercase btn-yellow">
              wordpress portfolio
            </button>
          </a>
        </TextSection>
      </Layout>
    )
  }
}
