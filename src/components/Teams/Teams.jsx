import React from "react";
import CoreTeam from "../../assets/icons/core.png";
import Computers from "../../assets/icons/code.png";
import Electronics from "../../assets/icons/Electronics.png";
import Mechanical from "../../assets/icons/mechanical.png";
import BriiliantMind from "../../assets/icons/idea.png";
import Pastyear from "../../assets/icons/people.png";
import ComputerModal from "./Computers";
import ElectronicsModal from "./Electronics";
import MechanicalModal from "./Mechanical";
import BrilliantMindModal from "./BrilliantMinds";
import Coremodal from "./Core";

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
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#coreteam"
              >
                <img src={CoreTeam} alt="Core team logo" height="50px" />
                <p className="m-3">Core Team</p>
              </button>
              <Coremodal />
            </div>
            <div className="card text-center p-4">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#computers"
              >
                <img src={Computers} alt="Computers logo" height="50px" />
                <p className="m-3">Computers</p>
              </button>
              <ComputerModal />
            </div>
            <div className="card text-center p-4">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#electronics"
              >
                <img src={Electronics} alt="Electronic logo" height="50px" />
                <p className="m-3">Electronics</p>
              </button>
              <ElectronicsModal />
            </div>
            <div className="card text-center p-4">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#mechanical"
              >
                <img src={Mechanical} alt="Mechanical logo" height="50px" />
                <p className="m-3">Mechanical</p>
              </button>
              <MechanicalModal />
            </div>

            <div className="card text-center p-4">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#brilliant"
              >
                <img
                  src={BriiliantMind}
                  alt="Brilliant Mind logo"
                  height="50px"
                />
                <p className="m-3">Brilliant Minds</p>
              </button>
              <BrilliantMindModal />
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
