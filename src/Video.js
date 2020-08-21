import React, { useRef, useState } from "react";
import "./Video.css";
import "./VideoFooter.js";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from './VideoSidebar'

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
        src="https://v16m.tiktokcdn.com/745ec6c01d86733745bc3895eda51fdf/5f42c6c2/video/tos/useast2a/tos-useast2a-pve-0068/cbfef1c233dd4d0798b89f3536089320/?a=1233&br=4168&bt=2084&cr=0&cs=0&dr=0&ds=3&er=&l=20200821194257010190208021243FFE42&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRoeTY8eDc8djMzNTczM0ApZWk0ZWQ5OztlNzY3OGdlNmczbGNpMnFsZF9fLS1iMTZzcy5jNmNiXjVgMTIxNDBeLjE6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter
        channel="anniekostolany"
        description="check this out"
        song="neoton familia"
      />
      <VideoSidebar likes={111} messages={222} shares={333} />
    </div>
  );
}

export default Video;
