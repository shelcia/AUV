import React from "react";
import Thilak from "../../assets/auv_photos_team/sopho_ele/Thilak/ThilakDP.jpg";

const Electronicmodal = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="electronics">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Electronics</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                <div className="profile-modal">
                  <img src={Thilak} alt="Thilak" className="profile" />
                  <a
                    href="https://www.instagram.com/thilak_karanam/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Thilak</p>
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

export default Electronicmodal;
