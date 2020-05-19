import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <footer>
            <div className="container">
                <p>© {data.site.siteMetadata.title} {new Date().getFullYear()}. View this project on <a href="https://github.com/RaphaelSchuenzel/raphaelschuenzel.com" target="_blank">GitHub</a>.</p>
            </div>
        </footer>
    )
}

export default Footer
