import React from "react"

export default function MainTitle({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className=" text-capitalize">{title}</h1>
      </div>
    </div>
  )
}
