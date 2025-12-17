import React from 'react';
import HomePage from './homePage';
import Foods from './foods';
import './mainContainer.css';
export default function MainContainer() {
 
  return (

    <div className="scroll-snap-container">
      
   
      <div className="scroll-snap-section">
        <HomePage />
      </div>
      
      <div className="scroll-snap-section">
        <Foods />
      </div>

    </div>
  );
}

