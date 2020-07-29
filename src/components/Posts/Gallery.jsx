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
  return (
    <React.Fragment>
      <div className="modal">
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
      <ScrollAnimation animateIn="fadeInLeft">
        <div className="nav">
          <p onClick={() => setView("instagram")}>instagram</p>
          <p onClick={() => setView("youtube")}>Youtube</p>
          <p className="active">Gallery</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight">
        <div className="media-container">
          <div className="gallery">
            <div className="row">
              <div className="column">
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img1);
                  }}
                  src={Img1}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img2);
                  }}
                  src={Img2}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img3);
                  }}
                  src={Img3}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img4);
                  }}
                  src={Img4}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img13);
                  }}
                  src={Img13}
                  alt=""
                />
              </div>
              <div className="column">
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img5);
                  }}
                  src={Img5}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img6);
                  }}
                  src={Img6}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img7);
                  }}
                  src={Img7}
                  alt=""
                />
              </div>
              <div className="column">
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img8);
                  }}
                  src={Img8}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img9);
                  }}
                  src={Img9}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img10);
                  }}
                  src={Img10}
                  alt=""
                />
              </div>
              <div className="column">
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img11);
                  }}
                  src={Img11}
                  alt=""
                />
                <img
                  onClick={() => {
                    setModalView("true");
                    setImg(Img12);
                  }}
                  src={Img12}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      {modalView === "true" && <Modal img={img} setModalView={setModalView} />}
    </React.Fragment>
  );
};

export default Gallery;
