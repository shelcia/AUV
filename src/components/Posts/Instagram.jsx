import React from "react";

const Instagram = ({ setView }) => {
  return (
    <React.Fragment>
      <div className="nav">
        <p className="active">instagram</p>
        <p onClick={() => setView("youtube")}>Youtube</p>
        <p onClick={() => setView("gallery")}>Gallery</p>
      </div>
    </React.Fragment>
  );
};

export default Instagram;
