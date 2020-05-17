import React from "react"

import angellistIcon from '../../images/icons/angellist.svg'
import githubIcon from '../../images/icons/github.svg'

const PanelSocial = () => {
    return (
        <div id="panel-social" className="panel">
            <h1 className="panel-head">
                Find me on...
                <svg className="underline" width="100%" height="50" aria-hidden="true">
                    <path className="stroke" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"></path>
                </svg>
            </h1>

            <p>
                <img className="icon-social" src={githubIcon} alt="GitHub" />
                GitHub – <a href="https://github.com/RaphaelSchuenzel" target="_blank">@RaphaelSchuenzel</a>
            </p>

            <p>
                <img className="icon-social "src={angellistIcon} alt="AngelList" />
                AngelList – <a href="https://angel.co/u/raphaelschuenzel" target="_blank">Raphael Schünzel</a>
            </p>
        </div>
    )
}

export default PanelSocial
