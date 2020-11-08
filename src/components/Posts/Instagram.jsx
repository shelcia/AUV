import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";

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

  useEffect(() => {
    const getInstagramFeed = () => {
      // eslint-disable-next-line array-callback-return
      feed.map((feed) => {
        axios
          .get(
            `https://graph.facebook.com/v8.0/instagram_oembed?url=${feed}&access_token=368302131272255|i5AeKmUAjx8BVo2q0NMU3LI7J0s`
          )
          .then((response) => {
            console.log(response);
            document.getElementsByClassName("instagram-feed")[0].innerHTML =
              document.getElementsByClassName("instagram-feed")[0].innerHTML +
              // response.data.html +
              `<div class="feed"><img src=${response.data.thumbnail_url} class="img-fluid thumbnail"/>${response.data.html}</div>`;
          })
          .catch((error) => console.log(error));
      });
    };
    getInstagramFeed();
  }, [feed]);

  return (
    <React.Fragment>
      <div className='col-sm-3'>
        <ScrollAnimation animateIn='fadeIn'>
          <ul className='list-group'>
            <li className='list-group-item  active'>Instagram</li>
            <li className='list-group-item' onClick={() => setView("youtube")}>
              Youtube
            </li>
            <li className='list-group-item' onClick={() => setView("gallery")}>
              Gallery
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className='col-sm-9 instagram-flow'>
        <div className='instagram-feed'></div>
      </div>
    </React.Fragment>
  );
};

export default Instagram;