import React from "react";
import {TextField} from "@fluentui/react";

const SignupField = (props: {
    infoType: string
}) => {
    const [text, setText] = React.useState("");
    React.useEffect(() => {setText("")})

    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <TextField
                type="text"
                label={props.infoType}
                onChange={(event) => {
                    setText(event.currentTarget.value)
                }}
            />
        </div>
    );
};

export default SignupField;