import { ArrowRight, ChevronDown } from "lucide-react";
import { TLink } from "@/components/site/TLink";
import { faqJsonLd, jsonLdHtml, type Faq } from "@/lib/seo";

/** Accordion of questions with matching FAQPage structured data. */
export function FaqSection({ id, title, faqs, className = "pb-28 sm:pb-36" }: { id: string; title: string; faqs: Faq[]; className?: string }) {
  return (
    <section className={className} aria-labelledby={id}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(faqJsonLd(faqs))} />
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal="up">
          <span className="eyebrow text-dove-700">Questions &amp; answers</span>
          <h2 id={id} className="mt-5 text-4xl leading-[1.05] font-medium sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-linen rounded-[2rem] bg-white px-6 ring-1 ring-linen sm:px-8" data-reveal="up">
          {faqs.map((f, i) => (
            // The first answer starts open: it shows the rows expand, and keeps its text in the rendered page.
            <details key={f.q} className="disclosure group py-5" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 text-lg font-semibold text-plum-950">
                <h3 className="font-sans text-lg font-semibold tracking-normal">{f.q}</h3>
                <ChevronDown className="chev size-5 shrink-0 text-plum-500" aria-hidden="true" />
              </summary>
              <div className="pt-3 pb-1">
                <p className="leading-relaxed text-plum-700">{f.a}</p>
                {f.link && (
                  <TLink href={f.link.href} className="link-draw mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-dove-700">
                    {f.link.label} <ArrowRight className="size-3.5" aria-hidden="true" />
                  </TLink>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
