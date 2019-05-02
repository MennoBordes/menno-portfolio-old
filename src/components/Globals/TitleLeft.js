import React from "react"

export default function TitleLeft({ title }) {
  return (
    <div className="row">
      <div className="col mb-3">
        <h3 className="display-4 text-capitalize ">{title}</h3>
      </div>
    </div>
  )
}
