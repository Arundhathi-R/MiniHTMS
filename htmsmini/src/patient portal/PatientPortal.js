import React from 'react';
import './PatientPortal.css'; // Import CSS file for styling

const PatientPortal = () => {
  return (
    <div className="patient-portal-container">
      <h1 className="patient-title">PATIENT</h1>
      <div className="image-upload-container">
        <label htmlFor="image-upload" className="image-upload-label">
          Insert image here
          <input type="file" id="image-upload" className="image-upload-input" accept="image/*" />
        </label>
      </div>
      <button className="appointment-history-button">Appointment History</button>
      <h2 className="choose-doctor-title">Choose your doctor</h2>
      <div className="doctor-carousel">
        <div className="doctor-card">
          <img src="doctor1.jpg" alt="Doctor 1" className="doctor-image" />
          <div className="doctor-info">
            <p className="doctor-name">Dr. John Doe</p>
            <p className="doctor-department">Cardiology</p>
          </div>
        </div>
        <div className="doctor-card">
          <img src="doctor2.jpg" alt="Doctor 2" className="doctor-image" />
          <div className="doctor-info">
            <p className="doctor-name">Dr. Jane Smith</p>
            <p className="doctor-department">Pediatrics</p>
          </div>
        </div>
        {/* More doctor cards */}
      </div>
      <div className="scroll-container">
        <button className="scroll-button scroll-left">&#60;</button>
        <button className="scroll-button scroll-right">&#62;</button>
      </div>
    </div>
  );
}

export default PatientPortal;