import React from "react"
import TextSection from "../Globals/TextSection"

export default function PersonalInfo() {
  return (
    <TextSection>
      <p className="font-weight-bold text-capitalize">Naam:</p>

      <p>Menno Bordes</p>
      <p className="font-weight-bold text-capitalize">Leeftijd:</p>
      <p>21</p>
      <p className="font-weight-bold text-capitalize">Locatie:</p>
      <p>Zevenhuizen ZH, Nederland</p>
      <hr />
      <p>foto</p>
    </TextSection>
  )
}
