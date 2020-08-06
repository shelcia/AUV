import React, { useState } from "react";
import InstagramEmbed from "react-instagram-embed";

const Instagram = ({ setView }) => {
  const links = useState([
    { id: 1, url: "CDOzSQtAqRz/" },
    { id: 2, url: "CCq--regz9o/" },
    { id: 3, url: "CClmUCyg1c8/" },
  ]);
  return (
    <React.Fragment>
      <div className="nav">
        <p className="active">instagram</p>
        <p onClick={() => setView("youtube")}>Youtube</p>
        <p onClick={() => setView("gallery")}>Gallery</p>
      </div>
      {/* {links.map((link) => (
        <InstagramEmbed
          url={`https://instagr.am/p/Zw9o4/`}
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      ))} */}
      <div className="powr-instagram-feed" id="dd429f15_1596699972"></div>
      <script src="https://www.powr.io/powr.js?platform=react"></script>
    </React.Fragment>
  );
};

export default Instagram;
