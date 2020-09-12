import React from "react";
import Advaith from "../../assets/auv_photos_team/sopho_mech/Advaith Kandiraju/0.jpeg";
import Ruthwik from "../../assets/auv_photos_team/sopho_mech/Ruthwik Dasyam/Image.jpg";
import Saksham from "../../assets/auv_photos_team/sopho_mech/Saksham Mishra/0 (1).jpeg";
import Sukesh from "../../assets/auv_photos_team/sopho_mech/Sukesh/sukesh.jpeg";

const Mechanicalmodel = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="mechanical">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Mechanical</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                <div className="profile-modal">
                  <img src={Advaith} alt="advaith" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/advaith-kandiraju-14320517a/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Advaith Kandiraju</p>
                </div>
                <div className="profile-modal">
                  <img src={Ruthwik} alt="ruthwik" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/ruthwikdasyam/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Ruthwik Dasyam</p>
                </div>
                <div className="profile-modal">
                  <img src={Saksham} alt="saksham" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/saksham-mishra-a00153177/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Saksham Mishra</p>
                </div>
                <div className="profile-modal">
                  <img src={Sukesh} alt="saksham" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/sukesh-j-r-8809b4191/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Sukesh</p>
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

export default Mechanicalmodel;
