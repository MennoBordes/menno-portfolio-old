import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Globals/Navbar"

import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
