import React from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";

const App = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <AboutPage />
      <AchievementsPage />
    </React.Fragment>
  );
};

export default App;
