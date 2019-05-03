import React from "react"

const TextSection = ({ children }) => (
  <>
    <section className="py-5">
      <div className="container">
        <div id="content-wrap">{children}</div>
      </div>
    </section>
  </>
)

export default TextSection
