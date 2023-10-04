import React, { useState } from 'react';
import Navigation from "./component/Navigation";
import ShowRoom from "./component/ShowRoom";
import CarState from './Context/CarState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  
  return (
    <CarState>
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/" element={<ShowRoom  />} />
        </Routes>
      </div>
    </Router>
  </CarState>
  );
}

export default App;
