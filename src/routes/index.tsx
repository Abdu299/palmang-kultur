import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Palette,
  Scissors,
  UtensilsCrossed,
  Music4,
  Users,
  Sparkles,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/Section";
import { TatreezBand, TatreezDivider, TatreezMotif, OliveBranch } from "@/components/Tatreez";
import { FacebookLink, InstagramLink } from "@/components/SocialLinks";
import { SOCIAL } from "@/lib/site";

import heroImg from "@/assets/hero-tatreez.jpg";
import gatheringImg from "@/assets/gathering.jpg";
import thobeImg from "@/assets/thobe.jpg";
import foodImg from "@/assets/food.jpg";
import oliveImg from "@/assets/olive.jpg";
import musicImg from "@/assets/music.jpg";
import handverkImg from "@/assets/handverk.jpg";
import kunstImg from "@/assets/kunst.jpg";
import tekstilImg from "@/assets/tekstil.jpg";
import barnImg from "@/assets/barn.jpg";

const title = "Palmang Kulturforening | Palestinsk kultur og kulturarv i Norge";
const description =
  "Palmang Kulturforening formidler palestinsk kultur, identitet og kulturarv i Norge gjennom kunst, tatreez, matkultur, musikk, fortellinger og kulturelle møteplasser.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Palmang Kulturforening",
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gamle Bomansvikvei 15",
            postalCode: "1459",
            addressLocality: "Nesodden",
            addressCountry: "NO",
          },
          sameAs: [SOCIAL.instagram.url, SOCIAL.facebook.url],
        }),
      },
    ],
  }),
  component: Home,
});

const work = [
  {
    icon: Palette,
    title: "Kunst & kreativitet",
    text: "Vi ønsker å løfte frem palestinske kunstnere, kreative uttrykk og visuell kultur.",
  },
  {
    icon: Scissors,
    title: "Tatreez & håndverk",
    text: "Vi formidler tradisjonelt palestinsk broderi, håndverk og kunnskap som har blitt videreført gjennom generasjoner.",
  },
  {
    icon: UtensilsCrossed,
    title: "Matkultur",
    text: "Gjennom palestinsk matkultur deler vi historier, tradisjoner, smaker og fellesskap.",
  },
  {
    icon: Music4,
    title: "Musikk & fortellinger",
    text: "Musikk, litteratur, poesi og muntlige fortellinger er en viktig del av palestinsk kulturarv.",
  },
  {
    icon: Users,
    title: "Barn, ungdom & familier",
    text: "Vi ønsker å gjøre kulturarven levende og tilgjengelig for nye generasjoner gjennom inkluderende aktiviteter.",
  },
  {
    icon: Sparkles,
    title: "Kulturelle møteplasser",
    text: "Vi skaper arenaer der mennesker med ulike bakgrunner kan møtes, lære og dele kulturelle opplevelser.",
  },
];

const goals = [
  {
    title: "Synliggjøre palestinsk kultur",
    text: "Gjøre palestinsk kultur, kulturarv og identitet mer kjent og tilgjengelig for det norske samfunnet og mennesker med ulike bakgrunner.",
  },
  {
    title: "Bevare kulturarven",
    text: "Bevare og videreføre palestinsk kulturarv til kommende generasjoner gjennom blant annet broderi, kunst, musikk, litteratur, matkultur, fortellinger og tradisjoner.",
  },
  {
    title: "Skape kulturelle møteplasser",
    text: "Arrangere kulturelle aktiviteter, utstillinger, verksteder, seminarer, møter og konferanser.",
  },
  {
    title: "Bygge broer",
    text: "Fremme dialog, kulturutveksling og møteplasser mellom palestinere, det norske samfunnet og mennesker fra andre kulturer.",
  },
  {
    title: "Engasjere nye generasjoner",
    text: "Legge til rette for deltakelse blant kvinner, ungdom, barn og familier gjennom inkluderende kulturelle og sosiale aktiviteter.",
  },
  {
    title: "Samarbeide",
    text: "Samarbeide med kulturinstitusjoner, kommuner, skoler, foreninger, organisasjoner og andre relevante aktører.",
  },
  {
    title: "Støtte kreative aktører",
    text: "Støtte kunstnere, håndverkere, kulturformidlere og andre kreative aktører og skape arenaer der deres arbeid kan presenteres.",
  },
  {
    title: "Bidra til mangfold",
    text: "Bidra til kulturelt mangfold, gjensidig respekt, forståelse, tilhørighet og aktiv deltakelse i det norske samfunnet.",
  },
];

const collabExamples = [
  "Kulturarrangementer",
  "Utstillinger",
  "Workshops",
  "Skolebesøk",
  "Foredrag",
  "Matkultur",
  "Kunstprosjekter",
  "Familieaktiviteter",
  "Kulturformidling",
];

function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-charcoal">
        <img
          src={heroImg}
          alt="Hender som broderer tradisjonell palestinsk tatreez med rød tråd på svart stoff"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.03_60/0.92)] via-[oklch(0.2_0.04_40/0.68)] to-[oklch(0.28_0.05_120/0.72)]"
          aria-hidden="true"
        />
        <div className="shell relative flex min-h-[88svh] flex-col justify-center py-24">
          <Reveal>
            <p className="eyebrow text-[color-mix(in_oklab,white_82%,transparent)]">
              <TatreezMotif size={14} tone="light" />
              Palmang Kulturforening
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display-xl mt-7 max-w-4xl text-primary-foreground">
              Palestinsk kultur.
              <br />
              Levende kulturarv.
              <br />
              <span className="italic text-[color-mix(in_oklab,var(--sand)_92%,transparent)]">
                Fellesskap i Norge.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-[color-mix(in_oklab,white_84%,transparent)] md:text-xl">
              Vi formidler palestinsk kultur, identitet og kulturarv gjennom kunst, tradisjoner,
              mat, musikk, håndverk, fortellinger og kulturelle møteplasser.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/om-oss" className="btn btn-accent">
                Utforsk Palmang
              </Link>
              <Link to="/kultur" className="btn btn-on-dark">
                Se våre aktiviteter
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-14 max-w-md opacity-70">
              <TatreezBand tone="light" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Introduksjon ---------- */}
      <section className="section-pad">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Hvem er vi?" title="En møteplass for kultur, mennesker og historier">
              <p>
                Palmang Kulturforening skal være en aktiv kulturell møteplass som synliggjør
                palestinsk kultur, identitet og kulturarv i det norske samfunnet.
              </p>
              <p>
                Vi ønsker å formidle bredden og mangfoldet i palestinsk kultur og bygge broer mellom
                palestinsk kultur og mennesker med ulike kulturelle bakgrunner gjennom dialog,
                kunnskap og kulturelle møteplasser.
              </p>
            </SectionHeading>
            <Reveal delay={180}>
              <OliveBranch className="mt-10" />
              <Link to="/om-oss" className="btn btn-outline mt-8">
                Les mer om oss <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative">
              <div className="arch img-zoom border border-border">
                <img
                  src={gatheringImg}
                  alt="Kvinner og barn samlet rundt et bord med broderirammer og te"
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="tatreez-bg absolute -bottom-6 -left-6 -z-10 hidden h-40 w-40 opacity-60 md:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Palestinsk kultur ---------- */}
      <section className="section-pad bg-sand/60">
        <div className="shell">
          <SectionHeading eyebrow="Palestinsk kultur" title="En kulturarv rik på historier" align="center">
            <p>
              Palestinsk kultur lever gjennom generasjoner. Den finnes i broderiet, maten, musikken,
              fortellingene, poesien, kunsten, håndverket og tradisjonene som mennesker tar med seg
              og viderefører.
            </p>
            <p>
              Palmang ønsker å skape rom der denne kulturarven kan oppleves, deles og videreføres.
            </p>
          </SectionHeading>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {[
              { src: thobeImg, alt: "Broderte panel på tradisjonell palestinsk thobe", span: "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full", label: "Tatreez" },
              { src: foodImg, alt: "Palestinsk måltid med hummus, brød og oliven", span: "aspect-[4/3]", label: "Matkultur" },
              { src: oliveImg, alt: "Olivenlund på terrassert skråning i kveldslys", span: "aspect-[4/3]", label: "Olivenlund" },
              { src: kunstImg, alt: "Kunstutstilling med malerier inspirert av broderimotiv", span: "aspect-[4/3]", label: "Kunst" },
              { src: musicImg, alt: "Musiker som spiller oud under en kulturkveld", span: "aspect-[4/3]", label: "Musikk" },
              { src: handverkImg, alt: "Tradisjonelt håndverk med keramikk og flettede kurver", span: "aspect-[4/3]", label: "Håndverk" },
              { src: barnImg, alt: "Barn som broderer i et kreativt verksted", span: "aspect-[4/3]", label: "Nye generasjoner" },
              { src: tekstilImg, alt: "Broderte tekstiler og puter med geometriske motiv", span: "aspect-[4/3]", label: "Tekstil" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 60} className={item.span}>
                <figure className={`img-zoom group relative h-full overflow-hidden border border-border/80 ${item.span}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.2_0.03_60/0.85)] to-transparent px-4 pt-10 pb-3 text-xs font-medium tracking-[0.18em] uppercase text-primary-foreground">
                    {item.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Dette jobber vi med ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Dette jobber vi med" title="Kultur som oppleves og deles" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {work.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="card-soft flex h-full flex-col p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sand text-olive-deep">
                    <item.icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="display-md mt-6 text-[1.35rem]">{item.title}</h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                  <TatreezMotif size={14} className="mt-6" tone="olive" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Aktiviteter / sosiale medier ---------- */}
      <section className="section-pad bg-charcoal text-primary-foreground">
        <div className="shell">
          <SectionHeading
            eyebrow="Våre aktiviteter"
            title="Se hva som skjer hos Palmang"
            tone="light"
            align="center"
          >
            <p>
              Vi arrangerer og deltar i kulturelle aktiviteter, møteplasser, workshops og
              arrangementer gjennom året.
            </p>
            <p>
              På våre sosiale medier deler vi bilder, videoer og informasjon om både kommende og
              gjennomførte aktiviteter.
            </p>
          </SectionHeading>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col border border-[color-mix(in_oklab,white_18%,transparent)] bg-[color-mix(in_oklab,white_5%,transparent)] p-8 md:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-burgundy">
                  <Instagram size={21} aria-hidden="true" />
                </span>
                <h3 className="display-md mt-6">Følg oss på Instagram</h3>
                <p className="mt-4 text-[color-mix(in_oklab,white_80%,transparent)]">
                  Se bilder, videoer, reels, kulturinnhold og øyeblikk fra våre aktiviteter.
                </p>
                <p className="mt-3 text-sm tracking-wide text-[color-mix(in_oklab,var(--sand)_85%,transparent)]">
                  {SOCIAL.instagram.handle}
                </p>
                <div className="mt-8 grid grid-cols-3 gap-2">
                  {[thobeImg, foodImg, tekstilImg, oliveImg, handverkImg, gatheringImg].map(
                    (src, i) => (
                      <div key={i} className="img-zoom aspect-square overflow-hidden">
                        <img
                          src={src}
                          alt="Kulturbilde fra Palmangs univers"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-8">
                  <InstagramLink className="btn btn-accent">
                    Se våre aktiviteter på Instagram
                  </InstagramLink>
                </div>
              </article>
            </Reveal>

            <Reveal delay={110}>
              <article className="flex h-full flex-col border border-[color-mix(in_oklab,white_18%,transparent)] bg-[color-mix(in_oklab,white_5%,transparent)] p-8 md:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-olive">
                  <Facebook size={21} aria-hidden="true" />
                </span>
                <h3 className="display-md mt-6">Følg oss på Facebook</h3>
                <p className="mt-4 text-[color-mix(in_oklab,white_80%,transparent)]">
                  Her deler vi arrangementer, oppdateringer og informasjon om hva som skjer i
                  Palmang Kulturforening.
                </p>
                <div className="my-8 grow">
                  <div className="img-zoom h-full min-h-56 overflow-hidden">
                    <img
                      src={gatheringImg}
                      alt="Kulturell samling med broderi og te rundt et bord"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <FacebookLink className="btn btn-on-dark">Se aktiviteter på Facebook</FacebookLink>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-14 text-center">
              <p className="font-display text-2xl">
                Følg oss for å få med deg våre neste aktiviteter.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <InstagramLink className="btn btn-accent">Følg oss på Instagram</InstagramLink>
                <FacebookLink className="btn btn-on-dark">Følg oss på Facebook</FacebookLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Vår visjon ---------- */}
      <section className="section-pad relative overflow-hidden bg-sand">
        <div className="tatreez-bg pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <div className="shell relative">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="eyebrow justify-center">
                <TatreezMotif size={14} />
                Vår visjon
              </p>
            </Reveal>
            <Reveal delay={90}>
              <blockquote className="mt-8">
                <p className="font-display text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[1.2] tracking-[-0.02em] text-charcoal">
                  «Palmang Kulturforening skal være en aktiv kulturell møteplass som synliggjør
                  palestinsk kultur, identitet og kulturarv i det norske samfunnet.»
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={170}>
              <TatreezDivider className="mt-10" />
            </Reveal>
            <Reveal delay={220}>
              <p className="lead mx-auto mt-10 max-w-2xl">
                Vi ønsker å formidle bredden og mangfoldet i palestinsk kultur og bygge broer mellom
                palestinsk kultur og mennesker med ulike kulturelle bakgrunner gjennom dialog,
                kunnskap og kulturelle møteplasser.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Våre mål ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Våre mål" title="Det vi ønsker å bidra til" />
          <ol className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {goals.map((goal, i) => (
              <Reveal as="li" key={goal.title} delay={(i % 2) * 80}>
                <div className="flex gap-5 border-t border-border pt-6">
                  <span className="font-display text-2xl text-burgundy tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium">{goal.title}</h3>
                    <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                      {goal.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Kulturarven lever videre ---------- */}
      <section className="section-pad bg-ivory">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="img-zoom border border-border">
                <img
                  src={thobeImg}
                  alt="Detalj av rødt korssting-broderi på en tradisjonell palestinsk kjole"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="tatreez-bg absolute -top-6 -right-6 -z-10 hidden h-36 w-36 opacity-60 md:block" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Kulturarv" title="Kulturarven lever videre">
              <p>Kulturarv handler om mer enn å bevare fortiden.</p>
              <p>
                Den handler om å videreføre historier, kunnskap og tradisjoner til nye generasjoner.
              </p>
              <p>
                Gjennom Palmang ønsker vi å skape møteplasser der palestinsk kultur ikke bare vises
                frem, men også oppleves, praktiseres og deles.
              </p>
            </SectionHeading>
            <Reveal delay={160}>
              <div className="mt-10 max-w-sm opacity-80">
                <TatreezBand tone="olive" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Samarbeid ---------- */}
      <section className="section-pad bg-olive-deep text-primary-foreground">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <SectionHeading eyebrow="Samarbeid" title="La oss skape noe sammen" tone="light">
            <p>
              Palmang Kulturforening ønsker å samarbeide med kulturinstitusjoner, kommuner, skoler,
              biblioteker, foreninger, organisasjoner, kunstnere og andre aktører.
            </p>
            <p>
              Sammen kan vi skape aktiviteter som bidrar til kulturformidling, kunnskap, møteplasser
              og kulturelt mangfold.
            </p>
          </SectionHeading>
          <Reveal delay={120}>
            <ul className="flex flex-wrap gap-2.5">
              {collabExamples.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[color-mix(in_oklab,white_28%,transparent)] px-4 py-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/samarbeid" className="btn btn-on-dark mt-9">
              Samarbeid med oss <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Avsluttende CTA ---------- */}
      <section className="section-pad">
        <div className="shell text-center">
          <Reveal>
            <TatreezMotif size={22} className="mx-auto" />
            <h2 className="display-lg mt-7">Bli kjent med Palmang</h2>
            <p className="lead mx-auto mt-5 max-w-xl">
              Oppdag palestinsk kultur, møt mennesker og følg våre aktiviteter.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <InstagramLink className="btn btn-accent">Følg oss på Instagram</InstagramLink>
              <FacebookLink className="btn btn-outline">Følg oss på Facebook</FacebookLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
