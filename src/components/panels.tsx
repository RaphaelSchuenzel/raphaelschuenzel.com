import React from "react"

import PanelIntro from "./panels/intro"
import PanelAbout from "./panels/about"
import PanelSocial from "./panels/social"
import PanelContact from "./panels/contact"

const Panels = () => {
    return (
        <div id="panels">
            <PanelIntro />
            <PanelAbout />
            <PanelSocial />
            <PanelContact />
        </div>
    )
}

export default Panels
