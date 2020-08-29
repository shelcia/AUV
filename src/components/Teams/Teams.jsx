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
        <div className="container">
          <h2 className="title" style={{ backgroundColor: "#161a22" }}>
            Teams
          </h2>
          <hr></hr>
          <div className="card-container pb-3 mb-3">
            <div className="cards">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#coreteam"
              >
                <img src={CoreTeam} alt="Core team logo" />
                <p className="m-3">Core Team</p>
              </button>
              <Coremodal />
            </div>
            <div className="cards">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#computers"
              >
                <img src={Computers} alt="Computers logo" />
                <p className="m-3">Computers</p>
              </button>
              <ComputerModal />
            </div>
            <div className="cards">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#electronics"
              >
                <img src={Electronics} alt="Electronic logo" />
                <p className="m-3">Electronics</p>
              </button>
              <ElectronicsModal />
            </div>
            <div className="cards">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#mechanical"
              >
                <img src={Mechanical} alt="Mechanical logo" />
                <p className="m-3">Mechanical</p>
              </button>
              <MechanicalModal />
            </div>
            <div className="cards">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#brilliant"
              >
                <img src={BriiliantMind} alt="Brilliant Mind logo" />
                <p className="m-3">Brilliant Minds</p>
              </button>
              <BrilliantMindModal />
            </div>
          </div>
          <div className="text-center mb-3">
            <h6 className="sub-heading mx-auto">Past Years</h6>
          </div>

          <div className="card-container pb-3 text-center mb-3">
            <div className="cards">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#coreteam"
              >
                <img src={Pastyear} alt="2019-2020" />
                <p className="m-3">2019-2020</p>
              </button>
              <Coremodal />
            </div>
            <div className="cards">
              <button
                className="card-button"
                data-toggle="modal"
                data-target="#computers"
              >
                <img src={Pastyear} alt="2018-2019" />
                <p className="m-3">2018-2019</p>
              </button>
              <ComputerModal />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Teams;
