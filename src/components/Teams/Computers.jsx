import React from "react";
import Vyshnav from "../../assets/auv_photos_team/sopho_comp/Vyshnav K/0.jpeg";

const Computermodel = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="computers">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Computers</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                <div className="profile-modal">
                  <img src={Vyshnav} alt="Vyshnav" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/vyshnav-k-68b446191/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Vyshnav K</p>
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

export default Computermodel;
