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
  const [dataCarCount, setCarCount] = useState(null);
  const carCount = (data) => {
    data === null ? setCarCount(5) : setCarCount(data);
  }
  console.log(dataCarCount);

  return (
    <CarState>
    <Router>
      <div className="App">
        <Navigation carCount={ dataCarCount } />
        <Routes>
          <Route path="/" element={<ShowRoom sendDataToParent={carCount} />} />
        </Routes>
      </div>
    </Router>
  </CarState>
  );
}

export default App;
