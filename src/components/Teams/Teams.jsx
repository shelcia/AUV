import React from "react";
import Computers from "../../assets/icons/face.svg";
import Electronics from "../../assets/icons/face.svg";
import Mechanical from "../../assets/icons/face.svg";
import Pastyear from "../../assets/icons/face.svg";

const Teams = () => {
  return (
    <React.Fragment>
      <div className="teams" id="team">
        <div className="container border">
          <h2 className="title" style={{ backgroundColor: "#161a22" }}>
            Teams
          </h2>
          <hr></hr>
          <div className="card-deck">
            <div className="card text-center p-4">
              <a href="https://bluerobotics.com/" target="blank">
                <img src={Computers} alt="Bluerobotics logo" height="50px" />
                <p className="m-3">Computers</p>
              </a>
            </div>
            <div className="card text-center p-4">
              <a href="https://www.simscale.com/" target="blank">
                <img src={Electronics} alt="Simscale logo" height="50px" />
                <p className="m-3">Electronics</p>
              </a>
            </div>
            <div className="card text-center p-4">
              <a href="https://www.iiitdm.ac.in/" target="blank">
                <img src={Mechanical} alt="IIITDM logo" height="50px" />
                <p className="m-3">Mechanical</p>
              </a>
            </div>
          </div>
          <div className="mt-3 mentor text-center">
            <h6 className="sub-heading">Past Years</h6>
            <div className="card-deck m-3">
              <div className="card text-center p-4">
                <a href="https://bluerobotics.com/" target="blank">
                  <img src={Pastyear} alt="Bluerobotics logo" height="50px" />
                  <p className="m-3">2019-2020</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Teams;
