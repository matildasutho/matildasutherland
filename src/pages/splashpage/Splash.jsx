import React from "react";
import "./Splash.css";

const Splash = () => {
  return (
    <div className="splash-wrapper">
      <img className="splash-image" src="/MS_BG_optimised-1920.jpg" alt="" />

      <footer className="splash-footer">
        <a
          href="https://open.spotify.com/artist/1HK9Qse3xlpz0uxF8emi09?si=f0GuDIMcSzmoCOUQngfNpw"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>
        ,{" "}
        <a
          href="https://matildasutherland.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Bandcamp
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/@matildasutherland3317"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
        ,{" "}
        <a
          href="https://www.instagram.com/matildasutho/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        ,{" "}
        <a
          href="mailto:contact@matildasutherland.com"
          target="_blank"
          rel="noreferrer"
        >
          Contact
        </a>
      </footer>
    </div>
  );
};

export default Splash;
