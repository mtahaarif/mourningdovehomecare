import type { Metadata } from "next";
import { ADDRESS, BRAND, EMAIL, FACEBOOK, INSTAGRAM, PHONE_E164, SITE_NAME, SITE_URL } from "./site";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Mourning Dove Home Care — Quality Care is the Best Care. Home care in Blue Bell & Montgomery County, PA.",
};

/**
 * Complete per-page metadata. A page's `openGraph` replaces its parent's, so
 * every field (including the share image) is set here rather than inherited.
 */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type: "website", locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

const DESCRIPTION =
  "Compassionate, high-quality, and personalized home care for individuals in their homes in Montgomery County, PA, and the surrounding areas.";

/** Site-wide structured data: the website and the business behind it. */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BRAND,
      description: DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: `${SITE_URL}${OG_IMAGE.url}`,
      telephone: PHONE_E164,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: "US",
      },
      areaServed: { "@type": "AdministrativeArea", name: "Montgomery County, Pennsylvania" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "12:30" },
      ],
      knowsAbout: [
        "Companionship",
        "Meal planning",
        "Personal care and hygiene",
        "Light housekeeping",
        "Support for ADLs and IADLs",
        "Medication reminders",
        "Respite care",
        "Alzheimer's and dementia care",
        "Post-operative care",
        "ODP services",
        "Supported employment",
      ],
      sameAs: [INSTAGRAM, FACEBOOK],
    },
  ],
};

export type Faq = { q: string; a: string; link?: { href: string; label: string } };

export const faqJsonLd = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

/** Serialises JSON-LD safely: `<` is escaped so the payload can't close the script tag. */
export const jsonLdHtml = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
