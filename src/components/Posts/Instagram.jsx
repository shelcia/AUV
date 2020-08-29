import React, { useState } from "react";
import InstagramEmbed from "react-instagram-embed";
import ScrollAnimation from "react-animate-on-scroll";

const Instagram = ({ setView }) => {
  // const links = useState([
  //   { id: 1, url: "CD8uHoZg56y" },
  //   // { id: 2, url: "CCq--regz9o/" },
  //   // { id: 3, url: "CClmUCyg1c8/" },
  // ]);
  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeInLeft">
          <ul className="list-group">
            <li className="list-group-item  active">Instagram</li>
            <li className="list-group-item" onClick={() => setView("youtube")}>
              Youtube
            </li>
            <li className="list-group-item" onClick={() => setView("gallery")}>
              Gallery
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-9 flow-control">
        <div className="instagram-feed">
          <InstagramEmbed
            url={`https://instagr.am/p/CD8uHoZg56y/`}
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
          <InstagramEmbed
            url={`https://instagr.am/p/CD8uHoZg56y/`}
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Instagram;
