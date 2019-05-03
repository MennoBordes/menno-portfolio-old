import React from "react"

export default function TextSection({ children, styleClass }) {
  return (
    <>
      <section className="py-2">
        <div className={styleClass}>
          <div id="content-wrap">{children}</div>
        </div>
      </section>
    </>
  )
}

TextSection.defaultProps = {
  styleClass: "container text-center",
}
