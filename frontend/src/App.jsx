import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ARVRComponent from "./components/ARVRcomponent";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>AI + AR/VR Training</h1>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ar-vr" element={<ARVRComponent />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p className="footer-content">Team Byte Craft</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
