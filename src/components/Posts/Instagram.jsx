import React from "react";
import InstagramEmbed from "react-instagram-embed";
import ScrollAnimation from "react-animate-on-scroll";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Loader type="MutatingDots" color="#0dc1f7" height={100} width={100} />
  );
};

const Instagram = ({ setView }) => {
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
          <div className="row">
            <div className="col-sm-6 mb-3">
              <InstagramEmbed
                url={`https://instagr.am/p/CD8uHoZg56y/`}
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
              <InstagramEmbed
                url={`https://instagr.am/p/CClmUCyg1c8/`}
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
                url={`https://instagr.am/p/CCq--regz9o/`}
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
            <div className="col-sm-6">
              <InstagramEmbed
                url={`https://instagr.am/p/CDrDFB-A1o8/`}
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
                url={`https://instagr.am/p/CDOzSQtAqRz/`}
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Instagram;
