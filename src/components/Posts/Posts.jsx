import React, { useState } from "react";
import Instagram from "./Instagram";
import Youtube from "./Youtube";
import Gallery from "./Gallery";

const Posts = () => {
  const [view, setView] = useState("youtube");

  return (
    <React.Fragment>
      <div className="posts" id="post">
        <div className="container flow-control border">
          <h2 className="title">Posts</h2>
          <hr></hr>
          <div className="row">
            {view === "instagram" && <Instagram setView={setView} />}
            {view === "youtube" && <Youtube setView={setView} />}
            {view === "gallery" && <Gallery setView={setView} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
