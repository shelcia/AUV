import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import V1 from "../../assets/vehicles/auvv1.png";

const AUVV1 = ({ setView }) => {
  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="list-group">
            <li className="list-group-item  active">AUV V1.0</li>
            <li className="list-group-item" onClick={() => setView("auv2")}>
              AUV V2.0
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-5">
        <ScrollAnimation animateIn="fadeIn">
          <img src={V1} alt="version" className="img-fluid" />
        </ScrollAnimation>
      </div>
      <div className="col-sm-4">
        <ScrollAnimation animateIn="fadeIn">
          <h5 className="sub-heading">Details</h5>
          <table className="table table-dark table-striped">
            <tbody>
              <tr>
                <th>Dimensions:</th>
                <td>80 x 55 x 40 (cm)</td>
              </tr>
              <tr>
                <th>Weight:</th>
                <td>20 kg</td>
              </tr>
              <tr>
                <th>DOFs:</th>
                <td>4 (Heave, Surge, Pitch, Yaw)</td>
              </tr>
              <tr>
                <th>Sensors:</th>
                <td>
                  Pressure sensor, 9-DoF IMU (Inertial Measurment Unit),
                  Logitech C270 camera
                </td>
              </tr>
              <tr>
                <th>Power source:</th>
                <td>Lithium Polymer battery (10400 mAh)</td>
              </tr>
              <tr>
                <th>Thrusters:</th>
                <td>BlueRobotics T100 Thrusters (4)</td>
              </tr>
              <tr>
                <th>Microprocessor & Microcontroller </th>
                <td>Raspberry Pi 3, Arduino Mega</td>
              </tr>
            </tbody>
          </table>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default AUVV1;
