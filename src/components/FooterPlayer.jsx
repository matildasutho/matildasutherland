const FooterPlayer = () => {
  const iframeStyle = {
    border: 0,
    width: "50%",
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
      <div>© 2024, image by Wednesday Sutherland</div>
    </footer>
  );
};

export default FooterPlayer;
