import React from "react";
import logoBig from "../assets/images/dota_logo.png";
import Download from "./Download";
import background from "../assets/images/background.jpg";

function Welcome() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <style jsx>{`
        div {
          text-align: center;
          padding-top: 2em;
        }
        ,
        h1 {
          padding-top: 40px;
          text-transform: uppercase;
          color: #a69e99;
          font-size: 3vw;
          letter-spacing: 0.8vw;
          text-shadow: 2px 2px 5px #000000;
        }
        ,
        h2 {
          text-transform: uppercase;
          padding-top: 18px;
          font-size: 16px;
          color: #5c6163;
          text-shadow: 2px 2px 5px #000000;
          letter-spacing: 5px;
          -webkit-text-stroke: 0.2px;
          text-stroke: 0.2px;
          margin: 0 auto;
          padding: 0;
          border: 0;
          outline: 0;
          font-weight: inherit;
          font-style: inherit;
          font-family: inherit;
          vertical-align: baseline;
        }
        ,
        h3 {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          font-weight: inherit;
          font-style: inherit;
          font-family: inherit;
          vertical-align: baseline;
          text-transform: uppercase;
          font-size: 14px;
          color: #5c6163;
          padding-top: 4px;
          padding-right: 12px;
          letter-spacing: 4px;
          text-shadow: 2px 2px 5px #000000;
        }
        #downloadButton {
         text-align:center;
         padding-bottom: 40px;
         padding-left: 42%;
         padding-right: auto;
        }
      `}</style>
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/SmnqsdeHFT0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <br />
      <img src={logoBig} />
      <h1>"a modern multiplayer masterpiece"</h1>
      <h3 style={{ paddingBottom: "18px" }}>–DESTRUCTOID</h3>
      <div id="downloadButton">
      <Download/>
      </div>
     
      <h2>JOIN THE BATTLE. BRING YOUR FRIENDS.</h2>
    </div>
  );
}

export default Welcome;
