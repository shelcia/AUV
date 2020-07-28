import React from "react";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Faces from "./assets/logo/face.svg";
import Github from "./assets/logo/github.svg";
import Medal from "./assets/logo/medal.svg";
import Trophy from "./assets/logo/trophy.svg";

const App = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <div className="about" id="about">
        <Navbar />
        <div className="container">
          <div className="info-container">
            <div className="text-container">
              <h6>Who we are?</h6>
              <p>
                We are an intellectual interdisciplinary team of undergraduate
                engineers working to build an autonomous underwater vehicle for
                various underwater robotics competitions. We aim to explore
                different dimensions of engineering, binding together our
                theoretical knowledge into a vehicle that can go and explore the
                vast seas.
              </p>
            </div>
            <div className="video">
              <iframe
                title="video"
                width="420"
                height="200"
                src="https://www.youtube.com/embed/NsHS6F2bjII?playlist=NsHS6F2bjII&loop=1"
              ></iframe>
            </div>
          </div>
          <div className="cards-container">
            <div className="cards">
              <img className="icon" src={Trophy} alt="" />
              <p>2 Vehicles</p>
            </div>
            <div className="cards">
              <img className="icon" src={Faces} alt="" />
              <p>30 Happy Members</p>
            </div>
            <div className="cards">
              <img className="icon" src={Github} alt="" />
              <p>9000+ lines of code</p>
            </div>
            <div className="cards">
              <img className="icon" src={Medal} alt="" />
              <p>17th place in SAUVC</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about" id="about"></div>
    </React.Fragment>
  );
};

export default App;
