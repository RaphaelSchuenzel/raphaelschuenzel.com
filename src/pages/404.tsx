import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="Not found" />
        
        <div id="not-found">
            <div>
                <h1>404</h1>
                <p>
                    There's nothing here. <Link to="/">Go Home?</Link>
                </p>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
