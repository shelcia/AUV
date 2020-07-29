import React, { useState } from "react";
import Instagram from "./Instagram";
import Youtube from "./Youtube";
import Gallery from "./Gallery";

const Posts = () => {
  const [view, setView] = useState("youtube");

  return (
    <React.Fragment>
      <div className="posts" id="post">
        <div className="grid">
          {view === "instagram" && <Instagram setView={setView} />}
          {view === "youtube" && <Youtube setView={setView} />}
          {view === "gallery" && <Gallery setView={setView} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
