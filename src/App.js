import React, { useState, useEffect } from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Vehicles from "./components/Vehicles/Vehicles";
import Sponsors from "./components/Sponsors";
import Posts from "./components/Posts/Posts";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "react-loader-spinner";
import "animate.css/animate.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Logo from "./assets/new_logo.png";

const Loading = () => (
  <div className="loading">
    <img src={Logo} alt="logo" />
    <Loader type="MutatingDots" color="#0dc1f7" height={100} width={100} />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isLoading = null;
    isLoading = setTimeout(() => setLoading(false), 6000);
    return () => clearInterval(isLoading);
  });
  return (
    <React.Fragment>
      {loading && <Loading />}
      {!loading && (
        <React.Fragment>
          <LandingPage />
          <Navbar />
          <AboutPage />
          <AchievementsPage />
          <Vehicles />
          <Sponsors />
          <Posts />
          <Teams />
          <Contact />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
