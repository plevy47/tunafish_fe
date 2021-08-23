import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import './PricingPlan.css';

const PricingPlan = (props: {
  planName: string
  planDescription: string
  planPrice: number
}) => {
  const {
    planName,
    planDescription,
    planPrice,
  } = props;
  return (
    <div
      className="individual-pricing-plan"
    >
      <h2>
        {planName}
      </h2>
      <p>
        {planDescription}
      </p>
      <h1>
        $
        {planPrice}
      </h1>
      <PrimaryButton>
        Pay Now
      </PrimaryButton>
    </div>
  );
};

export default PricingPlan;
