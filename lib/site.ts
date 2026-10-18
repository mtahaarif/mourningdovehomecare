/**
 * Canonical origin for canonicals, the sitemap, robots.txt and structured data.
 * Set NEXT_PUBLIC_SITE_URL to pin it. Otherwise, on Vercel it follows the
 * project's production domain: the custom domain once one is attached, the
 * *.vercel.app domain until then, so pages never canonicalise to another site.
 */
const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelProduction ? `https://${vercelProduction}` : "https://www.mourningdovehomecare.com")
).replace(/\/$/, "");

/** Vercel preview deployments must not be indexed (they duplicate production). */
export const IS_PREVIEW = process.env.VERCEL_ENV === "preview";

export const BRAND = "Mourning Dove Home Care LLC";
export const SITE_NAME = "Mourning Dove Home Care";

export const PHONE = "(855) 540-2645";
export const PHONE_HREF = "tel:8555402645";
export const PHONE_E164 = "+18555402645";
export const EMAIL = "care@mourningdovehomecare.net";
export const INSTAGRAM = "https://www.instagram.com/mourningdovehomecare/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61577313871947";

export const ADDRESS = {
  street: "589 Skippack Pike #305",
  locality: "Blue Bell",
  region: "PA",
  postalCode: "19422",
  /** Display line, e.g. "Blue Bell, PA 19422". */
  city: "Blue Bell, PA 19422",
};
export const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.city}`;
// encodeURIComponent turns "#" into %23; a raw "#" would end the query at "Pike".
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`;
export const SERVICE_AREA = "Montgomery County and the surrounding areas";

/** Office hours in America/New_York. Days use JS numbering (0 = Sunday). */
export const HOURS = [
  { label: "Mon – Thu", days: [1, 2, 3, 4], open: "09:00", close: "17:00", display: "9:00am – 5:00pm" },
  { label: "Friday", days: [5], open: "09:00", close: "12:30", display: "9:00am – 12:30pm" },
] as const;

/**
 * Navigation order also drives the direction of page transitions.
 * `sr` adds visually hidden words before/after the visible label, so each link's
 * accessible name (and anchor text) is descriptive while still containing the label.
 */
export const NAV = [
  { label: "Home", href: "/", sr: ["", " page"] },
  { label: "About", href: "/about", sr: ["", " Mourning Dove"] },
  { label: "Services", href: "/services", sr: ["Home care ", ""] },
  { label: "Testimonials", href: "/general-4", sr: ["Client ", ""] },
  { label: "Join Our Team", href: "/employment", sr: ["", ""] },
  { label: "Contact Us", href: "/contact-us", sr: ["", ""] },
] as const;
