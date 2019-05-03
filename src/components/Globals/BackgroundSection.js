import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  subTitle,
  children,
}) {
  const style = "text-white text-uppercase text-center"
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="row">
        <div className="col">
          <h1 className={style}>{title}</h1>
          <hrWhite />
          <p className={style}>{subTitle}</p>
          {children}
        </div>
      </div>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

// "title text-white text-uppercase text-center display-4 font-weight-bold"
