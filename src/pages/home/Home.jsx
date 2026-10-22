import TopBar from "../../components/TopBar";
import Section from "../../components/Section";
import Links from "../../components/Links";
import Videos from "../../components/Videos";

// Edit your gig dates here. Set `href` to the ticket link.
const GIGS = [
  {
    date: "Sat 7 Nov 2026",
    venue: "The Oratory, Abbotsford Convent",
    city: "Melbourne VIC",
    href: "/cowgirl-manifesto/",
  },
];

const Home = () => {
  return (
    <>
      <TopBar>
        <a href="#gigs">Gigs</a> <a href="#bio">Bio</a>{" "}
        <a href="/videos/">Videos</a> <a href="#links">Links</a>
      </TopBar>

      <img
        className="hero"
        src="/MS_BG_optimised-1920.jpg"
        alt="Matilda Sutherland"
      />

      <Section id="gigs" title="Gig dates">
        <table className="gigs">
          <tbody>
            {GIGS.map((gig) => (
              <tr key={gig.date + gig.venue}>
                <td className="date">{gig.date}</td>
                <td>
                  {gig.venue}
                  <span className="city">{gig.city}</span>
                </td>
                <td className="tix">
                  <a className="button" href={gig.href}>
                    Tickets
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section
        id="bio"
        title="Biography"
        image="/matilda-sutherland-press.jpg"
        imageAlt="Matilda Sutherland"
        imageSide="right"
      >
        <p>
          Making music that sits somewhere between country confessional and raw
          rock and roll, Matilda Sutherland carries on the gritty storytelling
          tradition of Patti Smith, with the tenderness and stylings of Dolly
          Parton, PJ Harvey or Sharon Van Etten.
        </p>
        <p>
          Hailing from coastal New South Wales, Matilda grew up surrounded by
          surf rock, folk, soul and 80s ballads before relocating to Melbourne
          in 2014. She began her musical career as a DJ under the moniker MTLDA,
          becoming a respected fixture of Melbourne&apos;s underground techno
          scene. When the pandemic ground nightlife to a halt, a beat-up old
          Yamaha acoustic guitar became the catalyst for a new creative chapter.
        </p>
        <p>
          Since then, Matilda has steadily built a reputation as one of
          Melbourne&apos;s most compelling emerging singer-songwriters and live
          acts. Backed by a five-piece band, she moves between steel-soaked folk
          and distorted rock with ease, her lyricism and voice the constant.
        </p>
      </Section>

      <Videos id="videos" />

      <Section id="links" title="Links">
        <Links />
      </Section>

      <footer className="site-footer">
        © {new Date().getFullYear()} Matilda Sutherland.
      </footer>
    </>
  );
};

export default Home;
