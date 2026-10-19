import { CONDITIONS, NON_SKILLED } from "@/lib/content";
import { EMAIL, FULL_ADDRESS, HOURS, PHONE, SERVICE_AREA, SITE_URL } from "@/lib/site";

// Built once at build time and served as a static file.
export const dynamic = "force-static";

/** /llms.txt: a plain-text map of the business and its key pages for AI answer engines. */
export function GET() {
  const hours = HOURS.map((h) => `${h.label}: ${h.display}`).join("; ");
  const body = `# Mourning Dove Home Care LLC

> Compassionate, high-quality, and personalized home care for individuals in their homes, enabling them to maintain independence and dignity. Based in Blue Bell, PA, serving ${SERVICE_AREA}.

- Office: ${FULL_ADDRESS}
- Phone: ${PHONE}
- Email: ${EMAIL}
- Hours (Eastern Time): ${hours}; closed Saturday and Sunday

## Pages

- [Home](${SITE_URL}/): Overview of Mourning Dove Home Care, its mission and services.
- [About](${SITE_URL}/about): Who we are, our commitment to clients, and the areas we serve.
- [Services](${SITE_URL}/services): Non-skilled home care, specialized care, Supported Employment Services (partnered with UPMC Health Plan) and ODP services.
- [Testimonials](${SITE_URL}/testimonials): Google reviews from families and clients.
- [Join Our Team](${SITE_URL}/employment): Open positions, benefits and the online job application.
- [Contact Us](${SITE_URL}/contact-us): Phone, email, office address, hours and contact form.

## Services

- Non-skilled home care: ${NON_SKILLED.map((s) => s.title).join(", ")}.
- Specialized care for individuals with specific needs, such as Alzheimer's or dementia, physical disabilities, and post-operative care.
- Supported Employment Services: helping adults with intellectual and developmental disabilities find meaningful jobs within their communities.
- ODP (Office of Developmental Programs) services: Community Participation Support, Homemaker and Chore Services and Companionship, at home and in the community. Eligible conditions include ${CONDITIONS.join(", ")}.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
