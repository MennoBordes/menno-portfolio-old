import React from "react"
import { FaAt, FaLinkedin, FaGithub } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <section>
      <div className="container text-white mb-4">
        <div className="row text-center">
          <div className="column">
            <a href="https://linkedin.com/in/menno-bordes/" target="_blank">
              <FaLinkedin className="desktop-icon" />
              <p className="text-muted small-font-size">
                https://linkedin.com/in/menno-bordes/
              </p>
            </a>
          </div>
          <div className="column ">
            <FaAt className="desktop-icon" />
            <p className="text-muted small-font-size">mennobordes@hetnet.nl</p>
          </div>
          <div className="column">
            <a href="https://github.com/Skillerde6de" target="_blank">
              <FaGithub className="desktop-icon" />
              <p className="text-muted small-font-size">
                https://github.com/Skillerde6de
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
