import React from "react";
import Sharath from "../../assets/auv_photos_team/core/Sharath Chander/0.jpeg";
import Mayank from "../../assets/auv_photos_team/core/Mayank Mehta/0.jpeg";
import Ravi from "../../assets/auv_photos_team/core/ravi kumar/0 (1).jpeg";
import Vishva from "../../assets/auv_photos_team/core/Vishva Bhate/0 (1).jpeg";
import Subash from "../../assets/auv_photos_team/core/subash/1.jpeg";

const Coremodal = () => {
  return (
    <React.Fragment>
      <div className="modal" id="coreteam">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Core Team</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <img src={Sharath} alt="Sharath" className="profile" />
              <img src={Mayank} alt="Mayank" className="profile" />
              <img src={Ravi} alt="Ravi Kumar" className="profile" />
              <img src={Vishva} alt="Vishva Bhate" className="profile" />
              <img src={Subash} alt="Subash" className="profile" />
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
