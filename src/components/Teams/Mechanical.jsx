import React from "react";

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
            <div className="modal-body">Modal body..</div>
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
