import React from "react"
import { FaAt, FaLinkedin } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <section>
      <div className="container text-white">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead mb-2 text-capitalize">LinkedIn:</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="column ">
            <div>
              <FaAt />

              <p className="text-muted">BlaBlaBla</p>
            </div>
          </div>
          <div className="column">
            <div>
              <FaLinkedin />

              <p className="text-muted">BlaBlaBla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
