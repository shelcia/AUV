import React from "react";
import Sharath from "../../assets/auv_photos_team/core/Sharath Chander/0.jpeg";
import Mayank from "../../assets/auv_photos_team/core/Mayank Mehta/0.jpeg";
import Ravi from "../../assets/auv_photos_team/core/ravi kumar/0 (1).jpeg";
import Vishva from "../../assets/auv_photos_team/core/Vishva Bhate/0 (1).jpeg";
import Subash from "../../assets/auv_photos_team/core/subash/subash-min.jpg";

const Coremodal = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="coreteam">
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "600px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Core Team</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                <div className="profile-modal">
                  <img src={Sharath} alt="Sharath" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/sharath-chandar-bb145b14"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Sharath Chander</p>
                </div>
                <div className="profile-modal">
                  <img src={Mayank} alt="Mayank" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/mayank-n-mehta-468a47187"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Mayank Mehta</p>
                </div>
                <div className="profile-modal">
                  <img src={Ravi} alt="Ravi" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/ravikumar87/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Ravi Kumar</p>
                </div>
                <div className="profile-modal">
                  <img src={Vishva} alt="Vishva" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/vishva-bhate-a72847175/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>
                    Vishva Bhate
                    <br />
                    (Co-Leader)
                  </p>
                </div>
                <div className="profile-modal">
                  <img src={Subash} alt="Subash" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/subash-m-1bba75130/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>
                    Subash Mylraj
                    <br />
                    (Co-Leader)
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Coremodal;
