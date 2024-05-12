import React from 'react';
import './App.css';
import doctorImage from './dr 2 analise k.jpeg';
import BlankWhitePage from './drdetails/drdetails';

function App() {
  return (
    <div className="container" style={{ background: 'linear-gradient(rgb(216, 247, 254), white)' }}>
      <div className="imageContainer">
        <img src={doctorImage} alt=" " className="doctorImage" />
      </div>
      <BlankWhitePage />
    </div>
  );
}

export default App;