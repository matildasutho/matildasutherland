// Add more videos here: `id` is the part after "watch?v=" in the YouTube URL.
const VIDEOS = [
  { title: "Rodeo Queen", id: "scPM2IMqC6Y" },
  { title: "Silver Thorn", id: "icKWLLSF40o" },
];

const Videos = ({ id }) => (
  <section id={id} className="videos">
    <header className="section-heading videos-heading">
      <h2>Music videos</h2>
    </header>
    <div className="videos-grid">
      {VIDEOS.map((video) => (
        <figure key={video.id} className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}`}
            title={`${video.title} – Matilda Sutherland`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <figcaption>{video.title}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Videos;
