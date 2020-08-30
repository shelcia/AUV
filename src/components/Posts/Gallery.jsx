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
      <div className="img-modal">
        <span className="closecursor" onClick={() => setModalView("false")}>
          &times;
        </span>
        <img src={img} alt="" />
      </div>
    </React.Fragment>
  );
};
const Gallery = ({ setView }) => {
  const [modalView, setModalView] = useState("false");
  const [img, setImg] = useState({});
  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeInLeft">
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
        <ScrollAnimation animateIn="fadeInRight">
          <div className="row">
            <div className="col-sm-4">
              <img
                src={Img1}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img1);
                }}
              />
              <img
                src={Img2}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img2);
                }}
              />
              <img
                src={Img3}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img3);
                }}
              />
              <img
                src={Img10}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img10);
                }}
              />
              <img
                src={Img13}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img13);
                }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={Img4}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img4);
                }}
              />
              <img
                src={Img5}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img5);
                }}
              />
              <img
                src={Img6}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img6);
                }}
              />
              <img
                src={Img11}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img11);
                }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={Img7}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img7);
                }}
              />
              <img
                src={Img8}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img8);
                }}
              />
              <img
                src={Img9}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img9);
                }}
              />
              <img
                src={Img12}
                alt=""
                width="100%"
                className="mb-3"
                onClick={() => {
                  setModalView("true");
                  setImg(Img12);
                }}
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {modalView === "true" && <Modal img={img} setModalView={setModalView} />}
    </React.Fragment>
  );
};

export default Gallery;
