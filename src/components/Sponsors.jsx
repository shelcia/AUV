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
          <div className="container border">
            <h2 className="title" style={{ backgroundColor: "#161a22" }}>
              Our Sponsors
            </h2>
            <hr></hr>
            <div className="card-deck">
              <div className="card text-center p-4">
                <a href="https://bluerobotics.com/" target="blank">
                  <img
                    src={BlueRobotics}
                    alt="Bluerobotics logo"
                    height="50px"
                  />
                  <p className="m-3">Blue Robotics</p>
                </a>
              </div>
              <div className="card text-center p-4">
                <a href="https://www.simscale.com/" target="blank">
                  <img src={SimScale} alt="Simscale logo" height="50px" />
                  <p className="m-3">Simscale</p>
                </a>
              </div>
              <div className="card text-center p-4">
                <a href="https://www.iiitdm.ac.in/" target="blank">
                  <img src={IIITDM} alt="IIITDM logo" height="50px" />
                  <p className="m-3">IIITDM</p>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            style={{
              marginTop: "18vh",
              marginBottom: "5vh",
            }}
            className="text-container"
          >
            <h3>Our Sponsors</h3>
          </div>
          <div className="cards-container">
            <a href="https://bluerobotics.com/" target="blank">
              <div className="card">
                <img src={BlueRobotics} alt="Bluerobotics logo" />
                <p>Blue Robotics</p>
              </div>
            </a>
            <a href="https://www.simscale.com/" target="blank">
              <div className="card">
                <img src={SimScale} alt="Simscale logo" />
                <p>Simscale</p>
              </div>
            </a>
            <a href="https://www.drdo.gov.in/home" target="blank">
              <div className="card">
                <img src={DRDO} alt="DRDO logo" />
                <p>DRDO</p>
              </div>
            </a>
            <a href="https://www.iiitdm.ac.in/" target="blank">
              <div className="card">
                <img src={IIITDM} alt="IIITDM logo" />
                <p>IIITDM</p>
              </div>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="text-container">
            <h3>Interested in Us ???</h3>
          </div>
          <div className="button-container">
            <button type="button">Marketing Proposal</button>
            <a
              href="https://www.ketto.org/fundraiser/fund-the-auv-society-for-team-orca"
              target="blank"
            >
              <button type="button">Donate US</button>
            </a>

            <button type="button">Complete Documentation</button>
          </div> */}
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Sponsors;
