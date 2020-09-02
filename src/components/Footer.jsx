import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <p className="p-3">
          Made with love {"        "}
          <i id="heart" className="fa">
            &#xf004;
          </i>
          {"         "}
          Copyrights 2020. All rights Reserved
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
