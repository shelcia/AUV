import React, { useState } from "react";

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
      <div className="nav">
        <p onClick={() => setView("instagram")}>instagram</p>
        <p className="active">Youtube</p>
        <p onClick={() => setView("gallery")}>Gallery</p>
      </div>
      <div className="media-container">
        <div className="youtube">
          {links.map((link) => (
            <iframe
              title="video"
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${link.url}?playlist=NsHS6F2bjII&loop=1`}
            ></iframe>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Youtube;
