import TopBar from "../../components/TopBar";
import Section from "../../components/Section";
import Links from "../../components/Links";
import Videos from "../../components/Videos";

// Paste the ticket link here
const TICKETS_URL = "#";

const FAQS = [
  "Are tickets refundable or transferable?",
  "Will tickets be available at the door?",
  "Is there seating available?",
  "Is the venue accessible?",
  "Is there parking onsite?",
  "Can I buy merch at the event?",
];

// Any <Section> below can take an image, e.g.
//   image="/your-photo.jpg" imageAlt="..." imageSide="left"
// Put the image file in /public and reference it with a leading slash.

const CowgirlManifesto = () => {
  return (
    <>
      <TopBar>
        <a href="/">Home</a> <a href={TICKETS_URL}>Tickets</a>
      </TopBar>

      <section className="gig-hero">
        <div className="gig-hero-text">
          <p className="eyebrow">Matilda Sutherland presents</p>
          <h2 className="display">Cowgirl Manifesto</h2>
          <p className="lede">
            Live at Abbotsford Convent, with Andrew Wilson &amp; CCTV. City girl
            country rock.
          </p>
          <p className="gig-hero-meta">
            <b>Sat 7 November, 7pm</b>
            <br />
            The Oratory, Abbotsford Convent
          </p>
          <a className="button button--large" href={TICKETS_URL}>
            Get tickets &rarr;
          </a>
        </div>
        <img
          className="gig-hero-img"
          src="/cowgirl-manifesto-hero.jpg"
          alt="Matilda Sutherland holding a guitar case"
        />
      </section>

      <Section
        title="Details"
        image="/cowgirl-manifesto-poster.jpg"
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
              <td>$35 on the door. Merch + ticket bundles below.</td>
            </tr>
            <tr>
              <th>Support</th>
              <td>Andrew Wilson, CCTV</td>
            </tr>
          </tbody>
        </table>
        <p>
          <a className="button button--large" href={TICKETS_URL}>
            Get tickets &rarr;
          </a>
        </p>
      </Section>

      <Section
        title="About the show"
        image="/matilda-sutherland-press.jpg"
        imageAlt="Matilda Sutherland"
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
          rock and roll, Matilda carries on the gritty storytelling tradition
          of Patti Smith, with the tenderness and stylings of Dolly Parton, PJ
          Harvey or Sharon Van Etten.
        </p>
        <p>
          Hailing from coastal New South Wales, Matilda grew up surrounded by
          surf rock, folk, soul and 80s ballads before relocating to Melbourne
          in 2014. She began her musical career as a DJ under the moniker
          MTLDA, becoming a respected fixture of Melbourne&apos;s underground
          techno scene. When the pandemic ground nightlife to a halt, a beat-up
          old Yamaha acoustic guitar became the catalyst for a new creative
          chapter.
        </p>
        <p>
          Since then, Matilda has steadily built a reputation as one of
          Melbourne&apos;s most compelling emerging singer-songwriters and live
          acts. Backed by a five-piece band, she moves between steel-soaked folk
          and distorted rock with ease, her lyricism and voice the constant.
        </p>
      </Section>

      <Videos />

      <Section eyebrow="Support" title="Andrew Wilson">
        <p>
          Andrew Wilson (b. 1988) is an Australian musician and reformed DJ.
          Using a wide variety of aliases (including Andras, Art Wilson, Wilson
          Tanner) his recordings are an assemblage of Australian vernacular
          sounds, salvaged materials and the flotsam and jetsam of electronica.
        </p>
        <p>
          For this show he will be performing new works-in-progress for
          electric guitar and piano.
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

      <Section eyebrow="The venue" title="The Oratory">
        <p>
          The Oratory is one of the Convent&apos;s most spectacular spaces.
          Featuring polished floorboards, patina walls, leadlight windows, a
          raised stage, proscenium arch and an adjoining green room. The
          Oratory opens onto the Sacred Heart Courtyard and offers views of the
          Historic Oak tree.
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
          Refurbished in 2014, the Oratory now offers a creative multi-use
          space that is both elegant and worn.
        </p>
      </Section>

      <Section eyebrow="Merch" title="T-shirt + ticket bundle <3">
        <p>
          There will be a small run of Cowgirl Manifesto T-shirts! You can
          purchase yours in advance along with your ticket for a discount, and
          to ensure that I have your size.
        </p>
        <p>
          T-shirts are white, and feature the Cowgirl Manifesto EP cover and
          title on the front. They&apos;re screen printed on white fabric by
          Redwood Press. I&apos;ve chosen Gildan&apos;s Softstyle 100% cotton
          T-shirt for their super top quality and relaxed fit.
        </p>
        <p>
          <b>
            This bundle is only available until the 14th of October. T-shirts
            will be $40 on the night.
          </b>
        </p>
      </Section>

      <Section title="FAQs">
        {/* Fill in the answers below */}
        <dl className="faq">
          {FAQS.map((q) => (
            <div key={q}>
              <dt>{q}</dt>
              <dd>TBC</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Links">
        <Links />
      </Section>

      <footer className="site-footer">
        © {new Date().getFullYear()} Matilda Sutherland.{" "}
        <a href="/">Back to home</a>
      </footer>
    </>
  );
};

export default CowgirlManifesto;
