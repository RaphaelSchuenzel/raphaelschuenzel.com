import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Panels from "../components/panels"

const IndexPage = () => (
    <Layout>
        <SEO title="Raphael Schünzel" titleTemplate={false} />

        <Panels />
    </Layout>
)

export default IndexPage
