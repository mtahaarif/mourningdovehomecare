import { Img } from "@/components/ui/Img";
import type { CSSProperties } from "react";
import { Accessibility, ArrowDown, Brain, ChevronDown, Info, Phone, Stethoscope } from "lucide-react";
import { PageTransition } from "@/components/site/PageTransition";
import { pageMeta } from "@/lib/seo";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { OdpCards } from "@/components/sections/OdpCards";
import { img } from "@/lib/images";
import { CONDITIONS, NON_SKILLED, ODP_INTRO, SERVICE_NOTE, SPECIALIZED_TEXT, SUPPORTED_EMPLOYMENT } from "@/lib/content";
import { PHONE, PHONE_HREF } from "@/lib/site";

export const metadata = pageMeta({
  title: "Home Care & ODP Services | Mourning Dove Home Care",
  description: "Non-skilled home care, specialized dementia and post-operative care, supported employment and ODP services in Montgomery County, PA.",
  path: "/services",
});

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const JUMP = [
  { label: "Home care", href: "#home-care" },
  { label: "Specialized care", href: "#specialized" },
  { label: "Supported employment", href: "#supported-employment" },
  { label: "ODP services", href: "#odp" },
  { label: "Eligibility", href: "#eligibility" },
];

const CARD_TONES = ["bg-white", "bg-dove-50", "bg-leaf-50", "bg-wine-50", "bg-sand", "bg-plum-50", "bg-white"];
const ICON_TONES = [
  "bg-dove-100 text-dove-700",
  "bg-white text-dove-700",
  "bg-white text-leaf-700",
  "bg-white text-wine-600",
  "bg-white text-plum-700",
  "bg-white text-plum-700",
  "bg-leaf-100 text-leaf-700",
];

const SPECIALIZED_CARDS = [
  { title: "Alzheimer's or dementia", icon: Brain, glow: "90 180 230" },
  { title: "Physical disabilities", icon: Accessibility, glow: "22 178 94" },
  { title: "Post-operative care", icon: Stethoscope, glow: "222 99 113" },
];

export default function ServicesPage() {
  const n = NON_SKILLED.length;

  return (
    <PageTransition>
      {/* ───────────── Hero: Ken Burns crossfade + glass jump links ───────────── */}
      <section className="noise relative isolate flex min-h-[44rem] items-end overflow-hidden bg-plum-950 pt-40 pb-16 text-white sm:min-h-[48rem] sm:pb-20">
        <div className="kb absolute inset-0 -z-10" aria-hidden="true">
          {[img.services1, img.services2, img.services3].map((src, i) => (
            <Img
              key={i}
              src={src}
              alt=""
              preload={i === 0}
              fetchPriority={i === 0 ? "high" : "low"}
              sizes="100vw"
              className="absolute inset-0 size-full object-cover"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-plum-950 via-plum-950/70 to-plum-950/30" />

        <div className="shell">
          <span className="eyebrow enter text-dove-300" style={d(0)}>
            Our services
          </span>
          <h1 className="enter-lcp mt-6 max-w-4xl text-5xl leading-[1] font-medium sm:text-7xl lg:text-[5.5rem]">
            Care at home &amp; <span className="text-gradient italic">in the community</span>
          </h1>
          <p className="enter-lcp mt-7 max-w-2xl text-lg text-white/75 sm:text-xl">
            Non-skilled home care, specialized care, supported employment and ODP services — in <strong className="font-semibold text-white">Montgomery County, PA</strong>, and the surrounding
            areas.
          </p>
          <nav aria-label="On this page" className="enter mt-10 flex flex-wrap gap-2" style={d(270)}>
            {JUMP.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="glass-dark group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-white/15"
              >
                {j.label}
                <ArrowDown className="size-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ───────────── Non-skilled care: sticky sidebar + stacking cards ───────────── */}
      <section id="home-care" className="relative py-28 sm:py-36" aria-labelledby="home-care-title">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow text-wine-600" data-reveal="up">
              Home care
            </span>
            <h2 id="home-care-title" className="mt-5 text-4xl leading-[1.05] font-medium sm:text-5xl" data-reveal="up" style={d(80)}>
              Non-Skilled Home Care Services
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-plum-700" data-reveal="up" style={d(160)}>
              Everyday support that helps your loved one stay safe, comfortable and independent at home.
            </p>

            <details className="disclosure mt-8 rounded-3xl bg-white p-5 ring-1 ring-linen" data-reveal="up" style={d(240)}>
              <summary className="flex items-center gap-3 font-semibold text-plum-900">
                <span className="grid size-9 place-items-center rounded-full bg-dove-100 text-dove-700">
                  <Info className="size-4" />
                </span>
                <span className="flex-1">Please note</span>
                <ChevronDown className="chev size-5 text-plum-500" />
              </summary>
              <p className="pt-4 text-sm leading-relaxed text-plum-700">{SERVICE_NOTE}</p>
            </details>
          </div>

          <ul className="stack relative space-y-6 pb-8" style={{ "--n": n } as CSSProperties}>
            {NON_SKILLED.map((s, i) => (
              <li
                key={s.title}
                className="stack-card"
                style={{ "--i": i, "--stack-scale": 1 - (n - 1 - i) * 0.035, "--stack-dim": i === n - 1 ? 0 : 1 } as CSSProperties}
              >
                <article className={`stack-inner relative overflow-hidden rounded-[2rem] p-8 shadow-lift ring-1 ring-linen sm:p-10 ${CARD_TONES[i]}`}>
                  <span
                    className="pointer-events-none absolute -top-6 right-4 font-display text-[9rem] leading-none font-semibold text-plum-900/[0.05] select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex items-start gap-6">
                    <span className={`grid size-16 shrink-0 place-items-center rounded-2xl shadow-soft ${ICON_TONES[i]}`}>
                      <Icon name={s.icon} className="size-7" />
                    </span>
                    <div>
                      <span className="text-xs font-bold tracking-[0.2em] text-plum-400">
                        {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-[1.75rem] leading-tight font-medium sm:text-3xl">{s.title}</h3>
                      <p className="mt-3 max-w-md leading-relaxed text-plum-700">{s.blurb}</p>
                    </div>
                  </div>
                  <div className="stack-shade pointer-events-none absolute inset-0 rounded-[2rem] bg-plum-950/[0.07]" aria-hidden="true" />
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Specialized care ───────────── */}
      <section id="specialized" className="pb-28 sm:pb-36" aria-labelledby="specialized-title">
        <div className="shell">
          <div className="spin-border rounded-[2.5rem]" data-reveal="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white px-8 py-14 text-center sm:px-14 sm:py-20">
              <div className="dot-grid absolute inset-0" aria-hidden="true" />
              <span className="eyebrow relative text-dove-700">Specialized care</span>
              <h2 id="specialized-title" className="relative mx-auto mt-6 max-w-4xl text-3xl leading-[1.2] font-medium sm:text-[2.6rem]">
                {SPECIALIZED_TEXT}
              </h2>
              <ul className="relative mt-12 grid gap-4 text-left sm:grid-cols-3">
                {SPECIALIZED_CARDS.map((c, i) => (
                  <li key={c.title} data-reveal="up" style={d(120 + i * 100)}>
                    <GlowCard glow={c.glow} tilt={6} className="flex h-full items-center gap-4 rounded-3xl bg-cream p-6 ring-1 ring-linen">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white shadow-soft">
                        <c.icon className="size-6 text-plum-800" />
                      </span>
                      <span className="text-lg font-semibold text-plum-900">{c.title}</span>
                    </GlowCard>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Supported employment ───────────── */}
      <section id="supported-employment" className="relative overflow-hidden bg-sand/70 py-28 sm:py-36" aria-labelledby="se-title">
        <div className="shell grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-lift">
              <Img
                src={img.gardening}
                alt="Woman Gardening Smiling"
                sizes="(max-width: 1024px) 100vw, 600px"
                className="clip-scrub aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
              />
            </div>
            <div
              className="glass absolute -bottom-8 left-6 flex items-center gap-4 rounded-3xl p-4 pr-6 sm:-right-8 sm:left-auto"
              data-reveal="up"
              style={d(200)}
            >
              <Img src={img.partnerUpmc} alt="UPMC Health Plan" width={61} height={56} className="h-14 w-auto rounded-xl" />
              <span className="text-sm leading-tight">
                <span className="block text-plum-500">Partnered with</span>
                <span className="block font-semibold text-plum-900">UPMC Health Plan</span>
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow text-leaf-700" data-reveal="up">
              Supported employment
            </span>
            <h2 id="se-title" className="mt-5 text-4xl leading-[1.05] font-medium sm:text-6xl" data-reveal="up" style={d(80)}>
              Supported Employment <span className="italic text-wine-700">Services</span>
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-plum-700" data-reveal="up" style={d(160)}>
              {SUPPORTED_EMPLOYMENT}
            </p>
            <a href={PHONE_HREF} className="btn btn-primary mt-10" data-reveal="up" style={d(240)}>
              <span className="btn-icon">
                <Phone className="size-4" />
              </span>
              Ask us about it · {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── ODP services + eligible conditions ───────────── */}
      <section id="odp" className="noise relative mb-24 overflow-hidden rounded-b-[3rem] bg-plum-950 py-28 text-white sm:mb-32 sm:rounded-b-[4rem] sm:py-36" aria-labelledby="odp-title">
        <div className="aurora" aria-hidden="true">
          <span style={{ "--c": "#1f7dba", "--s": "36rem", top: "-12rem", left: "-10rem", "--o": 0.3 } as CSSProperties} />
          <span style={{ "--c": "#a51f33", "--s": "28rem", bottom: "-8rem", right: "-8rem", "--o": 0.22, "--delay": "-10s" } as CSSProperties} />
        </div>

        <div className="shell relative">
          <div className="max-w-3xl">
            <span className="eyebrow text-dove-300" data-reveal="up">
              Office of Developmental Programs
            </span>
            <h2 id="odp-title" className="mt-5 text-5xl leading-[1] font-medium sm:text-7xl" data-reveal="up" style={d(80)}>
              ODP <span className="text-gradient italic">Services</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-white/70 sm:text-xl" data-reveal="up" style={d(160)}>
              {ODP_INTRO}
            </p>
          </div>

          <div className="mt-16">
            <OdpCards />
          </div>

          <div id="eligibility" className="mt-24 scroll-mt-32">
            <h3 className="max-w-2xl text-3xl font-medium sm:text-4xl" data-reveal="up">
              Eligible Conditions Include <span className="text-white/50 italic">(but not limited to):</span>
            </h3>
            <ul className="mt-10 flex flex-wrap gap-3">
              {CONDITIONS.map((c, i) => (
                <li key={c} data-reveal="scale" style={d(i * 60)}>
                  <span className="glass-dark inline-flex items-center gap-2.5 rounded-full px-5 py-3 font-medium transition duration-500 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[0_0_30px_-6px_rgb(90_180_230/0.6)]">
                    <span className="size-2 rounded-full bg-gradient-to-br from-dove-300 to-leaf-400" />
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
