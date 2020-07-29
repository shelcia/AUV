import React from "react";

const Gallery = ({ setView }) => {
  return (
    <React.Fragment>
      <div className="nav">
        <p onClick={() => setView("instagram")}>instagram</p>
        <p onClick={() => setView("youtube")}>Youtube</p>
        <p className="active">Gallery</p>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
