import React from 'react';
import NavigationLink from './NavigationLink';

const NavigationBar = () => (
  <div
    className="navigation-bar"
  >
    <NavigationLink
      linkPath="./"
      linkName="Home"
    />
    <NavigationLink
      linkPath="./signup"
      linkName="Signup"
    />
    <NavigationLink
      linkPath="./pricing"
      linkName="Pricing"
    />
    <NavigationLink
      linkPath="./task-entry"
      linkName="Task Entry"
    />
  </div>
);

export default NavigationBar;
