import { JitsiMeeting } from "@jitsi/react-sdk";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ModalVideo.css";

function ModalVideo(props) {
  const me = JSON.parse(localStorage.getItem("me"));
  const { id } = useParams();
  const [width, setWidth] = useState("100vw");
  const [height, setHeight] = useState("100vh");

  const handleClose = () => {
    props.setClose(<></>);
  };

  const handleMinimize = () => {
    setWidth("20vw");
    setHeight("20vh");
  };

  return (
    <div
      className="Modal"
      style={{ width, height, bottom: "10px", right: "10px" }}
    >
      <div className="ModalVideo Modal-content">
        <JitsiMeeting
          roomName={id}
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}
          userInfo={{
            displayName: me.fullName,
          }}
          onApiReady={(externalApi) => {
            // here you can attach custom event listeners to the Jitsi Meet External API
            // you can also store it locally to execute commands
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "100%";
          }}
        />
      </div>
      <div className="Modal-backdrop" onClick={handleClose}></div>
    </div>
  );
}

export default ModalVideo;
