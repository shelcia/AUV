import React from "react";
import InstagramEmbed from "react-instagram-embed";
import ScrollAnimation from "react-animate-on-scroll";
import Loader from "react-loader-spinner";
import { useState } from "react";

const Loading = () => {
  return (
    <Loader type="MutatingDots" color="#0dc1f7" height={100} width={100} />
  );
};

const Instagram = ({ setView }) => {
  const [feed] = useState([
    `https://www.instagram.com/p/CE36fL7gjLH/`,
    `https://instagr.am/p/CD8uHoZg56y/`,
    `https://instagr.am/p/CClmUCyg1c8/`,
    `https://www.instagram.com/p/CACTIJTg4xD/`,
    `https://www.instagram.com/p/B7TvW1lgKDk/`,
    `https://www.instagram.com/p/B4NUILKAKwE/`,
    `https://www.instagram.com/p/B0U3RrJAn6-/`,
    `https://www.instagram.com/p/BwO1VwNAk6S/`,
    `https://www.instagram.com/p/BwEpizjgyOv/`,
    `https://instagr.am/p/CCq--regz9o/`,
    `https://instagr.am/p/CDrDFB-A1o8/`,
    `https://instagr.am/p/CDOzSQtAqRz/`,
    `https://www.instagram.com/p/B7YtOPbAsyD/`,
    `https://www.instagram.com/p/B5-fgp5AcTF/`,
    `https://www.instagram.com/p/B2EqTflAEEy/`,
    `https://www.instagram.com/p/BwTb05LAtrY/`,
    `https://www.instagram.com/p/BwJTW0PAh9G/`,
  ]);

  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
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
      <div className="col-sm-9 instagram-flow">
        <div className="instagram-feed">
          {feed.map((url) => (
            <InstagramEmbed
              key={url}
              url={url}
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => Loading()}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Instagram;
