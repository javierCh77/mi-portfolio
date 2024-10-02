// Rocket.jsx
import React from 'react';
import './rocket-style.css';

const Rocket = () => {
  return (
 
    <div className="rocket">
      <div className="rocket-body">
        <div className="body"></div>
        <div className="fin fin-left"></div>
        <div className="fin fin-right"></div>
        <div className="window"></div>
      </div>
      <div className="exhaust-flame"></div>
      
      <ul className="star">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

  );
};

export default Rocket;
