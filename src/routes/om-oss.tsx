import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { TatreezBand, TatreezDivider, TatreezMotif, OliveBranch } from "@/components/Tatreez";
import { BOARD, SITE, initials } from "@/lib/site";

import gatheringImg from "@/assets/gathering.jpg";
import oliveImg from "@/assets/olive.jpg";

const title = "Om Palmang Kulturforening | Kultur, kulturarv og fellesskap";
const description =
  "Palmang Kulturforening arbeider for å synliggjøre og formidle palestinsk kultur, identitet og kulturarv i Norge. Les om visjon, mål, organisasjonen og styret.";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/om-oss" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: OmOss,
});

const goals = [
  "Synliggjøre palestinsk kultur, kulturarv og identitet i det norske samfunnet.",
  "Bevare og videreføre kulturarven til kommende generasjoner.",
  "Skape kulturelle møteplasser, utstillinger, verksteder og seminarer.",
  "Bygge broer gjennom dialog og kulturutveksling.",
  "Engasjere kvinner, ungdom, barn og familier.",
  "Samarbeide med kulturinstitusjoner, kommuner, skoler og organisasjoner.",
  "Støtte kunstnere, håndverkere og kulturformidlere.",
  "Bidra til kulturelt mangfold, gjensidig respekt og tilhørighet.",
];

function OmOss() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title="Om Palmang"
        subtitle="Kultur. Kulturarv. Fellesskap."
        image={gatheringImg}
        imageAlt="Kulturell samling med broderi rundt et bord"
      />

      {/* Hvem vi er */}
      <section className="section-pad">
        <div className="shell grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Hvem vi er" title="En kulturell forening med røtter og retning">
              <p>
                Palmang Kulturforening er en kulturell forening som arbeider for å synliggjøre og
                formidle palestinsk kultur, identitet og kulturarv i Norge.
              </p>
              <p>
                Gjennom kulturelle aktiviteter og samarbeid ønsker vi å skape møteplasser der
                mennesker kan bli kjent med palestinsk kultur og samtidig bidra til dialog,
                kulturutveksling og fellesskap.
              </p>
            </SectionHeading>
            <Reveal delay={150}>
              <OliveBranch className="mt-10" />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="arch img-zoom border border-border">
              <img
                src={oliveImg}
                alt="Olivenlund på terrassert skråning i gyllent kveldslys"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vår visjon */}
      <section className="section-pad relative overflow-hidden bg-sand">
        <div className="tatreez-bg pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <div className="shell relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <TatreezMotif size={14} />
              Vår visjon
            </p>
          </Reveal>
          <Reveal delay={90}>
            <blockquote className="mt-8 font-display text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1.22] tracking-[-0.02em]">
              «Palmang Kulturforening skal være en aktiv kulturell møteplass som synliggjør
              palestinsk kultur, identitet og kulturarv i det norske samfunnet.»
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <TatreezDivider className="mt-10" />
          </Reveal>
        </div>
      </section>

      {/* Våre mål */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Våre mål" title="Det vi ønsker å bidra til" />
          <ol className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {goals.map((goal, i) => (
              <Reveal as="li" key={goal} delay={(i % 2) * 70}>
                <div className="flex gap-5 border-t border-border pt-5">
                  <span className="font-display text-xl text-burgundy tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.975rem] leading-relaxed text-muted-foreground">{goal}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Hvorfor Palmang */}
      <section className="section-pad bg-olive-deep text-primary-foreground">
        <div className="shell">
          <SectionHeading eyebrow="Hvorfor Palmang" title="Fordi kulturarv må leves for å leve videre" tone="light">
            <p>
              Palestinsk kultur er rik på håndverk, mat, musikk, poesi og fortellinger. Uten
              møteplasser står denne kunnskapen i fare for å bli borte mellom generasjoner.
            </p>
            <p>
              Palmang finnes for å gi kulturarven en levende arena i Norge – der den kan oppleves,
              praktiseres og deles på tvers av bakgrunn og alder.
            </p>
          </SectionHeading>
          <Reveal delay={140}>
            <div className="mt-12 max-w-lg opacity-60">
              <TatreezBand tone="light" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Organisasjonen */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Organisasjonen" title="Formell informasjon" />
          <Reveal delay={100}>
            <div className="card-soft mt-12 max-w-2xl p-8 md:p-10">
              <h3 className="display-md">{SITE.fullName}</h3>
              <TatreezDivider className="my-7 justify-start" />
              <dl className="grid gap-6 sm:grid-cols-2">
                {[
                  ["Juridisk navn", SITE.legalName],
                  ["Organisasjonsnummer", SITE.orgNumber],
                  ["Organisasjonsform", SITE.orgForm],
                  ["Stiftelsesdato", SITE.founded],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1.5">{value}</dd>
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <dt className="text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
                    Registrert adresse
                  </dt>
                  <dd className="mt-1.5">
                    {SITE.address.street}
                    <br />
                    {SITE.address.postal}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Styret */}
      <section className="section-pad bg-sand/60">
        <div className="shell">
          <SectionHeading eyebrow="Styret" title="Møt styret" align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {BOARD.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <article className="card-soft flex h-full flex-col items-center p-9 text-center">
                  <span
                    className="grid h-20 w-20 place-items-center rounded-full bg-olive-deep font-display text-2xl text-primary-foreground"
                    aria-hidden="true"
                  >
                    {initials(member.name)}
                  </span>
                  <h3 className="mt-6 text-lg font-medium">{member.name}</h3>
                  <p className="mt-1 text-sm tracking-[0.16em] uppercase text-burgundy">
                    {member.role}
                  </p>
                  <TatreezMotif size={14} className="mt-6" tone="olive" />
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-12 text-center">
              <Link to="/kontakt" className="btn btn-primary">
                Kontakt Palmang
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
