import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  subTitle,
  children,
  styleText,
}) {
  // const style = "text-white text-uppercase text-center"
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="row text-uppercase text-center">
        <div className="col">
          <h1 className={styleText}>{title}</h1>
          <hr className="hr-white" />
          <p className={styleText}>{subTitle}</p>
          {children}
        </div>
      </div>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
  styleText: "text-white",
}

// "title text-white text-uppercase text-center display-4 font-weight-bold"
