import React from "react"
import { FaAt, FaLinkedin, FaGithub } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <section>
      <div className="container text-white">
        <div className="row text-center">
          <div className="column ">
            <div>
              <FaAt className="desktop-icon" />
              <p className="text-muted">Email link</p>
            </div>
          </div>
          <div className="column">
            <div>
              <FaLinkedin className="desktop-icon" />
              <p className="text-muted">LinkedIn link</p>
            </div>
          </div>
          <div className="column">
            <div>
              <FaGithub className="desktop-icon" />
              <p className="text-muted">Github link</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
