import React from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Sponsors from "./components/Sponsors";
import "animate.css/animate.min.css";

const App = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <AboutPage />
      <AchievementsPage />
      <Sponsors />
    </React.Fragment>
  );
};

export default App;
