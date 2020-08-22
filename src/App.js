import React from "react";
import "./App.css";
import Video from "./Video.js";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function App() {
  return (
    <div className="app">
      <h1>Helooo</h1>
      <div className="app__videos">
        <Video
          url={"https://v16m.tiktokcdn.com/4003125f787676e16e0cda963f1e370d/5f434094/video/tos/useast2a/tos-useast2a-ve-0068c003/2262675b4c7647de89b5cddd388d229e/?a=1233&br=2552&bt=1276&cr=0&cs=0&dr=0&ds=3&er=&l=202008220422440101890741454872C410&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3g0ZXN4OWhudjMzOTczM0ApNmhlZzg3NDszNzkzZzs2ZGdkL2tkZ2VvYHJfLS1eMTZzc2FeMjQyL2NgLi42Mi0xMl86Yw%3D%3D&vl=&vr="}
          channel={"eniko"}
          song={"blabla"}
          likes={233}
          messages={4}
          description={"blabla"}
          shares={"3"}
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
