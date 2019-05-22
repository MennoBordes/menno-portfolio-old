import React from 'react'
import moment from 'moment'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
        {/* <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li> */}
        {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li> */}
        <li>
          <a
            href="https://github.com/Skillerde6de"
            className="icon alt fa-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/menno-bordes/"
            className="icon alt fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; {new Date().getFullYear().toString()}</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
