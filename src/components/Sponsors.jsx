import React from "react";
import BlueRobotics from "../assets/logo/BlueRobotics__white-min.png";
import SimScale from "../assets/logo/SimScale_logo_Rev_White.png";
import DRDO from "../assets/logo/DRDO_RIC_Logo-min.png";
import IIITDM from "../assets/logo/ilogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const Sponsors = () => {
  return (
    <React.Fragment>
      <div className="sponsors" id="sponsors">
        <ScrollAnimation animateIn="bounceInLeft">
          <div
            style={{
              marginTop: "18vh",
              marginBottom: "5vh",
            }}
            className="text-container"
          >
            <h3>Our Sponsors</h3>
          </div>
          <div className="cards-container">
            <div className="card">
              <img src={BlueRobotics} alt="Bluerobotics logo" />
              <p>Blue Robotics</p>
            </div>
            <div className="card">
              <img src={SimScale} alt="Simscale logo" />
              <p>Simscale</p>
            </div>
            <div className="card">
              <img src={DRDO} alt="DRDO logo" />
              <p>DRDO</p>
            </div>
            <div className="card">
              <img src={IIITDM} alt="IIITDM logo" />
              <p>IIITDM</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight">
          <div className="text-container">
            <h3>Interested in Us ???</h3>
          </div>
          <div className="button-container">
            <button type="button">Marketing Proposal</button>
            <button type="button">Donate US</button>
            <button type="button">Complete Documentation</button>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Sponsors;
