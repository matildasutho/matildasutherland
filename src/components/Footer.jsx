const FooterPlayer = () => {
  const iframeStyle = {
    border: 0,
    width: "50%",
    height: "42px",
  };
  return (
    <footer>
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
      <div>
        © 2024, image by{" "}
        <a href="https://www.wednesdaysutherland.com/" target="_blank">
          Wednesday Sutherland
        </a>
      </div>
    </footer>
  );
};

export default FooterPlayer;
