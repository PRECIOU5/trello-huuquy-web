import React from "react";
import "./AppBar.scss";
import {
  Container as BootstrapContainer,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import ModalAllBoards from "./ModalAllBoards";
import { useState } from "react";
//import StartMeeting from "meeting";
import Jitsi from "react-jitsi";
import ModalVideo from "./ModalVideo";

var apiObj = null;
function StartMeeting() {
  const domain = "http://localhost:3001/";
  const options = {
    roomName: "huuquy21",
    with: 700,
    height: 700,
    parentNode: document.querySelector("#jitsi-meet-conf-container"),
  };
  apiObj = new jitsiMeetExternalAPI(domain, options);
}

function AppBar() {
  const [replaceModal, setReplaceModal] = useState(<></>);
  const showAllBoards = () => {
    setReplaceModal(<ModalAllBoards setClose={setReplaceModal} />);
  };

  const showVideoCall = () => {
    setReplaceModal(<ModalVideo setClose={setReplaceModal} />);
  };

  return (
    <>
      <nav className="navbar-app">
        <BootstrapContainer className="huuquy-trello-container">
          <Row>
            <Col sm={5} xs={12} className="col-no-padding">
              <div className="app-actions">
                <div
                  className="item all"
                  title="Tat ca ban lam viec"
                  onClick={showAllBoards}
                >
                  <strong>Xem tất cả bảng công việc</strong>{" "}
                  {/* <i className="fa fa-th" /> */}{" "}
                </div>
              </div>
            </Col>

            <Col sm={2} xs={12} className="col-no-padding">
              <div className="app-branding text-center">
                <a>
                  <img
                    src="https://file1.hutech.edu.vn/file/editor/homepage/stories/hinh34/logo%20CMYK-03.png"
                    className="top-logo"
                    alt="huuquy-logo"
                  />
                  <span className="huuquy-slogan">HuuQuy-Trello</span>
                </a>
              </div>
            </Col>

            <Col sm={5} xs={12} className="col-no-padding">
              <div className="user-actions">
                <div className="item notification" onClick={showVideoCall}>
                  {" "}
                  <i class="fa-solid fa-video"></i>{" "}
                </div>

                <div
                  className="item fa-solid fa-arrow-right-from-bracket"
                  onClick={(e) => {
                    localStorage.removeItem("me");
                    localStorage.removeItem("jwt-token");
                    window.location.href = "/";
                  }}
                >
                  {/* <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAC2trb19fVZWVmHh4e5ubn4+Pivr6+AgICEhIRoaGjl5eXz8/OVlZW0tLTb29uNjY1KSkrNzc2hoaHDw8N2dnYXFxdYWFhfX1/f398PDw/s7Oyenp4kJCTW1tY0NDTGIIeQAAADC0lEQVR4nO3dCXLaQBCFYQ2YCFuEJSg42CTk/qeMbcoVWUucYrrndTfvO4Clv7QjzbiqiIiIiIiIiIiIiIiIyJh6nqtGJ/zLdvct5Wue0B1TVkeBvDd7dMq4pVRfSs9f0TFj1nKBKbXomhGCW/BFg84ZWokGWiwUO8lcLNA9A1vZwGTverGTDVyje4YkLvR/GTyT1p3Vu59l+o6uGTPvBKLXRUencIZeFx0s9I+F/rHQPxb6x0L/WOgfC/1joX8s9I+F/rHQPxb6x0L/WKjm9PNwaE8FFoQq3FyWWeB9HKhw/77QL+qLAhX+KrdUTOE5lVsspnDfKdTeUQ0UKi8YdBw+lksEFfa+pdPcUVHXw/tiibB7msXHRL2F4+5LSyUC77wfyuyoyGeLXqLS8qFPT0V2VOzzYYlE8BNwgYsG+hlffyuiC/UT4YXqFw18Yf9YlF4NA4XKO6qFQt1EE4Wqx6KNQs0bOCOFijuqlUK9RDOFajdwdgr7W3Ej9GcNFSolWirUuWiYKlS5aNgq1DijGitUSLRWKH/RMFcofizaK+xPgJC7WjmFy+bHnYaPhbk76vWFp9+pkLzE6wsfp1dJ2hlS2JYLTEdIoew4/k/kTF50dWGxo/BVzqQ33IaT4h+H8c+lN3A9rKpN8HsaNYbuS3WEf7YI/3wY/hk//O804X9rC/97qc7LGUOF4d9bhH/3FP79Yfh3wOHf44f/FiP89zThv4kK/11b+G8Tw39fGv4b4fDfeYf/Vj/8eIvwY2bCj3sKP3Yt/PjD8GNI448DDj+W+1wu0MKMAyHnVIg/L0b8uU1uYH6aanZZZtw5hqrq1B4Oy8jzRJXDQv9Y6B8L/WOhfyz0j4X+sdA/FvrHQv9Y6B8L/WOhfyz076YKg/5v9Tp1Eif/8f1/KvCu7Aqy4+pbdM6InWhhWqN7hrayhekJHTR0lC1coHuGVrKFDbpnxPLz1XZe2B/in8fi2VR0Kz7nTCWjaCV2utmjUyZtdxKX/sbgtaKjnufKmQqIiIiIiIiIiIiIiIiIHPgDtcEmETDb7LEAAAAASUVORK5CYII="
                    alt="avatar-huuquy"
                    title="HuuQuy"
                  /> */}
                </div>
              </div>
            </Col>
          </Row>
        </BootstrapContainer>
      </nav>
      {replaceModal}
    </>
  );
}

export default AppBar;
