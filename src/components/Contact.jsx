import React from "react";

const Contacts = () => {
  const API_KEY = "AIzaSyDmxG98xGOod-WW6GWnEPJpfbade2hoPW0";
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
              frameborder="0"
              style={{ border: "none" }}
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${QUERY}`}
              allowfullscreen
            ></iframe>
            <p>Mail to:</p>{" "}
            <a href="mailto:auv@iiitdm.ac.in">auv@iiitdm.ac.in</a>
            <p>Contact us</p>
            <a href="!#">33483758357</a>
            <div className="icon-container"></div>
          </div>
          <div>hi</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
