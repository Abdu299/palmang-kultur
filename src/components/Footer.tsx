import { Link } from "@tanstack/react-router";
import { SITE, SOCIAL } from "@/lib/site";
import { TatreezBand, TatreezMotif } from "@/components/Tatreez";

const columns = [
  {
    title: "Utforsk",
    links: [
      { label: "Hjem", to: "/" },
      { label: "Om oss", to: "/om-oss" },
      { label: "Kultur & aktiviteter", to: "/kultur" },
      { label: "Arrangementer", to: "/arrangementer" },
    ],
  },
  {
    title: "Palmang",
    links: [
      { label: "Samarbeid", to: "/samarbeid" },
      { label: "Kontakt", to: "/kontakt" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive-deep text-primary-foreground">
      <div className="tatreez-bg pointer-events-none absolute inset-0 opacity-[0.13]" aria-hidden="true" />
      <div className="relative">
        <div className="opacity-30">
          <TatreezBand tone="light" />
        </div>

        <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-20">
          <div>
            <div className="flex items-center gap-3">
              <TatreezMotif size={20} tone="light" />
              <span>
                <span className="block font-display text-xl font-semibold tracking-[0.16em]">
                  PALMANG
                </span>
                <span className="mt-1 block text-[0.6rem] tracking-[0.3em] opacity-70">
                  KULTURFORENING
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-80">{SITE.tagline}</p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[0.7rem] font-medium tracking-[0.24em] uppercase opacity-60">
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="opacity-85 transition-opacity hover:opacity-100 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-[0.7rem] font-medium tracking-[0.24em] uppercase opacity-60">
              Følg oss
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-85 transition-opacity hover:opacity-100 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-85 transition-opacity hover:opacity-100 hover:underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <address className="mt-7 space-y-1 text-sm not-italic opacity-80">
              <p>Org.nr. {SITE.orgNumber}</p>

            </address>
          </div>
        </div>

        <div className="shell flex flex-col gap-3 border-t border-[color-mix(in_oklab,white_18%,transparent)] py-6 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {SITE.fullName}</p>
          <Link to="/personvern" className="transition-opacity hover:opacity-100 hover:underline">
            Personvern
          </Link>
        </div>
      </div>
    </footer>
  );
}
