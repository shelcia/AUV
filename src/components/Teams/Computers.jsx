import React from "react";
import Vyshnav from "../../assets/auv_photos_team/sopho_comp/Vyshnav K/0.jpeg";

const Computermodel = () => {
  return (
    <React.Fragment>
      <div className="modal" id="computers">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Computers</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <img src={Vyshnav} alt="Vyshnav" className="profile" />
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
