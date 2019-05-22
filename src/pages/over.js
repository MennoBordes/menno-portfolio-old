import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import moment from 'moment'

import Layout from '../components/layout'
import PersImage from '../assets/images/OwnImage.jpg'
import pers_black from '../assets/images/pers-black.jpg'
import pers_color from '../assets/images/pers-color.jpg'
import BannerLanding from '../components/BannerLanding'

// The date of today
var currentDate = moment.now()
// My birthday
const birthDate = moment([1997, 9, 4])

const over = props => (
  <Layout>
    <Helmet>
      <title>Artic-webshop - M.Bordes</title>
      <meta name="descritpion" content="Artic webshop" />
    </Helmet>

    <BannerLanding />
    <div id="main">
      <section id="one" className="spotlights">
        <section>
          {/* <Link to="#" className="image"> */}
          <img src={pers_color} alt="Smoelenfoto" className="image fit" />
          {/* </Link> */}
          <div className="content">
            <div className="inner">
              <p>
                Mijn naam is Menno, ik ben{' '}
                {-birthDate.diff(currentDate, 'years')} jaar oud en volg de
                opleiding informatica aan de Hogeschool in Rotterdam.
                <br />
                <br />
                Voordat ik aan deze opleiding was begonnen heb ik eerst de
                opleiding Middenkader Engineering Elektrotechniek gevolgd en
                afgerond. Gedurende deze opleiding werd een introductie gegeven
                van Arduino, wat ik erg gemakkelijk oppikte. Tevens heb ik
                tijdens mijn afstudeerstage volledig met Visual Basic gewerkt.
                <br />
                Mede dankzij deze ervaringen heb ik besloten om als
                vervolgopleiding voor Informatica te kiezen.
                <br />
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default over
