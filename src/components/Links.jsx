const LINKS = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/1HK9Qse3xlpz0uxF8emi09?si=f0GuDIMcSzmoCOUQngfNpw",
  },
  { label: "Bandcamp", href: "https://matildasutherland.bandcamp.com/" },
  { label: "Youtube", href: "https://www.youtube.com/@matildasutherland3317" },
  { label: "Instagram", href: "https://www.instagram.com/matildasutho/" },
  { label: "Contact", href: "mailto:contact@matildasutherland.com" },
];

const Links = () => (
  <ul className="links">
    {LINKS.map((link) => (
      <li key={link.label}>
        <a href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

export default Links;
