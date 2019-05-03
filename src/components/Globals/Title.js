import React from "react"

export default function Title({
  headerType,
  title,
  styleClass,
  titleOrientation,
}) {
  const Tag = "h" + headerType
  return (
    <div className="row">
      <div className="col">
        <div className={titleOrientation}>
          <Tag className={styleClass}>{title}</Tag>
        </div>
      </div>
    </div>
  )
}

Title.defaultProps = {
  headerType: "1",
  title: "default title",
  styleClass: "display-4 text-capitalize font-weight-bold",
  titleOrientation: "text-center",
}
