import React from "react";
import Advaith from "../../assets/auv_photos_team/sopho_mech/Advaith Kandiraju/0.jpeg";
import Ruthwik from "../../assets/auv_photos_team/sopho_mech/Ruthwik Dasyam/Image.jpg";
import Saksham from "../../assets/auv_photos_team/sopho_mech/Saksham Mishra/0 (1).jpeg";
import Sukesh from "../../assets/auv_photos_team/sopho_mech/Sukesh/WhatsApp Image 2020-04-07 at 8.49.27 AM.jpeg";

const Mechanicalmodel = () => {
  return (
    <React.Fragment>
      <div className="modal" id="mechanical">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Mechanical</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <img src={Advaith} alt="advaith" className="profile" />
              <img src={Ruthwik} alt="ruthwik" className="profile" />
              <img src={Saksham} alt="saksham" className="profile" />
              <img src={Sukesh} alt="sukesh" className="profile" />
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
