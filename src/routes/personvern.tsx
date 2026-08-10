import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/Section";
import { SITE } from "@/lib/site";

const title = "Personvern | Palmang Kulturforening";
const description =
  "Slik behandler Palmang Kulturforening personopplysninger. Nettsiden har ingen kontaktskjema og samler ikke inn personopplysninger fra besøkende.";

export const Route = createFileRoute("/personvern")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/personvern" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/personvern" }],
  }),
  component: Personvern,
});

function Personvern() {
  return (
    <section className="section-pad">
      <div className="shell max-w-3xl">
        <SectionHeading eyebrow="Personvern" title="Personvern hos Palmang" />
        <div className="mt-10 space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
            Denne nettsiden har ingen kontaktskjema, og vi samler ikke inn personopplysninger fra
            besøkende gjennom nettsiden.
          </p>
          <h2 className="display-md pt-4 text-foreground">Lenker til sosiale medier</h2>
          <p>
            Nettsiden lenker til våre profiler på Instagram og Facebook. Når du åpner disse lenkene,
            gjelder personvernvilkårene til de respektive plattformene.
          </p>
          <h2 className="display-md pt-4 text-foreground">Henvendelser</h2>
          <p>
            Dersom du kontakter oss direkte, behandler vi opplysningene du oppgir kun for å svare på
            henvendelsen din. Vi deler dem ikke med andre.
          </p>
          <h2 className="display-md pt-4 text-foreground">Behandlingsansvarlig</h2>
          <p>
            {SITE.fullName}
            <br />
            {SITE.address.street}, {SITE.address.postal}
            <br />
            Org.nr. {SITE.orgNumber}
          </p>
        </div>
      </div>
    </section>
  );
}
