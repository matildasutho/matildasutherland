const FooterPlayer = () => {
  const iframeStyle = {
    border: 0,
    width: "50%",
    height: "42px",
  };
  return (
    <footer>
      <div>
        <a href="https://matildasutherland.bandcamp.com/" target="_blank">
          Bandcamp
        </a>
        ,{" "}
        <a
          href="https://open.spotify.com/artist/1HK9Qse3xlpz0uxF8emi09?si=f0GuDIMcSzmoCOUQngfNpw"
          target="_blank"
        >
          Spotify
        </a>
        ,{" "}
        <a
          href="https://music.apple.com/za/artist/matilda-sutherland/1575322604"
          target="_blank"
        >
          Apple Music
        </a>
        ,{" "}
        <a href="https://girlonroad.substack.com/" target="_blank">
          Substack
        </a>
        ,{" "}
        <a href="https://www.instagram.com/matildasutho/" target="_blank">
          Instagram
        </a>
        ,{" "}
        <a href="mailto:matildasutherland.contact@gmail.com" target="_blank">
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
