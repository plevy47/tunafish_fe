import React from "react";
import {DefaultButton} from "@fluentui/react";
import {Link} from "react-router-dom";

const NavigationLink = (props: {
    linkPath: string
    linkName: string
}) => {
    return(
        <Link to={props.linkPath}>
            <DefaultButton>
                {props.linkName}
            </DefaultButton>
        </Link>
    )
}

export default NavigationLink