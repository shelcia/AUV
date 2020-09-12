import React from "react";
import Samrat from "../../assets/auv_photos_team/brilliantminds/Samrat Nachiyappan/0.jpeg";
import Shelcia from "../../assets/auv_photos_team/brilliantminds/Shelcia/1.JPG";
import Praveen from "../../assets/auv_photos_team/brilliantminds/v s praveen/0.jpeg";

const BrilliantMindmodal = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="brilliant">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Brilliant Minds</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                <div className="profile-modal">
                  <img src={Samrat} alt="Samrat" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/samrat-nachiyappan-62ba01148/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Samrat</p>
                </div>
                <div className="profile-modal">
                  <img src={Shelcia} alt="Shelcia" className="profile" />
                  <a href="https://www.linkedin.com/in/shelcia/" target="blank">
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Shelcia</p>
                </div>
                <div className="profile-modal">
                  <img src={Praveen} alt="Praveen" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/v-s-praveen-74268988/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Praveen</p>
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

export default BrilliantMindmodal;
