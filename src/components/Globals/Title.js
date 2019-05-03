import React from "react"

export default function Title({ title, styleClass, titleOrientation }) {
  return (
    <div className="row">
      <div className="col mb-3">
        <div className={titleOrientation}>
          <h1 className={styleClass}>{title}</h1>
        </div>
      </div>
    </div>
  )
}

Title.defaultProps = {
  title: "default title",
  styleClass: "display-4 text-capitalize font-weight-bold",
  titleOrientation: "text-center",
}
