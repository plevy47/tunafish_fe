import React from "react";
import {PrimaryButton} from "@fluentui/react";

const PricingPlan = (props: {
    planName: string
    planDescription: string
    planPrice: number
}) => {
    return(
        <div>
            <h2>
                {props.planName}
            </h2>
            <p>
                {props.planDescription}
            </p>
            <h1>
                ${props.planPrice}
            </h1>
            <PrimaryButton>
                Pay Now
            </PrimaryButton>
        </div>
    );
};

export default PricingPlan