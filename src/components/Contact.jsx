import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <React.Fragment>
      <form className="form">
        <div className="headliner">Get in Touch!!</div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button">Send</button>
      </form>
    </React.Fragment>
  );
};
const Contacts = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const QUERY =
    "Indian+Institute+of+Information+Technology,+Design+and+Manufacturing,+Kancheepuram";
  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <ScrollAnimation animateIn="slideInUp">
          <div className="grid">
            <div>
              <iframe
                title="map"
                width="450"
                height="250"
                frameBorder="0"
                // style={{ border: "none", margin: "auto" }}
                style={{ margin: "auto" }}
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${QUERY}`}
                allowFullScreen
              ></iframe>
              <div className="links">
                <p>
                  Mail to{"      "}
                  <a href="mailto:auv.society@iiitdm.ac.in">
                    auv.society@iiitdm.ac.in
                  </a>
                </p>
              </div>
              <div className="links">
                <p>
                  Contact us{"      "}
                  <a href="!#">9999999999</a>
                </p>
              </div>
              <div className="icon-container">
                <a
                  href="https://www.instagram.com/auv.iiitdm/?hl=en"
                  target="blank"
                >
                  <i style={{ paddingLeft: "0px" }} className="fa">
                    &#xf16d;
                  </i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFBFlcfjEGOUsuFfPC-62bg"
                  target="blank"
                >
                  <i className="fa">&#xf16a;</i>
                </a>
                <a href="https://www.facebook.com/auv.iiitdm/" target="blank">
                  <i className="fa">&#xf09a;</i>
                </a>
                <a
                  href="https://www.linkedin.com/company/auv-iiitdm-kancheepuram/?originalSubdomain=in"
                  target="blank"
                >
                  <i className="fa">&#xf0e1;</i>
                </a>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </ScrollAnimation>

        <footer>
          Made with love
          <i id="heart" className="fa">
            &#xf004;
          </i>
          Copyrights 2020. All rights Reserved
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
