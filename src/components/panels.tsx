import React from "react"

import PanelIntro from "./panels/intro"
import PanelAbout from "./panels/about"
import PanelSocial from "./panels/social"
import PanelContact from "./panels/contact"

const Panels = () => {
    return (
        <div id="panels">
            <div className="row">
                <PanelIntro />
                <PanelAbout />
            </div>
            <div className="row">
                <PanelSocial />
                <PanelContact />
            </div>
        </div>
    )
}

export default Panels
