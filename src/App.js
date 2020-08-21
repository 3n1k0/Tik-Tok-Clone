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
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
