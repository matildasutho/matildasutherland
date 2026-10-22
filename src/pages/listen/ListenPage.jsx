import TopBar from "../../components/TopBar";
import { FeaturedRelease, Singles } from "../../components/Releases";

const ListenPage = () => {
  return (
    <div className="listen-page">
      <TopBar>
        <a href="/">Home</a> <a href="/listen/">Listen</a>{" "}
        <a href="/videos/">Videos</a> <a href="/cowgirl-manifesto/">Tickets</a>
      </TopBar>

      <FeaturedRelease />

      <Singles />

      <footer className="site-footer">
        © {new Date().getFullYear()} Matilda Sutherland.{" "}
        <a href="/">Back to home</a>
      </footer>
    </div>
  );
};

export default ListenPage;
