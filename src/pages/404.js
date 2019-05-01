import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Pagina niet gevonden</h1>
    <p>Helaas, deze pagina bestaat niet.</p>
  </Layout>
)

export default NotFoundPage
