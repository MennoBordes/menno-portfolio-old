import React from "react"

export default function TextSection({ children, styleClass }) {
  return (
    <>
      <section className="py-2">
        <div className={styleClass}>{children}</div>
      </section>
    </>
  )
}

TextSection.defaultProps = {
  styleClass: "container text-center",
}
