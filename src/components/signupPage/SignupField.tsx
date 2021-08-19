import React from "react";
import {TextField} from "@fluentui/react";

const SignupField = (props: {
    infoType: string
}) => {
    return (

        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <TextField
                type="text"
                label={props.infoType}
            />
        </div>
    );
};

export default SignupField;