import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Img1 from "../../assets/img/1.PNG";
import Img2 from "../../assets/img/2.JPG";
import Img3 from "../../assets/img/3.JPG";
import Img4 from "../../assets/img/4.JPG";
import Img5 from "../../assets/img/5.JPG";
import Img6 from "../../assets/img/6.JPG";
import Img7 from "../../assets/img/7.JPG";
import Img8 from "../../assets/img/8.JPG";
import Img9 from "../../assets/img/9.JPG";
import Img10 from "../../assets/img/10.JPG";
import Img11 from "../../assets/img/11.JPG";
import Img12 from "../../assets/img/12.JPG";
import Img13 from "../../assets/img/13.JPG";

const Modal = ({ img, setModalView }) => {
  console.log(img);
  console.log(img.clientWidth);
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog .modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const Gallery = ({ setView }) => {
  const [img, setImg] = useState({});
  const [firstColumn] = useState([Img1, Img2, Img3, Img10, Img13]);
  const [secondColumn] = useState([Img4, Img5, Img6, Img11]);
  const [thirdColumn] = useState([Img7, Img8, Img9, Img12]);

  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="list-group">
            <li
              className="list-group-item"
              onClick={() => setView("instagram")}
              style={{ cursor: "pointer !important" }}
            >
              Instagram
            </li>
            <li className="list-group-item" onClick={() => setView("youtube")}>
              Youtube
            </li>
            <li className="list-group-item active">Gallery</li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-9 flow-control">
        <ScrollAnimation animateIn="fadeIn">
          <div className="row">
            <div className="col-sm-4">
              {firstColumn.map((image) => (
                <div className="image-wrapper" key={image}>
                  <img
                    src={image}
                    alt=""
                    width="100%"
                    className="mb-3"
                    data-toggle="modal"
                    onClick={() => setImg(image)}
                    data-target="#imageModal"
                  />
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              {secondColumn.map((image) => (
                <div className="image-wrapper" key={image}>
                  <img
                    src={image}
                    alt=""
                    width="100%"
                    className="mb-3"
                    data-toggle="modal"
                    onClick={() => setImg(image)}
                    data-target="#imageModal"
                  />
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              {thirdColumn.map((image) => (
                <div className="image-wrapper" key={image}>
                  <img
                    src={image}
                    alt=""
                    width="100%"
                    className="mb-3"
                    data-toggle="modal"
                    onClick={() => setImg(image)}
                    data-target="#imageModal"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <Modal img={img} />
    </React.Fragment>
  );
};

export default Gallery;
