import React from "react"
import { Link } from "gatsby"

export default function Info() {
  return (
    <section className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <div className="lead text-muted">
              <p>Beste bezoeker, welkom op mijn portfolio website.</p>
              <hr />
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
            <div className="lead text-muted">
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
