export const SITE_URL = "https://www.mourningdovehomecare.com";
export const SITE_NAME = "Home Care Agency";
export const BRAND = "Mourning Dove Home Care LLC";

export const PHONE = "(855) 540-2645";
export const PHONE_HREF = "tel:8555402645";
export const EMAIL = "care@mourningdovehomecare.net";
export const INSTAGRAM = "https://www.instagram.com/mourningdovehomecare/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61577313871947";

export const ADDRESS = { street: "589 Skippack Pike, Suite 305", city: "Blue Bell PA 19422" };
export const MAP_URL = "https://www.google.com/maps/search/?api=1&query=589+Skippack+Pike+Suite+305+Blue+Bell+PA+19422";
export const SERVICE_AREA = "Montgomery County and the surrounding areas";

/** Office hours in America/New_York. Days use JS numbering (0 = Sunday). */
export const HOURS = [
  { label: "Mon – Thu", days: [1, 2, 3, 4], open: "09:00", close: "17:00", display: "9:00am – 5:00pm" },
  { label: "Friday", days: [5], open: "09:00", close: "12:30", display: "9:00am – 12:30pm" },
] as const;

/** Navigation order also drives the direction of page transitions. */
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/general-4" },
  { label: "Join Our Team", href: "/employment" },
  { label: "Contact Us", href: "/contact-us" },
] as const;
