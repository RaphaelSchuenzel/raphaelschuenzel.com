import React from "react"

const PanelIntro = () => {
    return (
        <div id="panel-intro" className="panel">
            <h1 className="panel-head">
                { ['Hi', 'Howdy', 'Aloha', 'Hello', '‘Ello', 'Hola', 'Bonjour'][Math.floor(Math.random() * 7)] }, my name is 
                <div className="signature-wrapper">
                    <div className="signature">Raphael Schünzel</div>
                </div>
            </h1>

            <p className="panel-subhead">I'm a software developer and tech entrepreneur from <span className="text-germany">Germany</span>.</p>
        </div>
    )
}

export default PanelIntro
