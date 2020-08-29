import React from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Sponsors from "./components/Sponsors";
import Posts from "./components/Posts/Posts";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact";
import "animate.css/animate.min.css";

const App = () => {
  return (
    <React.Fragment>
      <div data-spy="scroll" data-target=".navbar" data-offset="50">
        <LandingPage />
        <AboutPage />
        <AchievementsPage />
        <Sponsors />
        <Posts />
        <Teams />
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default App;
