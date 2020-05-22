import React from "react"

import emailIcon from '../../images/icons/email.svg'

const PanelContact = () => {
    return (
        <div id="panel-contact" className="panel">
            <h1 className="panel-head">
                Let's talk
                <svg className="underline" width="100%" height="50" aria-hidden="true">
                    <path className="stroke" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"></path>
                </svg>
            </h1>

            <p>
                <img className="icon-social" src={emailIcon} alt="GitHub" />
                <a href="mailto:raphael@feedphant.com" target="_blank">Say Hi!</a>
            </p>
        </div>
    )
}

export default PanelContact
