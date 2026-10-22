import TopBar from "../../components/TopBar";
import Section from "../../components/Section";
import Links from "../../components/Links";
import Videos from "../../components/Videos";

const MERCH_URL =
  "https://matildasutherland.bandcamp.com/merch/cowgirl-manifesto-t-shirt";

const TICKETS_URL =
  "https://events.humanitix.com/matilda-sutherland-cowgirl-manifesto-at-abbotsford-convent/tickets";

const FAQS = [
  {
    q: "Are tickets refundable or transferable?",
    a: "Tickets are non-refundable, but you can safely transfer them to a friend via your Humanitix confirmation email.",
  },
  {
    q: "Will tickets be available at the door?",
    a: "Tickets will be available on the door for a slightly higher price if they do not sell out online.",
  },
  {
    q: "Is there seating available?",
    a: "Yes, this is a primarily seated show, with standing room at the back.",
  },
  {
    q: "Is the venue accessible?",
    a: (
      <>
        The Oratory is wheelchair accessible.
        <br />
        Baby change facilities are located nearby.
      </>
    ),
  },
  {
    q: "Is there parking onsite?",
    a: "Paid parking is available in the dedicated outdoor car park located directly across from the Abbotsford Convent on St Heliers Street.",
  },
  {
    q: "Can I buy merch at the event?",
    a: (
      <>
        Yes! T-shirts will be available at the gig for $40, or you can{" "}
        <a href={MERCH_URL} target="_blank" rel="noreferrer">
          buy one online
        </a>
        .
      </>
    ),
  },
];

// Any <Section> below can take an image, e.g.
//   image="/your-photo.jpg" imageAlt="..." imageSide="left"
// Put the image file in /public and reference it with a leading slash.

// Hero banner, shown at the top and again at the base of the page.
// `pinned` makes its ticket button stick to the bottom of the screen on mobile.
const GigHero = ({ pinned }) => (
  <section className={`gig-hero${pinned ? "" : " gig-hero--end"}`}>
    <div className="gig-hero-text">
      <h2 className="display">Cowgirl Manifesto</h2>
      <p className="lede">
        Live at Abbotsford Convent, with Andrew Wilson &amp; CCTV.
        <br />★ City girl country rock ★
      </p>
      <p className="gig-hero-meta">
        <b>Sat 7 November, 7pm</b>
        <br />
        The Oratory, Abbotsford Convent
      </p>
      <a
        className={`button button--large${pinned ? " gig-hero-cta" : ""}`}
        href={TICKETS_URL}
        target="_blank"
        rel="noreferrer"
      >
        Get tickets
      </a>
    </div>
    <img
      className="gig-hero-img"
      src="/matilda-optimised-press-shot.jpg"
      alt="Matilda Sutherland in a park"
    />
  </section>
);

const CowgirlManifesto = () => {
  return (
    <div className="gig-page">
      <TopBar>
        <a href="/">Home</a> <a href="/videos/">Videos</a>{" "}
        <a href={TICKETS_URL} target="_blank" rel="noreferrer">
          Tickets
        </a>
      </TopBar>

      <GigHero pinned />

      <Section
        title="Details"
        image="/Cowgirl-manifesto-assets/cowgirl-manifesto-poster.jpg"
        imageAlt="Cowgirl Manifesto poster: Matilda Sutherland with Andrew Wilson and CCTV, November 7, The Oratory, Abbotsford Convent"
        imageCrop={false}
      >
        <table className="details">
          <tbody>
            <tr>
              <th>Date</th>
              <td>Saturday 7 November 2026</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>7pm – 10pm AEDT</td>
            </tr>
            <tr>
              <th>Venue</th>
              <td>The Oratory, Abbotsford Convent, Abbotsford VIC</td>
            </tr>
            <tr>
              <th>Tickets</th>
              <td>$30 online, $35 on the door</td>
            </tr>
            <tr>
              <th>Support</th>
              <td>Andrew Wilson, CCTV</td>
            </tr>
          </tbody>
        </table>
        <p>
          <a
            className="button button--large"
            href={TICKETS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Get tickets
          </a>
        </p>
      </Section>

      <Section
        title="About the show"
        image="/Cowgirl-manifesto-assets/performance-img.jpg"
        imageAlt="Matilda Sutherland singing on stage with her band"
        imageSide="left"
      >
        <p>
          Experience Matilda Sutherland&apos;s raw blend of country storytelling
          and alt-rock grit as she performs her Cowgirl Manifesto EP live at
          Abbotsford Convent&apos;s historic Oratory on Saturday, 7 November
          with Andrew Wilson &amp; CCTV.
        </p>
        <p>
          Making music that sits somewhere between country confessional and raw
          rock and roll, Matilda carries on the gritty storytelling tradition of
          Patti Smith, with the tenderness and stylings of Dolly Parton, PJ
          Harvey or Sharon Van Etten.
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

      {/* Rodeo Queen and Silver Thorn */}
      <Videos only={["scPM2IMqC6Y", "icKWLLSF40o"]} />

      <Section eyebrow="Support" title="Andrew Wilson">
        <p>
          Andrew Wilson (b. 1988) is an Australian musician and reformed DJ.
          Using a wide variety of aliases (including Andras, Art Wilson, Wilson
          Tanner) his recordings are an assemblage of Australian vernacular
          sounds, salvaged materials and the flotsam and jetsam of electronica.
        </p>
        <p>
          For this show he will be performing new works-in-progress for electric
          guitar and piano.
        </p>
      </Section>

      <Section eyebrow="Support" title="CCTV">
        <p>
          CCTV is the solo project of Goldminds front woman, singer/songwriter
          and guitarist Courtney Constantinou ~ a summoning of her favourite
          sounds and spirits of the moody broody, alt/rock &amp; roll kind. It
          is an ode to past lives, dreams and nostalgia that is guided by
          intuition, the natural world and a deep curiosity of the heart.
        </p>
        <p>
          Having unveiled her debut single &ldquo;Runaway&rdquo; followed by
          &ldquo;Dreaming of You&rdquo;, both co-produced by Brendan West
          (Goldminds, Al Matcott), these atmospheric and bold tracks mark a
          preview of CCTV&apos;s forthcoming debut album due for release in
          2027.
        </p>
      </Section>

      <Section
        eyebrow="The venue"
        title="The Oratory"
        image="/Cowgirl-manifesto-assets/oratory/Venue_Oratory.jpg"
        imageAlt="The Oratory at Abbotsford Convent, with leadlight windows, a proscenium arch and a raised stage"
        imageSide="left"
      >
        <p>
          The Oratory is one of the Convent&apos;s most spectacular spaces.
          Featuring polished floorboards, patina walls, leadlight windows, a
          raised stage, proscenium arch and an adjoining green room. The Oratory
          opens onto the Sacred Heart Courtyard and offers views of the Historic
          Oak tree.
        </p>
        <p>
          The Oratory was once a daytime Chapel for the women and girls who
          lived in the Sacred Heart building. Girls rose around 5am, went to
          Mass in the Oratory, had breakfast and started their working day,
          which was punctuated with meals and more church services. The Oratory
          was used daily, except for Sundays, when girls attended the main
          church (now the Good Shepherd Chapel).
        </p>
        <p>
          Refurbished in 2014, the Oratory now offers a creative multi-use space
          that is both elegant and worn.
        </p>
      </Section>

      <Section
        eyebrow="Merch"
        title="Cowgirl Manifesto T-shirt"
        image="/Cowgirl-manifesto-assets/sm-tile-3.png"
        imageAlt="Cowgirl Manifesto T-shirt"
      >
        <p>
          There will be a small run of Cowgirl Manifesto T-shirts! Grab one at
          the show for $40, or order yours online now.
        </p>
        <p>
          T-shirts are white, and feature the Cowgirl Manifesto EP cover and
          title on the front. They&apos;re screen printed on white fabric by
          Redwood Press. I&apos;ve chosen Gildan&apos;s Softstyle 100% cotton
          T-shirt for their super top quality and relaxed fit.
        </p>
        <p>
          <a
            className="button button--large"
            href={MERCH_URL}
            target="_blank"
            rel="noreferrer"
          >
            Buy a T-shirt
          </a>
        </p>
      </Section>

      <Section title="FAQs">
        <dl className="faq">
          {FAQS.map(({ q, a }) => (
            <div key={q}>
              <dt>{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Links">
        <Links />
      </Section>

      <GigHero />

      <footer className="site-footer">
        © {new Date().getFullYear()} Matilda Sutherland.{" "}
        <a href="/">Back to home</a>
      </footer>
    </div>
  );
};

export default CowgirlManifesto;
