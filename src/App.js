import React, { useState, useEffect } from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Sponsors from "./components/Sponsors";
import Posts from "./components/Posts/Posts";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact";
import Loader from "react-loader-spinner";
import "animate.css/animate.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Logo from "./assets/new_logo.png";

const Loading = () => (
  <div className="loading">
    <img src={Logo} alt="logo" width="150px" />
    <Loader type="MutatingDots" color="#0dc1f7" height={100} width={100} />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isLoading = null;
    isLoading = setTimeout(() => setLoading(false), 5000);
    return () => clearInterval(isLoading);
  });
  return (
    <React.Fragment>
      {loading && <Loading />}
      {!loading && (
        <React.Fragment>
          <LandingPage />
          <AboutPage />
          <AchievementsPage />
          <Sponsors />
          <Posts />
          <Teams />
          <Contact />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
