import React from "react";
import "./padlet.css";

const Padlet = () => (
  <div className="padlet">
    <h3>You can also ask me on Padlet</h3>

    <div className="padlet-embed">
      <p style={{ padding: "0", margin: "0" }}>
        <iframe
          className="padlet-iframe"
          title="Padlet"
          src="https://padlet.com/embed/35us5t10nzes?rel=0"
          frameBorder="0"
          allow="camera;microphone;geolocation"
        />
      </p>
      <div style={{ padding: "8px", textAlign: "right", margin: "0" }}>
        <a
          href="https://padlet.com?ref=embed"
          style={{
            padding: "0",
            margin: "0",
            border: "none",
            display: "block",
            lineHeight: "1",
            height: "16px"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://resources.padletcdn.com/assets/made_with_padlet.png"
            width="86"
            height="16"
            alt="Made with Padlet"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Padlet;
