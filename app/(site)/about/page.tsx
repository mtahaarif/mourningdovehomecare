import { Img } from "@/components/ui/Img";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { PageTransition } from "@/components/site/PageTransition";
import { FaqSection } from "@/components/sections/FaqSection";
import { pageMeta } from "@/lib/seo";
import { TLink } from "@/components/site/TLink";
import { img } from "@/lib/images";
import { ABOUT_FAQ, COMMITMENT } from "@/lib/content";
import { ADDRESS, MAP_URL, PHONE, PHONE_HREF } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Mourning Dove Home Care | Montgomery County, PA",
  description: "Mourning Dove Home Care is a home care service provider based in Montgomery County, Pa., servicing Montgomery County and the surrounding areas.",
  path: "/about",
});

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const FAN = [
  { src: img.about1, pos: "72% 50%", x: "-42%", r: "-7deg", alt: "A caregiver embracing a smiling senior woman" },
  { src: img.about2, pos: "13% 50%", x: "0%", r: "0deg", alt: "A smiling senior couple" },
  { src: img.about3, pos: "73% 50%", x: "42%", r: "7deg", alt: "A nurse checking a senior man's blood pressure" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* ───────────── Hero: editorial headline + fanned portraits ───────────── */}
      <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 lg:pb-32">
        <div className="aurora -z-10" aria-hidden="true">
          <span style={{ "--c": "#b8e0f5", "--s": "38rem", top: "-16rem", left: "-12rem", "--o": 0.6 } as CSSProperties} />
          <span style={{ "--c": "#fbe3e4", "--s": "32rem", top: "4rem", right: "-14rem", "--o": 0.7, "--delay": "-9s" } as CSSProperties} />
        </div>

        <div className="shell grid items-center gap-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <span className="eyebrow enter text-wine-600" style={d(0)}>
              About us
            </span>
            <h1 className="enter-lcp mt-7 text-[2.9rem] leading-[1.02] font-medium text-plum-950 sm:text-6xl lg:text-[4.6rem]">
              Home care rooted in <span className="text-gradient italic">Montgomery County, Pa.</span>
            </h1>
            <p className="enter-lcp mt-7 max-w-xl text-lg leading-relaxed text-plum-700 sm:text-xl">
              <strong className="font-semibold text-plum-900">Mourning Dove Home Care</strong> is a home care service provider based out of
              Montgomery County, Pa. Servicing Montgomery County and the surrounding areas.
            </p>
            <div className="enter mt-9 flex flex-wrap gap-3" style={d(270)}>
              <TLink href="/services" className="btn btn-primary">
                Our services <ArrowRight className="btn-arrow size-4" />
              </TLink>
              <a href={PHONE_HREF} className="btn btn-ghost">
                <span className="btn-icon">
                  <Phone className="size-4" />
                </span>
                {PHONE}
              </a>
            </div>
          </div>

          <div className="fan relative mx-auto grid h-[22rem] w-full max-w-[30rem] place-items-center sm:h-[28rem]" aria-label="Our caregivers and clients">
            {FAN.map((f, i) => (
              <div
                key={i}
                className={`enter absolute w-[56%] overflow-hidden rounded-[1.75rem] border-[6px] border-white shadow-lift ${i === 1 ? "z-10" : ""}`}
                style={{ "--x": f.x, "--r": f.r, "--d": `${200 + i * 120}ms` } as CSSProperties}
              >
                <Img
                  src={f.src}
                  alt={f.alt}
                  sizes="(max-width: 640px) 60vw, 280px"
                  className="aspect-[3/4] w-full object-cover"
                  style={{ objectPosition: f.pos }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Commitment: sticky sidebar + scroll timeline ───────────── */}
      <section className="relative bg-white py-28 sm:py-36" aria-labelledby="commitment-title">
        <div className="shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow text-dove-700" data-reveal="up">
              Our commitment
            </span>
            <h2 id="commitment-title" className="mt-5 text-4xl leading-[1.05] font-medium sm:text-5xl" data-reveal="up" style={d(80)}>
              Compassionate care within the <span className="italic text-wine-700">comfort of home</span>
            </h2>
            <div className="relative mt-10 hidden overflow-hidden rounded-[2rem] shadow-lift lg:block" data-reveal="scale" style={d(160)}>
              <Img
                src={img.about2}
                alt=""
                width={480}
                height={384}
                className="parallax aspect-[5/4] w-full scale-110 object-cover object-[13%_50%]"
                style={{ "--px-from": "-30px", "--px-to": "30px" } as CSSProperties}
              />
            </div>
          </div>

          <ol className="tl relative space-y-6">
            <span className="absolute top-4 bottom-4 left-[1.45rem] w-px bg-linen" aria-hidden="true" />
            <span className="tl-fill absolute top-4 bottom-4 left-[1.45rem] w-px bg-gradient-to-b from-dove-500 via-leaf-400 to-wine-400" aria-hidden="true" />
            {COMMITMENT.map((c, i) => (
              <li key={c.title} className="tl-item relative grid grid-cols-[3rem_1fr] gap-6">
                <span className="tl-dot relative z-10 grid size-12 place-items-center rounded-full border-2 border-linen bg-white font-display text-lg text-plum-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="rounded-[1.75rem] bg-cream p-7 ring-1 ring-linen sm:p-8">
                  <h3 className="text-2xl font-medium">{c.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-plum-700">{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Where we serve ───────────── */}
      <section className="noise relative mb-24 overflow-hidden rounded-b-[3rem] bg-plum-950 py-28 text-white sm:mb-32 sm:rounded-b-[4rem] sm:py-36" aria-labelledby="serve-title">
        <div className="aurora" aria-hidden="true">
          <span style={{ "--c": "#3399d6", "--s": "34rem", top: "-10rem", right: "-6rem", "--o": 0.3 } as CSSProperties} />
          <span style={{ "--c": "#16b25e", "--s": "26rem", bottom: "-10rem", left: "-8rem", "--o": 0.2, "--delay": "-6s" } as CSSProperties} />
        </div>

        <div className="shell relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-dove-300" data-reveal="up">
              Where we serve
            </span>
            <h2 id="serve-title" className="mt-5 text-4xl leading-[1.05] font-medium sm:text-6xl" data-reveal="up" style={d(80)}>
              Servicing Montgomery County <span className="text-gradient italic">and the surrounding areas</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-white/70" data-reveal="up" style={d(160)}>
              Our office is in Blue Bell, PA. Stop by, or get directions below.
            </p>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-dark group mt-10 flex max-w-md items-center gap-5 rounded-3xl p-5 transition hover:bg-white/10"
              data-reveal="up"
              style={d(240)}
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-dove-400 to-leaf-500">
                <MapPin className="size-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">Our office</span>
                <span className="mt-1 block font-medium">{ADDRESS.street}</span>
                <span className="block text-white/70">{ADDRESS.city}</span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-dove-300 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </div>

          {/* Radar motif */}
          <div className="relative mx-auto aspect-square w-full max-w-[30rem]" data-reveal="scale" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="absolute rounded-full border border-white/10" style={{ inset: `${i * 12}%` }} />
            ))}
            {[0, 1.3, 2.6].map((delay) => (
              <span
                key={delay}
                className="absolute inset-[36%] rounded-full border border-dove-300/60"
                style={{ animation: `ping-soft 4s ease-out ${delay}s infinite` }}
              />
            ))}
            <span
              className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(from 0deg, transparent 0 78%, rgb(90 180 230 / .35) 100%)", animation: "spin 6s linear infinite" }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="glass-dark flex flex-col items-center rounded-3xl px-7 py-5 text-center">
                <span className="grid size-12 place-items-center rounded-full bg-wine-600 shadow-[0_0_0_8px_rgb(165_31_51/0.25)]">
                  <MapPin className="size-5" />
                </span>
                <span className="mt-3 font-display text-xl">Montgomery County</span>
                <span className="text-sm text-white/60">Pennsylvania</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection id="about-faq" title="About our care" faqs={ABOUT_FAQ} />
    </PageTransition>
  );
}
