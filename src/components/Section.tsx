import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { TatreezDivider, TatreezMotif } from "@/components/Tatreez";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "start",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "start" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <p
          className={`eyebrow ${tone === "light" ? "text-[color-mix(in_oklab,white_78%,transparent)]" : ""} ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <TatreezMotif size={14} tone={tone === "light" ? "light" : "burgundy"} />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className={`display-lg mt-5 ${tone === "light" ? "text-primary-foreground" : ""}`}>
          {title}
        </h2>
      </Reveal>
      {children ? (
        <Reveal delay={140}>
          <div
            className={`mt-6 space-y-5 lead ${
              tone === "light" ? "text-[color-mix(in_oklab,white_82%,transparent)]" : ""
            }`}
          >
            {children}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Felles hero for undersider. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.03_60/0.75)] via-[oklch(0.2_0.03_60/0.6)] to-[oklch(0.2_0.03_60/0.9)]"
        aria-hidden="true"
      />
      <div className="shell relative pt-24 pb-20 md:pt-32 md:pb-28">
        <Reveal>
          <p className="eyebrow text-[color-mix(in_oklab,white_80%,transparent)]">
            <TatreezMotif size={14} tone="light" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display-xl mt-6 max-w-4xl text-primary-foreground">{title}</h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="mt-6 max-w-2xl text-lg text-[color-mix(in_oklab,white_82%,transparent)]">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <TatreezDivider tone="light" className="mt-10 max-w-md justify-start" />
        </Reveal>
      </div>
    </section>
  );
}
