import React from 'react';
import NavigationBar from "../header/NavigationBar";
import "./PricingWidget.css"
import PricingPlan from "./PricingPlan";

const PricingWidget = () => {
    return (
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div
                className="pricing-widget"
            >
                <div
                className="pricing-container"
                >
                    <h1>
                        Choose From One of Our Pricing Plans
                    </h1>
                    <div
                        className="pricing-plan"
                    >
                       <PricingPlan
                           planName="Basic"
                           planDescription="lorem ipsum"
                           planPrice={20}
                       />
                        <PricingPlan
                            planName="Advanced"
                            planDescription="lorem ipsum"
                            planPrice={50}
                        />
                        <PricingPlan
                            planName="Premium"
                            planDescription="lorem ipsum"
                            planPrice={120}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PricingWidget;