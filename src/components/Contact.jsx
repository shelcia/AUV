import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const url = `https://auv-society-iiitdmk.herokuapp.com/sendemail`;
  const errorNotify = () =>
    toast.dark("Oops !! error sending the form response .. try again later");
  const succesNotify = () =>
    toast.dark("We received your response. We will contact you soon :) ");
  const incompleteFormNotify = () =>
    toast.dark("Oops !! you cannot submit incomplete Form");
  const sendForm = (event) => {
    event.preventDefault();
    setLoading(true);
    if (name && email && subject && message) {
      const response = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      axios
        .post(url, response, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
          succesNotify();
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          errorNotify();
        });
    } else {
      setLoading(false);
      incompleteFormNotify();
    }
  };

  return (
    <React.Fragment>
      {loading && (
        <div className="loading">
          <h2>We are processing your response</h2>
          <Loader
            type="MutatingDots"
            color="#0dc1f7"
            height={100}
            width={100}
          />
        </div>
      )}
      {!loading && (
        <form className="form mb-3">
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
          <button
            type="button"
            onClick={(event) => {
              sendForm(event);
              
            }}
          >
            Send
          </button>
        </form>
      )}
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
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <iframe
                  title="map"
                  frameBorder="0"
                  style={{ margin: "auto" }}
                  src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${QUERY}`}
                  allowFullScreen
                  width="100%"
                  height="220px"
                ></iframe>
                <div className="links pt-5">
                  <p>
                    <b style={{ color: "#0dc1f7" }}>Mail to :</b>
                    {"      "}
                    <a href="mailto:auv.society@iiitdm.ac.in">
                    {"      "} auv.society@iiitdm.ac.in
                    </a>
                  </p>
                </div>
                <div className="links">
                  <p>
                    <b style={{ color: "#0dc1f7" }}>Contact us :</b>
                    {"      "}
                    <a href="!#">{"      "}9999999999</a>
                  </p>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.instagram.com/auv.iiitdm/?hl=en"
                      target="blank"
                    >
                      <i style={{ paddingLeft: "0px" }} className="fa">
                        &#xf16d;
                      </i>
                    </a>
                  </button>
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.youtube.com/channel/UCFBFlcfjEGOUsuFfPC-62bg"
                      target="blank"
                    >
                      <i className="fa">&#xf16a;</i>
                    </a>
                  </button>
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.facebook.com/auv.iiitdm/"
                      target="blank"
                    >
                      <i className="fa">&#xf09a;</i>
                    </a>
                  </button>
                  <button type="button" className="btn btn-primary">
                    <a
                      href="https://www.linkedin.com/company/auv-iiitdm-kancheepuram/?originalSubdomain=in"
                      target="blank"
                    >
                      <i className="fa">&#xf0e1;</i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <ToastContainer transition={Slide} className="mt-5" />
                <Form />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
