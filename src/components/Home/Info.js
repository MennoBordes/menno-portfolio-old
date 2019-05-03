import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/SectionTitle"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Welkom" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <div className="lead text-muted mb-5">
              <p>Beste bezoeker, welkom op mijn portfolio website.</p>
              <p>
                Deze website wordt gebruikt om mijn portfolio op bij te houden.
              </p>
              <Link to="/portfolio/">
                <button className="btn text-uppercase btn-yellow">
                  portfolio
                </button>
              </Link>
            </div>
            <hr />
            <div className="lead text-muted mb-5">
              <p>In de about sectie kunt u gegevens over mij vinden.</p>
              <Link to="/over/">
                <button className="btn text-uppercase btn-yellow">over</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
