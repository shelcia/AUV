import React from "react";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <div className="about" id="about">
        <Navbar />
      </div>
      <div className="about" id="about"></div>
    </React.Fragment>
  );
};

export default App;
