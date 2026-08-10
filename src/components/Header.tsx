import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV, SOCIAL } from "@/lib/site";
import { SocialIconLinks } from "@/components/SocialLinks";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-border bg-[color-mix(in_oklab,var(--ivory)_92%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-[color-mix(in_oklab,var(--ivory)_75%,transparent)] backdrop-blur-sm"
      }`}
    >
      <div className="shell flex min-h-[92px] items-center justify-between gap-4">

        {/* LOGO + NAME */}
        <Link
          to="/"
          aria-label="Palmang Kulturforening – Hjem"
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="/palmang-logo.png"
            alt="Palmang Kulturforening logo"
            className="h-16 w-16 object-contain md:h-20 md:w-20"
          />

          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-[0.08em] text-charcoal md:text-2xl">
              PALMANG
            </span>

            <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.16em] text-olive md:text-xs">
              KULTURFORENING
            </span>
          </div>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 lg:gap-6">

          {/* DESKTOP NAV */}
          <nav aria-label="Hovedmeny" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="relative text-[0.9375rem] text-muted-foreground transition-colors hover:text-charcoal after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-burgundy after:transition-all after:duration-300 hover:after:w-full data-[status=active]:text-charcoal data-[status=active]:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className="mx-1 hidden h-6 w-px bg-border lg:block" />

          {/* SOCIAL */}
          <div className="hidden md:block">
            <SocialIconLinks />
          </div>

          {/* JOIN */}
          <a
            href={SOCIAL.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden px-5 py-2.5 text-sm md:inline-flex"
          >
            Bli med
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-charcoal transition-colors hover:border-olive lg:hidden"
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobilmeny"
        hidden={!open}
        className="border-t border-border bg-ivory lg:hidden"
      >
        <nav aria-label="Mobilmeny" className="shell py-6">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li
                key={item.to}
                className="border-b border-border/70 last:border-0"
              >
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="flex items-center gap-3 py-4 font-display text-2xl text-charcoal data-[status=active]:text-burgundy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Bli med
            </a>

            <SocialIconLinks />
          </div>
        </nav>
      </div>
    </header>
  );
}