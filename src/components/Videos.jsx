import { useEffect, useState } from "react";

// Add more videos here: `id` is the part after "watch?v=" in the YouTube URL.
// `thumb` is only needed if YouTube has no HD thumbnail for that video.
const VIDEOS = [
  { title: "Heat Stroke", id: "tToCqWA6gsU" },
  { title: "Holy Water", id: "1DC6pGUZ-Wk", thumb: "hqdefault" },
  { title: "Rodeo Queen", id: "scPM2IMqC6Y" },
  { title: "Silver Thorn", id: "icKWLLSF40o" },
  { title: "Anemone (Brian Jonestown Massacre cover)", id: "-5bHvvDurlw" },
];

const VideoPopup = ({ video, onClose }) => {
  // Close on Escape and stop the page scrolling behind the popup
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="video-popup"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
    >
      <button className="video-popup-close" onClick={onClose}>
        Close
      </button>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
        title={`${video.title} – Matilda Sutherland`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

// Pass `only` (a list of video ids) to show just those videos
const Videos = ({ id, only }) => {
  const [playing, setPlaying] = useState(null);
  const videos = only ? VIDEOS.filter((v) => only.includes(v.id)) : VIDEOS;

  return (
    <section id={id} className="videos">
      <header className="section-heading videos-heading">
        <h2>Music videos</h2>
      </header>
      <div
        className={`videos-grid${videos.length === 2 ? " videos-grid--two" : ""}`}
      >
        {videos.map((video) => (
          <figure key={video.id} className="video">
            <button
              className="video-thumb"
              onClick={() => setPlaying(video)}
              aria-label={`Play ${video.title}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${video.id}/${video.thumb || "maxresdefault"}.jpg`}
                alt=""
                loading="lazy"
              />
              <span className="video-play" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
            <figcaption>{video.title}</figcaption>
          </figure>
        ))}
      </div>
      {playing && (
        <VideoPopup video={playing} onClose={() => setPlaying(null)} />
      )}
    </section>
  );
};

export default Videos;
