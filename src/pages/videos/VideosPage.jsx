import TopBar from "../../components/TopBar";
import Videos from "../../components/Videos";

const VideosPage = () => {
  return (
    <div className="videos-page">
      <TopBar>
        <a href="/">Home</a> <a href="/videos/">Videos</a>{" "}
        <a href="/cowgirl-manifesto/">Tickets</a>
      </TopBar>

      <Videos />

      <footer className="site-footer">
        © {new Date().getFullYear()} Matilda Sutherland.{" "}
        <a href="/">Back to home</a>
      </footer>
    </div>
  );
};

export default VideosPage;
