import React from "react"

import PanelIntro from "./panels/intro"
import PanelAbout from "./panels/about"
import PanelSocial from "./panels/social"

const Panels = () => {
    return (
        <div id="panels">
            <PanelIntro />
            <PanelAbout />
            <PanelSocial />
        </div>
    )
}

export default Panels
