import React, { useState } from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Sponsors from "./components/Sponsors";
import "animate.css/animate.min.css";

const App = () => {
  const [view, setView] = useState("instagram");
  return (
    <React.Fragment>
      <LandingPage />
      <AboutPage />
      <AchievementsPage />
      <Sponsors />
      <div className="posts">
        {view === "instgram" && (
          <div className="instagram">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {view === "youtube" && <div className="youtube"></div>}
        {view === "gallery" && <div className="gallery"></div>}
      </div>
    </React.Fragment>
  );
};

export default App;
