import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { TatreezDivider, TatreezMotif } from "@/components/Tatreez";
import { FacebookLink, InstagramLink } from "@/components/SocialLinks";

import heroImg from "@/assets/hero-tatreez.jpg";
import thobeImg from "@/assets/thobe.jpg";
import foodImg from "@/assets/food.jpg";
import kunstImg from "@/assets/kunst.jpg";
import musicImg from "@/assets/music.jpg";
import poesiImg from "@/assets/poesi.jpg";
import gatheringImg from "@/assets/gathering.jpg";
import handverkImg from "@/assets/handverk.jpg";
import tekstilImg from "@/assets/tekstil.jpg";
import arkitekturImg from "@/assets/arkitektur.jpg";
import barnImg from "@/assets/barn.jpg";
import oliveImg from "@/assets/olive.jpg";

const title = "Palestinsk kultur og kulturarv | Palmang";
const description =
  "Tatreez og broderi, matkultur, kunst, musikk, poesi, fortellinger, håndverk, tradisjoner og historie – palestinsk kulturarv formidlet av Palmang Kulturforening.";

export const Route = createFileRoute("/kultur")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kultur" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kultur" }],
  }),
  component: Kultur,
});

const sections = [
  {
    title: "Tatreez & broderi",
    image: thobeImg,
    alt: "Tett broderi i rødt korssting på svart stoff",
    text: "Tatreez er palestinsk korsstingbroderi der hvert motiv og hver farge kan fortelle om landsby, håndverkstradisjon og familiehistorie. Broderiet er både kunst, språk og minne.",
  },
  {
    title: "Palestinsk matkultur",
    image: foodImg,
    alt: "Bord dekket med palestinske retter, brød og oliven",
    text: "Maten er en av de mest levende delene av kulturarven. Oliven, olivenolje, za'atar, krydder og retter som deles rundt et felles bord bærer med seg gjestfrihet og fellesskap.",
  },
  {
    title: "Kunst",
    image: kunstImg,
    alt: "Utstilling med abstrakte malerier inspirert av broderimotiv",
    text: "Palestinske kunstnere arbeider i mange uttrykk – fra maleri og tekstilkunst til foto og installasjon. Palmang ønsker å gi kunstnere arenaer der arbeidet deres kan presenteres.",
  },
  {
    title: "Musikk",
    image: musicImg,
    alt: "Musiker som spiller oud i varmt lampelys",
    text: "Oud, darbuka, sang og dans som dabke hører til gjennom generasjoner. Musikken samler mennesker, og bærer både glede, lengsel og fest.",
  },
  {
    title: "Litteratur & poesi",
    image: poesiImg,
    alt: "Åpen diktbok ved en kopp kaffe og en tørket olivengren",
    text: "Poesi og litteratur har en sentral plass i palestinsk kultur. Diktet leses høyt, læres utenat og gis videre – som et rom for språk, identitet og skjønnhet.",
  },
  {
    title: "Fortellinger",
    image: gatheringImg,
    alt: "Flere generasjoner samlet rundt et bord med broderi og te",
    text: "Muntlige fortellinger, ordtak og familieminner er kulturarv som lever i stemmene til dem som forteller. Palmang vil skape rom der fortellingene kan deles.",
  },
  {
    title: "Tradisjonelt håndverk",
    image: handverkImg,
    alt: "Keramikk, verktøy og flettede kurver i et håndverksverksted",
    text: "Keramikk, kurvfletting, treskjæring, glass og såpeproduksjon er håndverkstradisjoner med lange linjer. Kunnskapen ligger i hendene og læres av noen som viser den videre.",
  },
  {
    title: "Tradisjoner",
    image: tekstilImg,
    alt: "Broderte tekstiler og puter med geometriske motiv",
    text: "Klær, festligheter, årstider og høsting av oliven danner et rytmisk kulturelt år. Tradisjonene knytter hverdagen til noe større enn den enkelte.",
  },
  {
    title: "Historie & kulturarv",
    image: arkitekturImg,
    alt: "Kalksteinsarkitektur med spissbuer og utskårne detaljer",
    text: "Arkitektur, landsbyer, håndverk og materialer forteller om et langt kulturhistorisk landskap i Levanten – i stein, kalk, buer og terrasser.",
  },
  {
    title: "Barn & ungdom",
    image: barnImg,
    alt: "Barn som broderer sammen med en voksen i et verksted",
    text: "Kulturarven blir levende når nye generasjoner får delta selv. Verksteder, fortellerstunder og kreative aktiviteter gjør kulturen til noe barn og ungdom eier.",
  },
  {
    title: "Kulturelle møteplasser",
    image: oliveImg,
    alt: "Olivenlund på terrassert skråning i kveldslys",
    text: "Møteplassen er kjernen i Palmang: et sted der mennesker med ulike bakgrunner kan møtes, lære, smake, lytte og dele kulturelle opplevelser.",
  },
];

function Kultur() {
  return (
    <>
      <PageHero
        eyebrow="Kultur & aktiviteter"
        title="Palestinsk kultur & kulturarv"
        subtitle="Historier, tradisjoner og uttrykk som lever videre gjennom generasjoner."
        image={heroImg}
        imageAlt="Hender som broderer palestinsk tatreez"
      />

      <div className="section-pad">
        <div className="shell space-y-24 md:space-y-32">
          {sections.map((section, i) => (
            <article
              key={section.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <Reveal as="figure" className="img-zoom border border-border">
                <img
                  src={section.image}
                  alt={section.alt}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </Reveal>
              <Reveal delay={100}>
                <p className="eyebrow">
                  <TatreezMotif size={14} />
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="display-md mt-4">{section.title}</h2>
                <p className="lead mt-5">{section.text}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>

      <section className="section-pad bg-charcoal text-primary-foreground">
        <div className="shell text-center">
          <Reveal>
            <p className="eyebrow justify-center text-[color-mix(in_oklab,white_80%,transparent)]">
              <TatreezMotif size={14} tone="light" />
              Se våre aktiviteter
            </p>
            <h2 className="display-lg mt-6">Vil du se hva Palmang gjør akkurat nå?</h2>
            <p className="mt-5 text-lg text-[color-mix(in_oklab,white_80%,transparent)]">
              Følg aktivitetene våre på Instagram og Facebook.
            </p>
            <TatreezDivider tone="light" className="mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <InstagramLink className="btn btn-accent">Se Instagram</InstagramLink>
              <FacebookLink className="btn btn-on-dark">Se Facebook</FacebookLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
