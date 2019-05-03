import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Globals/Navbar"

import "./layout.css"
import "./bootstrap.min.css"
import Footer from "./Globals/Footer"

// Default layout to be used on every page
const Layout = ({ children }) => (
  <>
    <div id="page-container">
      <Navbar />
      <div id="content-wrap">
        {children}
        <Footer />
      </div>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
