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
import PastYear1920Modal from "./PastYear1920";
import PastYear1819Modal from "./PastYear1819";
import Coremodal from "./Core";
import ScrollAnimation from "react-animate-on-scroll";

const Teams = () => {
  return (
    <React.Fragment>
      <div className="teams" id="team">
        <div className="container">
          <Coremodal />
          <ComputerModal />
          <ElectronicsModal />
          <MechanicalModal />
          <BrilliantMindModal />
          <PastYear1920Modal />
          <PastYear1819Modal />

          <h2 className="title" style={{ backgroundColor: "#161a22" }}>
            Teams
          </h2>
          <hr></hr>
          <ScrollAnimation animateIn="fadeIn">
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
              </div>
            </div>
          </ScrollAnimation>
          <div className="text-center mb-3">
            <h6 className="sub-heading mx-auto">Past Years</h6>
          </div>
          <ScrollAnimation animateIn="fadeIn">
            <div className="card-container pb-3 text-center mb-3 center-cards">
              <div className="cards">
                <button
                  className="card-button"
                  data-toggle="modal"
                  data-target="#past1920team"
                >
                  <img src={Pastyear} alt="2019-2020" />
                  <p className="m-3">2019-2020</p>
                </button>
              </div>
              <div className="cards">
                <button
                  className="card-button"
                  data-toggle="modal"
                  data-target="#past1819team"
                >
                  <img src={Pastyear} alt="2018-2019" />
                  <p className="m-3">2018-2019</p>
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Teams;
