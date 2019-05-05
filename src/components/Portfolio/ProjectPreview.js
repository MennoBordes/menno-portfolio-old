import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function ProjectPreview({
  image,
  imageAlt,
  title,
  description,
  linkTo,
}) {
  return (
    <div className="col-11 col-md-6 my-3 d-flex mx-auto">
      <Link to={linkTo} className="nav-link">
        {/* Link to project page */}
        {/* Project image */}
        <div>
          <Img fixed={image} alt={imageAlt} />
        </div>
      </Link>

      <Link to={linkTo} className="nav-link">
        {/* Project text */}

        <div className="flex-grow-0 px-3">
          <div className="d-flex justify-content-between">
            {/* Project title */}
            <h6 className="mb-0">
              <small>{title}</small>
            </h6>
          </div>
          {/* Project description */}
          <p className="text-muted">
            <small>{description}</small>
          </p>
        </div>
      </Link>
    </div>
  )
}

ProjectPreview.defaultProps = {
  imageAlt: "Default text",
  title: "Default title",
  description: "Default description",
  linkTo: "/portfolio",
}
