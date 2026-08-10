import { Instagram, Facebook } from "lucide-react";
import { SOCIAL } from "@/lib/site";

export function InstagramLink({
  className = "btn btn-accent",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={SOCIAL.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Instagram size={18} aria-hidden="true" />
      {children}
    </a>
  );
}

export function FacebookLink({
  className = "btn btn-outline",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={SOCIAL.facebook.url} target="_blank" rel="noopener noreferrer" className={className}>
      <Facebook size={18} aria-hidden="true" />
      {children}
    </a>
  );
}

export function SocialIconLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const base =
    "grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300";
  const style =
    tone === "light"
      ? "border-[color-mix(in_oklab,white_35%,transparent)] text-primary-foreground hover:bg-[color-mix(in_oklab,white_14%,transparent)]"
      : "border-border text-foreground hover:border-olive hover:text-olive";

  return (
    <div className="flex items-center gap-2">
      <a
        href={SOCIAL.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Palmang på Instagram"
        className={`${base} ${style}`}
      >
        <Instagram size={18} aria-hidden="true" />
      </a>
      <a
        href={SOCIAL.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Palmang på Facebook"
        className={`${base} ${style}`}
      >
        <Facebook size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
