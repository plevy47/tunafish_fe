import React from "react";

const Task = (props: {
    taskName: string
}) => {
    return (
        <div style={{display: "flex", marginTop: 7, width: "50%"}}>
            <div style={{display: "flex"}}>
                <div>
                    <span>{props.taskName}</span>
                </div>
            </div>
        </div>
    );
};

export default Task;