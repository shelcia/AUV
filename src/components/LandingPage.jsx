import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landingpage">
        <div className="overlay">
          <div className="loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
          <h2>Team AUV</h2>
          <br />
          <h2>IIITDM Kancheepuram</h2>
          <a href="#about">
            <button type="button">Explore</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
