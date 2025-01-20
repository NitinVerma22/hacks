import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import RummyPage from "./pages/RummyPage";
import ColorPage from "./pages/ColorPage";
import OtherPage from "./pages/OtherPage";

function App() {
  return (
    <Router>
      <Switch>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rummy" element={<RummyPage />} />
        <Route path="/color" element={<ColorPage />} />
        <Route path="/other" element={<OtherPage/>} />
      </Routes>
      </Switch>
    </Router>
  );
}

export default App;
