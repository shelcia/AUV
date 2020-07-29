import React from "react";
import SAUVC from "../assets/logo/sauvclogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const Achievements = () => {
  return (
    <React.Fragment>
      <div className="achievement" id="achievement">
        <div className="container">
          <div className="badge-container">
            <ScrollAnimation animateIn="slideInDown">
              <div className="badge">
                <div className="logo">
                  <img src={SAUVC} alt=""></img>
                </div>
                <div className="text-container">
                  <h6>17th Place in SAUVC 2019</h6>
                  <p>
                    The SAUVC competition challenges participant teams to build
                    an AUV which can perform given tasks. These tasks are
                    simulations of tasks operational AUVs would have to be able
                    to perform. The tasks involve four widely faced challenges
                    underwater such as AUV navigation, visual identification,
                    acoustic localization and robotic manipulation.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInDown">
              <div style={{ marginTop: "20px" }} className="badge">
                <div className="logo">
                  <img src={SAUVC} alt=""></img>
                </div>
                <div className="text-container">
                  <h6>Qualified in SAUVC 2020</h6>
                  <p>
                    The SAUVC competition challenges participant teams to build
                    an AUV which can perform given tasks. These tasks are
                    simulations of tasks operational AUVs would have to be able
                    to perform. The tasks involve four widely faced challenges
                    underwater such as AUV navigation, visual identification,
                    acoustic localization and robotic manipulation.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="video-container">
            <iframe
              title="video"
              width="260"
              height="150"
              src="https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
            ></iframe>
            <iframe
              style={{ marginTop: "20px" }}
              title="video"
              width="260"
              height="150"
              src="https://www.youtube.com/embed/Wj7A49-mySk?playlist=NsHS6F2bjII&loop=1"
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Achievements;
