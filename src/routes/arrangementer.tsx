import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { TatreezMotif } from "@/components/Tatreez";
import { FacebookLink, InstagramLink } from "@/components/SocialLinks";
import { PAST_ACTIVITIES, SOCIAL } from "@/lib/site";

import gatheringImg from "@/assets/gathering.jpg";
import tekstilImg from "@/assets/tekstil.jpg";
import foodImg from "@/assets/food.jpg";
import handverkImg from "@/assets/handverk.jpg";
import kunstImg from "@/assets/kunst.jpg";
import barnImg from "@/assets/barn.jpg";
import oliveImg from "@/assets/olive.jpg";

const title = "Arrangementer og aktiviteter | Palmang Kulturforening";
const description =
  "Palmang arrangerer og deltar i kulturelle aktiviteter gjennom året. Følg Instagram og Facebook for oppdatert informasjon om kommende arrangementer.";

export const Route = createFileRoute("/arrangementer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/arrangementer" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/arrangementer" }],
  }),
  component: Arrangementer,
});

function Arrangementer() {
  return (
    <>
      <PageHero
        eyebrow="Arrangementer"
        title="Arrangementer & aktiviteter"
        subtitle="Palmang arrangerer og deltar i kulturelle aktiviteter gjennom året. For oppdatert informasjon om kommende arrangementer og aktiviteter, følg våre sosiale medier."
        image={gatheringImg}
        imageAlt="Kulturell samling rundt et bord med broderi og te"
      />

      {/* Instagram */}
      <section className="section-pad">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Instagram" title="Siste nytt fra Instagram">
              <p>
                På Instagram deler vi bilder, videoer og reels fra aktivitetene våre – og informasjon
                om hva som kommer.
              </p>
              <p className="text-sm tracking-wide text-burgundy">{SOCIAL.instagram.handle}</p>
            </SectionHeading>
            <Reveal delay={140}>
              <InstagramLink className="btn btn-accent mt-8">
                Se Palmang på Instagram
              </InstagramLink>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="grid grid-cols-3 gap-2.5">
              {[tekstilImg, foodImg, handverkImg, kunstImg, barnImg, oliveImg].map((src, i) => (
                <div key={i} className="img-zoom aspect-square overflow-hidden border border-border">
                  <img
                    src={src}
                    alt="Kulturbilde som illustrerer Palmangs innhold"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facebook */}
      <section className="section-pad bg-olive-deep text-primary-foreground">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="img-zoom border border-[color-mix(in_oklab,white_18%,transparent)]">
              <img
                src={gatheringImg}
                alt="Mennesker samlet rundt et bord i en kulturell aktivitet"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Facebook" title="Arrangementer og oppdateringer" tone="light">
              <p>
                På Facebook publiserer vi arrangementer, oppdateringer og praktisk informasjon om
                hva som skjer i Palmang Kulturforening.
              </p>
            </SectionHeading>
            <Reveal delay={140}>
              <FacebookLink className="btn btn-on-dark mt-8">Se Palmang på Facebook</FacebookLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kulturkveld 14. november 2026 */}
      <section className="section-pad bg-sand/60">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <figure className="overflow-hidden border border-border bg-background p-3 shadow-sm md:p-5">
              <img
                src="/images/kulturkveld-14-november-2026.webp"
                alt="Plakat for kulturkvelden 14. november 2026 med Huda al-Mashhadani, poesi og musikk"
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow"><TatreezMotif size={14} /> Tidligere arrangement</p>
            <h2 className="display-md mt-5">Kulturkveld med litteratur, poesi og musikk</h2>
            <p className="lead mt-5">
              14. november 2026 ble det arrangert en kulturkveld i Oslo i samarbeid med
              Palmang Kulturforening og Nard for kultur og kunst.
            </p>
            <p className="mt-5 text-muted-foreground">
              Kvelden hadde forfatterbesøk av Huda al-Mashhadani, diktlesning,
              litterære innslag og musikalske bidrag.
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Lørdag 14. november 2026 kl. 17:00 · Mariboes gate 8, 0183 Oslo
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tidligere aktiviteter */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Arkiv" title="Tidligere aktiviteter" />
          {PAST_ACTIVITIES.length === 0 ? (
            <Reveal delay={100}>
              <div className="mt-12 flex max-w-2xl flex-col items-start gap-5 border border-dashed border-border p-8 md:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sand text-olive-deep">
                  <CalendarDays size={21} aria-hidden="true" />
                </span>
                <p className="lead">
                  Her vil vi etter hvert samle gjennomførte aktiviteter med bilder, beskrivelse, dato
                  og sted. Inntil da finner du de siste aktivitetene våre på sosiale medier.
                </p>
                <div className="flex flex-wrap gap-3">
                  <InstagramLink className="btn btn-accent">Instagram</InstagramLink>
                  <FacebookLink className="btn btn-outline">Facebook</FacebookLink>
                </div>
              </div>
            </Reveal>
          ) : (
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PAST_ACTIVITIES.map((activity, i) => (
                <Reveal key={activity.title} delay={i * 70}>
                  <article className="card-soft h-full overflow-hidden">
                    {activity.image ? (
                      <div className="img-zoom">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="p-7">
                      <p className="text-xs tracking-[0.18em] uppercase text-burgundy">
                        {activity.date} · {activity.location}
                      </p>
                      <h3 className="mt-3 text-xl font-medium">{activity.title}</h3>
                      <p className="mt-2 text-[0.975rem] text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-center gap-6 border-t border-border pt-12 text-center">
              <TatreezMotif size={20} />
              <p className="font-display text-2xl">
                Følg oss for å få med deg våre neste aktiviteter.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
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
