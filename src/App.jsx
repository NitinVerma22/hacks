import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import RummyPage from "./pages/RummyPage";
import ColorPage from "./pages/ColorPage";
import OtherPage from "./pages/OtherPage";
import ReactGA from "react-ga4";

const trackingId = "G-M90600X77D";  // Replace with your GA tracking ID
ReactGA.initialize(trackingId);
function App() {
  ReactGA.send("pageview");
  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rummy" element={<RummyPage />} />
        <Route path="/color" element={<ColorPage />} />
        <Route path="/other" element={<OtherPage/>} />
      </Routes>
  
    </Router>
  );
}

export default App;
