// Two-column section.
// Without `image`: heading in the left column, content in the right.
// With `image`: image fills one half edge to edge, heading + content in the other.
//   imageSide="left" | "right" (default "right")
//   imageCrop={false} shows the whole image (e.g. a poster) instead of filling the half
const Section = ({
  id,
  eyebrow,
  title,
  image,
  imageAlt = "",
  imageSide = "right",
  imageCrop = true,
  children,
}) => {
  const heading = (
    <header className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
    </header>
  );

  if (image) {
    return (
      <section id={id} className={`section section--image img-${imageSide}${
          imageCrop ? "" : " img-natural"
        }`}>
        <div className="section-text">
          {heading}
          <div className="section-content">{children}</div>
        </div>
        <img className="section-img" src={image} alt={imageAlt} />
      </section>
    );
  }

  return (
    <section id={id} className="section section--split">
      {heading}
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
