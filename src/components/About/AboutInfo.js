import React from "react"
import TextSection from "../Globals/TextSection"

export default function AboutInfo() {
  return (
    <TextSection>
      {/* Make responsive to the screen size eg: place everything in columns and display x columns side by side if screen is wide enough, else resize elements  */}
      <hr />
      <p>
        Ik ben momenteel tweedejaars student aan de{" "}
        <a
          href="https://www.hogeschoolrotterdam.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hogeschool Rotterdam
        </a>
        , waar ik de Bachelor Software Engineering volg.
      </p>
    </TextSection>
  )
}
