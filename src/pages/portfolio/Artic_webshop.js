import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/Globals/Title"

export default function Artic_webshop() {
  return (
    <Layout>
      <SEO
        title="Artic webshop"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Title title="Actic webshop" />
      <p>Een verhaal over hoe de webshop is gemaakt.</p>
    </Layout>
  )
}
