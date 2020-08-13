import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player"
        src="https://v16m.tiktokcdn.com/b017616c6aa294364a337879d57ed892/5f379ba0/video/tos/useast2a/tos-useast2a-ve-0068c003/e11259332bb14dd69b7d13b61cdfac39/?a=1233&amp;br=3766&amp;bt=1883&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=202008130823590101890730771E019078&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=amY7NGR4Ozo6dTMzOjczM0ApOThmaDc7Ojw7NzxpODRkNWdiMWguLzFvZGVfLS0vMTZzczBhX2EtLzEwL15jMjAuMC86Yw%3D%3D&amp;vl=&amp;vr="
      ></video>
      {/* <VideoFooter />
            <VideoSidebar/> */}
    </div>
  );
}

export default Video;
