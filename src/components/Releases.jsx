// The release being spotlighted, shown on the home and listen pages
export const FEATURED = {
  title: "Cowgirl Manifesto",
  cover: "/covers/web/cowgirl-manifesto.jpg",
  preorderUrl: "https://matildasutherland.bandcamp.com/album/cowgirl-manifesto",
  presaveUrl: "https://ffm.to/cowgirl-manifesto",
};

// Add singles here, newest first
const SINGLES = [
  {
    title: "Joanne",
    cover: "/covers/web/joanne.jpg",
    href: "https://open.spotify.com/track/7i9XYyEEQOQXz6FwUlKRN1?si=b8eba01f256249c8",
  },
  {
    title: "Silver Thorn",
    cover: "/covers/web/silver-thorn.jpg",
    href: "https://open.spotify.com/track/0JiqXBeHRS0ZPTcCo62gae?si=21acc72b619d4ed9",
  },
  {
    title: "Rodeo Queen",
    cover: "/covers/web/rodeo-queen.jpg",
    href: "https://open.spotify.com/track/23ROqgxyFhEFelnRl7OxnO?si=a98d27acaec345bd",
  },
];

// EP cover with a drop shadow, title and pre-order / pre-save buttons beside it
export const FeaturedRelease = ({ id }) => (
  <section id={id} className="featured-release">
    <img
      className="featured-cover"
      src={FEATURED.cover}
      alt={`${FEATURED.title} EP cover`}
    />
    <div>
      <header className="section-heading">
        <p className="eyebrow">New EP</p>
        <h2>{FEATURED.title}</h2>
      </header>
      <div className="section-content">
        <p>
          Matilda Sutherland&apos;s new EP. Pre-order the digital release on
          Bandcamp, or pre-save it on your streaming service of choice.
        </p>
        <p className="button-row">
          <a
            className="button button--large button--accent"
            href={FEATURED.preorderUrl}
            target="_blank"
            rel="noreferrer"
          >
            Pre-order
          </a>
          <a
            className="button button--large"
            href={FEATURED.presaveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Pre-save
          </a>
        </p>
      </div>
    </div>
  </section>
);

export const Singles = () => (
  <section className="singles">
    <header className="section-heading singles-heading">
      <h2>Singles</h2>
    </header>
    <div className="singles-grid">
      {SINGLES.map((single) => (
        <figure key={single.title} className="single">
          <a href={single.href} target="_blank" rel="noreferrer">
            <img
              src={single.cover}
              alt={`${single.title} cover`}
              loading="lazy"
            />
          </a>
          <figcaption>
            {single.title}
            <a href={single.href} target="_blank" rel="noreferrer">
              Listen on Spotify
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
