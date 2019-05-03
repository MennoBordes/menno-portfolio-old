import React from "react"

export default function TextSection({ children }) {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div id="content-wrap">{children}</div>
        </div>
      </section>
    </>
  )
}
