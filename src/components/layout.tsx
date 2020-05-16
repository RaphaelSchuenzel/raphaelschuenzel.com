import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "./layout.css"

import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <div>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
