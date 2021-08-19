import React from "react";
import NavigationLink from "./NavigationLink";

const NavigationBar = () => {

    return (
        <div
            className="navigation-bar"
        >
            <NavigationLink
                linkPath={"./"}
                linkName={"Home"}
            />
            <NavigationLink
                linkPath={'./signup'}
                linkName={"Signup"}
            />
            <NavigationLink
                linkPath={'./task-entry'}
                linkName={"Task Entry"}
            />
            <NavigationLink
                linkPath={'./pricing'}
                linkName={"Pricing"}
            />
        </div>
    )
}

export default NavigationBar;