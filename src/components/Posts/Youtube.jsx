import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Youtube = ({ setView }) => {
  const [links] = useState([
    { id: 1, url: "zgak4T-eD4E" },
    { id: 2, url: "Bi_8wSK4RbY" },
    { id: 3, url: "R_YFBV0oitY" },
    { id: 4, url: "6_jYga7N7s0" },
    { id: 5, url: "rX3NWFIJjBs" },
    { id: 6, url: "KObUgd-6gfU" },
    { id: 7, url: "Wj7A49-mySk" },
    { id: 8, url: "c58AMctLp04" },
    { id: 9, url: "NsHS6F2bjII" },
  ]);
  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="list-group">
            <li
              className="list-group-item"
              onClick={() => setView("instagram")}
            >
              Instagram
            </li>
            <li className="list-group-item active">Youtube</li>
            <li className="list-group-item" onClick={() => setView("gallery")}>
              Gallery
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-9 flow-control ">
        <ScrollAnimation animateIn="fadeIn">
          <div className="row">
            {links.map((link) => (
              <div className="col-sm-6" key={link.id}>
                <iframe
                  title="video"
                  src={`https://www.youtube.com/embed/${link.url}?playlist=NsHS6F2bjII&loop=1`}
                  className="youtube"
                ></iframe>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Youtube;
