/** Dekorative elementer inspirert av palestinsk tatreez-broderi. */

export function TatreezDivider({
  className = "",
  tone = "burgundy",
}: {
  className?: string;
  tone?: "burgundy" | "olive" | "light";
}) {
  const stroke =
    tone === "olive"
      ? "var(--olive)"
      : tone === "light"
        ? "color-mix(in oklab, white 55%, transparent)"
        : "var(--burgundy)";

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="hairline w-full max-w-24 md:max-w-40" />
      <svg width="132" height="18" viewBox="0 0 132 18" fill="none">
        <g stroke={stroke} strokeWidth="1.4" strokeLinecap="square">
          <path d="M4 9h20M108 9h20" />
          <path d="M33 9l6-6 6 6-6 6-6-6zM60 9l6-6 6 6-6 6-6-6zM87 9l6-6 6 6-6 6-6-6z" />
          <path d="M47 9h6M79 9h6" />
        </g>
        <g fill={stroke}>
          <rect x="64.6" y="7.6" width="2.8" height="2.8" />
        </g>
      </svg>
      <span className="hairline w-full max-w-24 md:max-w-40" />
    </div>
  );
}

/** Lite broderimotiv brukt ved overskrifter og som kortaksent. */
export function TatreezMotif({
  className = "",
  size = 22,
  tone = "burgundy",
}: {
  className?: string;
  size?: number;
  tone?: "burgundy" | "olive" | "light";
}) {
  const fill =
    tone === "olive"
      ? "var(--olive)"
      : tone === "light"
        ? "color-mix(in oklab, white 70%, transparent)"
        : "var(--burgundy)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={fill}
    >
      <rect x="10.5" y="0.5" width="3" height="3" />
      <rect x="10.5" y="20.5" width="3" height="3" />
      <rect x="0.5" y="10.5" width="3" height="3" />
      <rect x="20.5" y="10.5" width="3" height="3" />
      <rect x="10.5" y="10.5" width="3" height="3" />
      <rect x="5.5" y="5.5" width="3" height="3" />
      <rect x="15.5" y="5.5" width="3" height="3" />
      <rect x="5.5" y="15.5" width="3" height="3" />
      <rect x="15.5" y="15.5" width="3" height="3" />
    </svg>
  );
}

/** Bredt broderibånd – brukt som seksjonsovergang og i footeren. */
export function TatreezBand({
  className = "",
  tone = "burgundy",
}: {
  className?: string;
  tone?: "burgundy" | "olive" | "light";
}) {
  const color =
    tone === "olive"
      ? "var(--olive)"
      : tone === "light"
        ? "color-mix(in oklab, white 45%, transparent)"
        : "var(--burgundy)";

  const cell = (x: number, y: number) =>
    `<rect x="${x}" y="${y}" width="4" height="4" />`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 48 24"><g fill="COLOR">${cell(22, 2)}${cell(18, 6)}${cell(26, 6)}${cell(14, 10)}${cell(22, 10)}${cell(30, 10)}${cell(2, 10)}${cell(42, 10)}${cell(18, 14)}${cell(26, 14)}${cell(22, 18)}</g></svg>`;

  return (
    <div
      className={`h-6 w-full ${className}`}
      aria-hidden="true"
      style={{
        backgroundColor: color,
        maskImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svg.replace("COLOR", "#000"))}")`,
        WebkitMaskImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svg.replace("COLOR", "#000"))}")`,
        maskRepeat: "repeat-x",
        WebkitMaskRepeat: "repeat-x",
        maskSize: "48px 24px",
        WebkitMaskSize: "48px 24px",
      }}
    />
  );
}


/** Olivengren – enkel illustrasjon. */
export function OliveBranch({
  className = "",
  tone = "olive",
}: {
  className?: string;
  tone?: "olive" | "light";
}) {
  const color = tone === "light" ? "color-mix(in oklab, white 70%, transparent)" : "var(--olive)";
  return (
    <svg
      className={className}
      width="120"
      height="48"
      viewBox="0 0 120 48"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 40C28 34 62 26 116 8" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      {(
        [
          [24, 30],
          [42, 25],
          [60, 20],
          [78, 16],
          [96, 11],
        ] as Array<[number, number]>
      ).map(([x, y], i) => (

        <g key={i}>
          <ellipse
            cx={x}
            cy={y - 6}
            rx="9"
            ry="3.4"
            transform={`rotate(-28 ${x} ${y - 6})`}
            stroke={color}
            strokeWidth="1.2"
          />
          <ellipse
            cx={x + 4}
            cy={y + 7}
            rx="9"
            ry="3.4"
            transform={`rotate(24 ${x + 4} ${y + 7})`}
            stroke={color}
            strokeWidth="1.2"
          />
        </g>
      ))}
      <circle cx="112" cy="9" r="3.2" fill={color} />
    </svg>
  );
}
