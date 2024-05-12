//App.js
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup/signup';
import LiveTokenDisplay from './livetoken/livetoken';
import Viewdetails from './viewappointment/view';
import Appntbook from './appntbook/appntbook';

function App() {
  return (
    
    <Router>
      <Routes>
       <Route exact path="/" element={<Signup/>} />
        <Route path="/appntbook/appntbook" element={<Appntbook/>} />
        <Route path="/livetoken/livetoken" element={<LiveTokenDisplay/>}/>
        <Route path="/viewappointment/view" element={<Viewdetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
