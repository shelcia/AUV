import React from "react";
import Arjun from "../../assets/auv_photos_team/2019-2020/arjun.jpg";
import Anu from "../../assets/auv_photos_team/2019-2020/anupriya.jpeg";
import Charan from "../../assets/auv_photos_team/2019-2020/charan.jpg";
import Daware from "../../assets/auv_photos_team/2019-2020/daware.jpg";
import Chit from "../../assets/auv_photos_team/2019-2020/chit.jpg";
import Govind from "../../assets/auv_photos_team/2019-2020/govind.png";
import Mayank from "../../assets/auv_photos_team/2019-2020/mayank.jpg";
import Prathamesh from "../../assets/auv_photos_team/2019-2020/prathamesh.jpg";
import Ram from "../../assets/auv_photos_team/2019-2020/ram.jpg";
import Ravi from "../../assets/auv_photos_team/2019-2020/ravi.jpg";
import Roshan from "../../assets/auv_photos_team/2019-2020/roshan.jpg";
import Sandeep from "../../assets/auv_photos_team/2019-2020/sandeep.jpg";
import Shramona from "../../assets/auv_photos_team/2019-2020/shramona.jpg";
import Subhash from "../../assets/auv_photos_team/2019-2020/subash-min.jpg";
import Vaishali from "../../assets/auv_photos_team/2019-2020/vaishali.jpg";
import Vishva from "../../assets/auv_photos_team/2019-2020/vishva.psd";

const PastYear1920modal = () => {
  return (
    <React.Fragment>
      <div className="modal" id="electronics">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">2019-2020</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <img src={Charan} alt="Sharath" className="profile" />
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

export default PastYear1920modal;
