import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { TatreezDivider, TatreezMotif } from "@/components/Tatreez";
import { FacebookLink, InstagramLink } from "@/components/SocialLinks";
import { BOARD, SITE, SOCIAL, initials, type BoardMember } from "@/lib/site";

import tekstilImg from "@/assets/tekstil.jpg";

const title = "Kontakt | Palmang Kulturforening";
const description =
  "Kontakt Palmang Kulturforening. Her finner du kontaktpersoner i styret, adresse, organisasjonsnummer og våre sosiale medier.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

function ContactCard({ member, delay }: { member: BoardMember; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="card-soft flex h-full flex-col p-8">
        <div className="flex min-w-0 items-center gap-4">
          <span
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-olive-deep font-display text-lg text-primary-foreground"
            aria-hidden="true"
          >
            {initials(member.name)}
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-medium">{member.name}</h3>
            <p className="mt-0.5 text-xs tracking-[0.18em] uppercase text-burgundy">
              {member.role}
            </p>
          </div>
        </div>

        <TatreezDivider className="my-7 justify-start" />

        <dl className="space-y-4 text-[0.95rem]">
          <div className="flex items-start gap-3">
            <Phone size={17} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
            <div className="min-w-0">
              <dt className="text-xs tracking-[0.16em] uppercase text-muted-foreground">Telefon</dt>
              <dd className="mt-0.5">
                {member.phone ? (
                  <a className="hover:underline" href={`tel:${member.phone.replace(/\s/g, "")}`}>
                    {member.phone}
                  </a>
                ) : (
                  <span className="text-muted-foreground italic">[Legg inn telefonnummer]</span>
                )}
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={17} className="mt-1 shrink-0 text-olive" aria-hidden="true" />
            <div className="min-w-0">
              <dt className="text-xs tracking-[0.16em] uppercase text-muted-foreground">E-post</dt>
              <dd className="mt-0.5 break-words">
                {member.email ? (
                  <a className="hover:underline" href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                ) : (
                  <span className="text-muted-foreground italic">[Legg inn e-postadresse]</span>
                )}
              </dd>
            </div>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {member.email ? (
            <a href={`mailto:${member.email}`} className="btn btn-primary px-5 py-2.5 text-sm">
              Send e-post
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="btn btn-outline pointer-events-none px-5 py-2.5 text-sm opacity-45"
            >
              Send e-post
            </span>
          )}
          {member.phone ? (
            <a
              href={`tel:${member.phone.replace(/\s/g, "")}`}
              className="btn btn-outline px-5 py-2.5 text-sm"
            >
              Ring
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="btn btn-outline pointer-events-none px-5 py-2.5 text-sm opacity-45"
            >
              Ring
            </span>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Kontakt Palmang"
        subtitle="Ta gjerne kontakt med oss dersom du har spørsmål, ønsker samarbeid eller vil vite mer om Palmang Kulturforening."
        image={tekstilImg}
        imageAlt="Broderte tekstiler med geometriske motiv i rødt og oliven"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Kontaktpersoner" title="Menneskene du kan snakke med" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((member, i) => (
              <ContactCard key={member.name} member={member} delay={i * 80} />
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
              Telefonnummer og e-postadresser legges inn så snart de er klare. Vi oppgir ingen
              kontaktopplysninger før de er bekreftet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-sand/70">
        <div className="tatreez-bg pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden="true" />
        <div className="shell relative grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="card-soft h-full p-8 md:p-10">
              <TatreezMotif size={18} />
              <h2 className="display-md mt-5">{SITE.fullName}</h2>
              <address className="mt-6 space-y-1 not-italic">
                <p className="flex items-start gap-3">
                  <MapPin size={17} className="mt-1.5 shrink-0 text-olive" aria-hidden="true" />
                  <span>
                    {SITE.address.street}
                    <br />
                    {SITE.address.postal}
                  </span>
                </p>
              </address>
              <dl className="mt-7 border-t border-border pt-6">
                <dt className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
                  Organisasjonsnummer
                </dt>
                <dd className="mt-1">{SITE.orgNumber}</dd>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="card-soft h-full p-8 md:p-10">
              <TatreezMotif size={18} tone="olive" />
              <h2 className="display-md mt-5">Følg oss</h2>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
                    Instagram
                  </dt>
                  <dd className="mt-1">{SOCIAL.instagram.handle}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
                    Facebook
                  </dt>
                  <dd className="mt-1">{SOCIAL.facebook.handle}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <InstagramLink className="btn btn-accent">Følg oss på Instagram</InstagramLink>
                <FacebookLink className="btn btn-outline">Følg oss på Facebook</FacebookLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
