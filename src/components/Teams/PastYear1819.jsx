import React from "react";

import Daware from "../../assets/auv_photos_team/2019-2020/daware.jpg";
import Chit from "../../assets/auv_photos_team/2019-2020/chit.jpg";
import Govind from "../../assets/auv_photos_team/2019-2020/govind.png";
import Prathamesh from "../../assets/auv_photos_team/2019-2020/prathamesh.jpg";
import Ram from "../../assets/auv_photos_team/2019-2020/ram.jpg";
import Roshan from "../../assets/auv_photos_team/2019-2020/roshan.jpg";
import Sandesh from "../../assets/auv_photos_team/2019-2020/sandesh.jpg";
import Vishva from "../../assets/auv_photos_team/2019-2020/vishva.jpg";

const PastYear1920modal = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="past1819team">
        <div className="modal-dialog pastteam modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">2018-2019</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                <div className="profile-modal">
                  <img
                    src={Sandesh}
                    alt="Sandesh Bharadwaj"
                    className="profile"
                  />
                  <a
                    href="https://www.linkedin.com/in/sandeshbharadwaj97"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Sandesh Bharadwaj</p>
                </div>
                <div className="profile-modal">
                  <img src={Chit} alt="Chitrartha Dixit" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/chitrartha-dixit-342436166"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Chitrartha Dixit</p>
                </div>
                <div className="profile-modal">
                  <img src={Ram} alt="Ram Bahal Tiwari" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/ram-bahal-tiwari-342a3a169"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Ram Bahal Tiwari</p>
                </div>
                <div className="profile-modal">
                  <img src={Roshan} alt="Roshan" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/roshan-patel-07b578138/?originalSubdomain=in"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Roshan</p>
                </div>
                <div className="profile-modal">
                  <img
                    src={Daware}
                    alt="Prathamesh Daware"
                    className="profile"
                  />
                  <a
                    href="https://www.linkedin.com/in/prathamesh-daware-0b3483185/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Prathamesh Daware</p>
                </div>
                <div className="profile-modal">
                  <img src={Vishva} alt="Vishva Bhate" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/vishva-bhate-a72847175/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Vishva Bhate</p>
                </div>
                <div className="profile-modal">
                  <img src={Govind} alt="Govind K.P." className="profile" />
                  <a href="https://in.linkedin.com/in/govind-kp" target="blank">
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Govind K.P.</p>
                </div>
                <div className="profile-modal">
                  <img
                    src={Prathamesh}
                    alt="Prathamesh Degwekar"
                    className="profile"
                  />
                  <a
                    href="https://www.linkedin.com/in/prathamesh-degwekar-0575b2b9/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Prathamesh Degwekar</p>
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
      </div>
    </React.Fragment>
  );
};

export default PastYear1920modal;
