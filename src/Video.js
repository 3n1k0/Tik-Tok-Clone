import React, { useRef, useState } from "react";
import "./Video.css";
import './VideoFooter.js'

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        loop
        onClick={onVideoPress}
        ref={videoRef}
        className="video__player"
        src="https://v16m.tiktokcdn.com/116f75cfd14872478794d1f860ad651b/5f3feba4/video/tos/useast2a/tos-useast2a-pve-0068/eeaa792c9de44035aea27c95ab0772b2/?a=1233&br=1412&bt=706&cr=0&cs=0&dr=0&ds=3&er=&l=20200819154331010189074012461F200B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzVwb2w3dmpudjMzZjczM0ApZWloaDo8ZDxnNzxoNGdpO2dfNWxwZS5rcDNfLS1jMTZzczYzX18yXzVgNS4tXmA1Li86Yw%3D%3D&vl=&vr="
      ></video>
      {/* <VideoFooter />
            <VideoSidebar/> */}
    </div>
  );
}

export default Video;
