import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <React.Fragment>
      <form>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" onChange={(e) => setSubject(e.target.value)} />
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
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
        <div className="grid">
          <div>
            <iframe
              title="map"
              width="450"
              height="250"
              frameBorder="0"
              style={{ border: "none" }}
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${QUERY}`}
              allowFullScreen
            ></iframe>
            <p>Mail to:</p>
            <a href="mailto:auv@iiitdm.ac.in">auv@iiitdm.ac.in</a>
            <p>Contact us</p>
            <a href="!#">33483758357</a>
            <div className="icon-container"></div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
