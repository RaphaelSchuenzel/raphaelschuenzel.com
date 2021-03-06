import React from "react"

const PanelAbout = () => {
    return (
        <div id="panel-about" className="panel">
            <h1 className="panel-head">
                A little about myself
                <svg className="underline" width="100%" height="50" aria-hidden="true">
                    <path className="stroke" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"></path>
                </svg>
            </h1>

            <p>I love creating things.</p>

            <p>I have a passion for design. Particular interests of mine include UI &amp; UX, Typography, and Brand Identities.</p>

            <p>I also enjoy photography and have a sweet spot for cars.</p>
        </div>
    )
}

export default PanelAbout
