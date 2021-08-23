import React from 'react';
import NavigationBar from '../header/NavigationBar';
import PricingWidget from '../pricingWidget/PricingWidget';

const HomePage = () => (
  <div>
    <div>
      <NavigationBar />
      <div style={{ display: 'flex' }}>
        <h1>Welcome To Tunafish</h1>
      </div>
    </div>
    <div style={{ backgroundColor: '#e3b505', height: 750 }} />
    <div style={{ backgroundColor: '#95190c', height: 750 }} />
    <div style={{ backgroundColor: '#610345', height: 750 }} />
    <div style={{ backgroundColor: '#107e7d', height: 750 }} />
    <div style={{ backgroundColor: '#044b7f', height: 750 }}>
      <PricingWidget />
    </div>
  </div>
);

export default HomePage;
