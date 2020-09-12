import React from "react";
import SAUVC from "../assets/logo/sauvclogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const Achievements = () => {
  return (
    <React.Fragment>
      <div className="achievement" id="achievement">
        <div className="container">
          <h2 className="title" style={{ backgroundColor: "#161a22" }}>
            Achievements
          </h2>
          <hr></hr>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          17th Place in SAUVC 2019
                        </h6>
                        <p>
                          The SAUVC competition challenges participant teams to
                          build an AUV which can perform given tasks. The tasks
                          involve four widely faced challenges underwater such
                          as AUV navigation, visual identification, acoustic
                          localization and robotic manipulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row mt-5">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">Qualified in SAUVC 2020</h6>
                        <p>
                          The SAUVC competition challenges participant teams to
                          build an AUV which can perform given tasks. The tasks
                          involve four widely faced challenges underwater such
                          as AUV navigation, visual identification, acoustic
                          localization and robotic manipulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/Wj7A49-mySk?playlist=NsHS6F2bjII&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Achievements;
