import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import RgbHeaderImage from '../../assets/images/portfolio/RGB_kubus/RGB-header.jpg'
import { Link } from 'gatsby'

const RGB_kubus = props => (
  <Layout>
    <Helmet>
      <title>RGB kubus - M.Bordes</title>
      <meta name="descritpion" content="RGB kubus" />
    </Helmet>
    {/* <BannerLanding /> */}
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>RGB kubus</h1>
          </header>
          <div className="grid-wrapper">
            {/* Intro */}
            <div className="col-6">
              <h2 id="content">Intro</h2>
              <p>
                De eindopdracht waaraan ik heb gewerkt op mijn MBO opleiding tot
                elektrotechnicus, was het maken van een rgb kubus. Deze kubus
                zou gaan bestaan uit 3mm led's, welke door middel van een matrix
                aangestuurd worden.
              </p>
            </div>

            {/* Header image */}
            <div className="col-6 image fit">
              <img src={RgbHeaderImage} alt="rgb kubus header" />
            </div>

            {/* Construction */}
            <div className="col-12">
              <h2 id="content">Bouwproces</h2>
              <p>
                Na enkele weken gewacht te hebben kwam de bestelde RGB-Kit
                binnen. De Kit was opgedeeld over 2 dozen, waarbij in 1 doos de
                printplaat, RGB-led’s en de plexiglas box zaten. In de andere
                doos was de voeding, microcontroller en enkele
                communicatie-kabels geplaatst. Als eerste heb ik alle onderdelen
                geïnspecteerd te om in te zien of alle benodigde onderdelen
                geleverd waren. Vervolgens had ik een snelle testopstelling
                gemaakt waarmee de RGB-led’s getest konden worden. Het testen
                van de led’s was een vereiste, aangezien het erg vervelend zou
                zijn als enkele panelen in elkaar waren gezet waarin 1 of
                meerdere led’s niet (goed) werken.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default RGB_kubus
