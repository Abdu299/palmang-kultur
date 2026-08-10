import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark,
  School,
  BookOpen,
  Building2,
  Users,
  HeartHandshake,
  Palette,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { TatreezDivider, TatreezMotif } from "@/components/Tatreez";

import arkitekturImg from "@/assets/arkitektur.jpg";

const title = "Samarbeid med Palmang Kulturforening";
const description =
  "Palmang Kulturforening samarbeider med kommuner, skoler, biblioteker, museer, kulturinstitusjoner, foreninger, kunstnere og kulturformidlere om kulturelle møteplasser.";

export const Route = createFileRoute("/samarbeid")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/samarbeid" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/samarbeid" }],
  }),
  component: Samarbeid,
});

const partners = [
  { icon: Landmark, label: "Kommuner" },
  { icon: School, label: "Skoler" },
  { icon: BookOpen, label: "Biblioteker" },
  { icon: Building2, label: "Museer" },
  { icon: Sparkles, label: "Kulturinstitusjoner" },
  { icon: Users, label: "Foreninger" },
  { icon: HeartHandshake, label: "Frivillige organisasjoner" },
  { icon: Palette, label: "Kunstnere" },
  { icon: Megaphone, label: "Kulturformidlere" },
];

const formats = [
  {
    title: "Kulturarrangementer",
    text: "Kulturkvelder, markeringer og programmer der palestinsk kultur formidles til et bredt publikum.",
  },
  {
    title: "Utstillinger",
    text: "Utstillinger med broderi, tekstil, kunst, håndverk og kulturhistorisk materiale.",
  },
  {
    title: "Workshops",
    text: "Praktiske verksteder i tatreez, håndverk eller matkultur for ulike aldersgrupper.",
  },
  {
    title: "Skolebesøk",
    text: "Formidling tilpasset elever, med rom for samtale, praktisk arbeid og spørsmål.",
  },
  {
    title: "Foredrag",
    text: "Foredrag og samtaler om kulturarv, håndverkstradisjoner, litteratur og kulturhistorie.",
  },
  {
    title: "Matkultur",
    text: "Matverksteder og smaksopplevelser der historier deles rundt bordet.",
  },
  {
    title: "Kunstprosjekter",
    text: "Samarbeid med kunstnere om prosjekter, produksjon og presentasjon.",
  },
  {
    title: "Familieaktiviteter",
    text: "Inkluderende aktiviteter der barn, ungdom og voksne deltar sammen.",
  },
  {
    title: "Kulturformidling",
    text: "Bidrag til programmer, festivaler og prosjekter som løfter kulturelt mangfold.",
  },
];

function Samarbeid() {
  return (
    <>
      <PageHero
        eyebrow="Samarbeid"
        title="Samarbeid med Palmang"
        subtitle="Sammen kan vi skape møteplasser som formidler kultur, kunnskap og fellesskap."
        image={arkitekturImg}
        imageAlt="Kalksteinsarkitektur med spissbuer i varmt morgenlys"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Hvem vi samarbeider med" title="Vi ønsker å samarbeide bredt">
            <p>
              Palmang Kulturforening ønsker å samarbeide med aktører som deler interessen for
              kulturformidling, kunnskap og kulturelt mangfold – lokalt og nasjonalt.
            </p>
          </SectionHeading>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal as="li" key={partner.label} delay={(i % 3) * 70}>
                <div className="flex items-center gap-4 border border-border bg-card px-5 py-4 transition-colors hover:border-olive">
                  <partner.icon size={19} className="shrink-0 text-olive" aria-hidden="true" />
                  <span className="min-w-0">{partner.label}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-sand/70">
        <div className="tatreez-bg pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden="true" />
        <div className="shell relative">
          <SectionHeading eyebrow="Muligheter" title="Slik kan et samarbeid se ut" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <article className="card-soft flex h-full flex-col p-8">
                  <TatreezMotif size={16} />
                  <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-olive-deep text-primary-foreground">
        <div className="shell text-center">
          <Reveal>
            <TatreezMotif size={22} tone="light" className="mx-auto" />
            <h2 className="display-lg mt-7">Har dere en idé?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[color-mix(in_oklab,white_82%,transparent)]">
              Ta kontakt med oss dersom dere ønsker å diskutere et mulig samarbeid.
            </p>
            <TatreezDivider tone="light" className="mt-10" />
            <Link to="/kontakt" className="btn btn-on-dark mt-10">
              Kontakt Palmang
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
