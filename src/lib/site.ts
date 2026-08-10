/**
 * Sentral konfigurasjon for Palmang Kulturforening.
 * Rediger kontaktinformasjon, styre og lenker her – ett sted.
 *
 * Språk: siden er i dag kun på norsk. Strukturen er forberedt for at en
 * arabisk versjon (med RTL) kan legges til senere, se `LOCALES` under.
 */

export const SITE = {
  name: "Palmang",
  fullName: "Palmang Kulturforening",
  legalName: "PALMANG KULTURELFORENING",
  orgNumber: "937 158 343",
  orgForm: "Forening/lag/innretning",
  founded: "13.01.2026",
  address: {
    street: "Gamle Bomansvikvei 15",
    postal: "1459 Nesodden",
  },
  tagline:
    "En kulturell møteplass for palestinsk kultur, kulturarv, fellesskap og kulturutveksling i Norge.",
} as const;

export const SOCIAL = {
  instagram: {
    label: "Instagram",
    handle: "@palmang.kulturforening",
    url: "https://www.instagram.com/palmang.kulturforening",
  },
  facebook: {
    label: "Facebook",
    handle: "Palmang Kulturforening",
    url: "https://www.facebook.com/share/1GHV3iDGVg/?mibextid=wwXIfr",
  },
} as const;

export const NAV = [
  { label: "Hjem", to: "/" },
  { label: "Om oss", to: "/om-oss" },
  { label: "Kultur & aktiviteter", to: "/kultur" },
  { label: "Arrangementer", to: "/arrangementer" },
  { label: "Samarbeid", to: "/samarbeid" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

/**
 * Styret. Legg inn telefon og e-post når dette er klart –
 * knappene på kontaktsiden aktiveres automatisk.
 */
export type BoardMember = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
};

export const BOARD: BoardMember[] = [
  { name: "Fawzia Hossain Kamel Althaher", role: "Styreleder" },
  { name: "Hayat Jafar Said", role: "Styremedlem" },
  { name: "Malak Saadji Saleh", role: "Styremedlem" },
];

/** Klar for framtidig arabisk versjon med RTL. */
export const LOCALES = [
  { code: "nb", label: "Norsk", dir: "ltr" as const },
  // { code: "ar", label: "العربية", dir: "rtl" as const },
] as const;

/**
 * Tidligere aktiviteter kan legges inn her etter hvert.
 * Vi oppgir ingen aktiviteter før de faktisk har funnet sted.
 */
export type PastActivity = {
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
};

export const PAST_ACTIVITIES: PastActivity[] = [];

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
