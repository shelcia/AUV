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
        <ScrollAnimation animateIn="fadeIn">
          <div className="container">
            <h2 className="title" style={{ backgroundColor: "#161a22" }}>
              Our Sponsors
            </h2>
            <hr></hr>
            <div className="card-container p-4 ">
              <div className="cards">
                <a href="https://bluerobotics.com/" target="blank">
                  <img src={BlueRobotics} alt="Bluerobotics logo" />
                  <p>Blue Robotics</p>
                </a>
              </div>
              <div className="cards">
                <a href="https://www.simscale.com/" target="blank">
                  <img src={SimScale} alt="Simscale logo" />
                  <p>Simscale</p>
                </a>
              </div>
              <div className="cards">
                <a href="https://www.iiitdm.ac.in/" target="blank">
                  <img src={IIITDM} alt="IIITDM logo" />
                  <p>IIITDM</p>
                </a>
              </div>
            </div>
            <div className="mt-3 mentor text-center">
              <h6 className="sub-heading mb-3">Mentored by</h6>
              <div className="card text-center p-4">
                <a href="https://www.drdo.gov.in/home" target="blank">
                  <img src={DRDO} alt="DRDO logo" height="50px" />
                  <p>DRDO</p>
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Sponsors;
