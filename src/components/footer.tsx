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
            © {data.site.siteMetadata.title} {new Date().getFullYear()}. 
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </footer>
    )
}

export default Footer
