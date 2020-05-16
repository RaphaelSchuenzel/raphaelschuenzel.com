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
                © {data.site.siteMetadata.title} {new Date().getFullYear()}. 
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
            </div>
        </footer>
    )
}

export default Footer
