import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import V2 from "../../assets/vehicles/auvv2.jpg";

const AUVV2 = ({ setView }) => {
  return (
    <React.Fragment>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="list-group">
            <li className="list-group-item" onClick={() => setView("auv1")}>
              AUV V1.0
            </li>
            <li className="list-group-item active">AUV V2.0</li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-5">
        <ScrollAnimation animateIn="fadeIn">
          <img src={V2} alt="version2" className="img-fluid" />
        </ScrollAnimation>
      </div>
      <div className="col-sm-4">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#menu1">
                What's New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu2">
                Specs
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="menu1" className="container tab-pane active">
              <h5 className="sub-heading">Hardware Side</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Vectored orientation of thrusters for precise translational
                  and rotational motion.
                </li>
                <li className="list-group-item">
                  Use of aluminium profile extrusions to mount thrusters,
                  camera, gripper with ease.
                </li>
                <li className="list-group-item">
                  Developed a roll-pitch restricting mechanism to achieve
                  neutral buoyancy.
                </li>
                <li className="list-group-item">
                  Introducing an array of custom hydrophones made using
                  piezoceramic materials which acts as a passive sonar system.
                </li>
              </ul>
              <h5 className="sub-heading pt-">Software Side</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Developed complete simulation stack for vehicle to test
                  algorithms.
                </li>
                <li className="list-group-item">
                  In-house quaternion based sensor fusion
                </li>
                <li className="list-group-item">
                  Yolov3 running in parallel with ROS for obstacle avoidance and
                  object detection.
                </li>
              </ul>
            </div>
            <div id="menu2" className="container tab-pane fade">
              <h5 className="sub-heading">Details</h5>
              <table className="table table-dark table-striped">
                <tbody>
                  <tr>
                    <th>Dimensions:</th>
                    <td>70 x 55 x 40 (cm)</td>
                  </tr>
                  <tr>
                    <th>Weight:</th>
                    <td>22 kg</td>
                  </tr>
                  <tr>
                    <th>DOFs:</th>
                    <td>5 (Heave, Surge, Sway, Roll, Yaw)</td>
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
                    <td>
                      BlueRobotics T100 Thrusters (4), BlueRobotics T200
                      Thrusters (2)
                    </td>
                  </tr>
                  <tr>
                    <th>Microprocessor & Microcontroller </th>
                    <td>NVIDIA Jetson Nano, Raspberry Pi 3, Arduino Mega</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default AUVV2;
