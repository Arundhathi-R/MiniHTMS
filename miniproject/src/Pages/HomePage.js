import React from 'react';
import './HomePage.css';
import logo from '../images/logo.PNG';

function BlankWhitePage() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" />
        <div className="hospital-name">Harmony Health Hospital</div>
      </div>
      <div className="tagline">Nurturing Health, Restoring Lives</div>
      <div className="buttons">
        <div>
          <button className="admin-button">Admin</button>
        </div>
        <div>
          <button className="patient-button">Patient</button>
        </div>
      </div>
    </div>
  );
}

export default BlankWhitePage;
