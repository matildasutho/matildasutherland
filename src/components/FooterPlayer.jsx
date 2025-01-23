const FooterPlayer = () => {
  const iframeStyle = {
    border: 0,
    width: "300px",
    height: "42px",
  };
  return (
    <footer>
      <iframe
        style={iframeStyle}
        src="https://bandcamp.com/EmbeddedPlayer/album=1920658779/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/track=3621774679/transparent=true/"
        seamless
      >
        <a href="https://matildasutherland.bandcamp.com/album/holy-water">
          Holy Water by Matilda Sutherland
        </a>
      </iframe>
      <br />

      <div>
        <a
          href="https://open.spotify.com/artist/1HK9Qse3xlpz0uxF8emi09?si=f0GuDIMcSzmoCOUQngfNpw"
          target="_blank"
        >
          Spotify
        </a>
        ,{" "}
        <a href="https://matildasutherland.bandcamp.com/" target="_blank">
          Bandcamp
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/@matildasutherland3317"
          target="_blank"
        >
          Youtube
        </a>
        ,{" "}
        <a href="https://www.instagram.com/matildasutho/" target="_blank">
          Instagram
        </a>
        ,{" "}
        <a href="mailto:contact@matildasutherland.com" target="_blank">
          Contact
        </a>
      </div>
      <div>© 2025. Image by Wednesday Sutherland</div>
    </footer>
  );
};

export default FooterPlayer;
