import { Img } from "@/components/ui/Img";
import { EagerImg } from "@/components/ui/EagerImg";
import { ArrowRight, ArrowUpRight, CircleCheck, HeartHandshake, House, MapPin, Phone, Quote, Sparkles, Star } from "lucide-react";
import { PageTransition } from "@/components/site/PageTransition";
import { TLink } from "@/components/site/TLink";
import { GlowCard } from "@/components/ui/GlowCard";
import { Marquee } from "@/components/ui/Marquee";
import { WordReveal } from "@/components/ui/WordReveal";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { Icon } from "@/components/ui/Icon";
import { HorizontalServices } from "@/components/sections/HorizontalServices";
import { img } from "@/lib/images";
import { MISSION, NON_SKILLED, SPECIALIZED } from "@/lib/content";
import { TESTIMONIALS } from "@/lib/testimonials";
import { PHONE, PHONE_HREF } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Mourning Dove Home Care | Home Care in Blue Bell, PA",
  description: "Compassionate, personalized home care in Blue Bell and Montgomery County, PA: companionship, personal care, respite care, ODP and supported employment.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageTransition>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="aurora -z-10" aria-hidden="true">
          <span className="top-[-18rem] right-[-10rem] [--c:#87cbee] [--o:0.55] [--s:42rem]" />
          <span className="top-[10rem] left-[-14rem] [--c:#a8ebc4] [--delay:-7s] [--o:0.45] [--s:30rem]" />
          <span className="bottom-[-12rem] left-[38%] [--c:#f5c4c7] [--delay:-12s] [--o:0.4] [--s:26rem]" />
        </div>
        <div className="dot-grid absolute inset-0 -z-10" aria-hidden="true" />

        <div className="shell grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <div className="enter [--d:0ms]">
              <span className="glass inline-flex items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-sm font-medium text-plum-800">
                <span className="grid size-7 place-items-center rounded-full bg-plum-900 text-white">
                  <HeartHandshake className="size-3.5" />
                </span>
                Home care in Montgomery County, PA
              </span>
            </div>

            <h1 className="enter-lcp mt-7 text-[3.1rem] leading-[0.98] font-medium text-plum-950 sm:text-7xl lg:text-[5.4rem]">
              Quality Care is the{" "}
              <span className="scribble inline-block whitespace-nowrap">
                <span className="text-gradient italic">Best Care</span>
              </span>
            </h1>

            <p className="enter-lcp mt-8 max-w-xl text-lg leading-relaxed text-plum-700 sm:text-xl">
              Our team understands the importance of delivering <strong className="font-semibold text-plum-900">high-quality care in the comfort of your home</strong> — with services tailored to each
              individual.
            </p>

            <div className="enter mt-9 flex flex-wrap gap-3 [--d:270ms]">
              <a href={PHONE_HREF} className="btn btn-primary">
                <span className="btn-icon">
                  <Phone className="size-4" />
                </span>
                Call {PHONE}
              </a>
              <TLink href="/services" className="btn btn-ghost">
                Explore our services <ArrowRight className="btn-arrow size-4" />
              </TLink>
            </div>

            <ul className="enter mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-plum-700 [--d:360ms]">
              {["Personalized care", "In the comfort of home", "Independence & dignity"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CircleCheck className="size-[18px] text-leaf-500" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Image composition */}
          <div className="enter-lcp relative mx-auto w-full max-w-[34rem]">
            <svg className="absolute -top-10 -right-10 size-48 animate-spin-slow text-dove-300" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 4" />
            </svg>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.75rem] shadow-lift ring-1 ring-black/5">
              <EagerImg
                src={img.homeCaregiver}
                alt="A caregiver with a smiling senior woman outdoors"
                preload
                fetchPriority="high"
                sizes="(max-width: 1024px) 135vw, 800px"
                className="absolute inset-0 size-full origin-[55%_92%] scale-[1.45] animate-[float_14s_ease-in-out_infinite] object-cover object-[55%_100%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/30 via-transparent to-transparent" />
            </div>

            <div className="glass absolute top-6 left-6 animate-[float_8s_ease-in-out_infinite] rounded-2xl p-4">
              <OpenStatus />
              <p className="mt-2 text-xs text-plum-600">Mon–Thu 9:00–5:00 · Fri 9:00–12:30</p>
            </div>

            <div className="absolute -bottom-10 -left-6 w-44 rotate-[-5deg] animate-[float_10s_ease-in-out_-3s_infinite] overflow-hidden rounded-3xl border-[6px] border-white shadow-lift sm:-left-14 sm:w-56">
              <Img src={img.homeHero} alt="A smiling senior couple" width={224} height={168} className="aspect-[4/3] w-full object-cover" />
            </div>

            <div className="glass absolute -right-3 bottom-16 flex animate-[float_9s_ease-in-out_-5s_infinite] items-center gap-3 rounded-2xl py-3 pr-5 pl-3 sm:-right-8">
              <span className="grid size-10 place-items-center rounded-xl bg-leaf-500 text-white">
                <MapPin className="size-5" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold text-plum-900">Montgomery County</span>
                <span className="text-plum-600">& surrounding areas</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Marquees ───────────────────────── */}
      <section aria-label="Our services at a glance" className="defer-render border-y border-linen bg-white/60 py-6 [--defer-h:10rem]">
        <Marquee className="edge-fade-x [--speed:50s]">
          {[...NON_SKILLED.map((s) => ({ t: s.title, i: s.icon })), { t: "Specialized Care", i: "HeartHandshake" as const }, { t: "ODP Services", i: "Sparkles" as const }].map((s) => (
            <span key={s.t} className="flex items-center gap-2.5 rounded-full border border-linen bg-cream px-5 py-2.5 text-[0.95rem] font-medium whitespace-nowrap text-plum-800">
              <Icon name={s.i} className="size-4 text-dove-600" />
              {s.t}
            </span>
          ))}
        </Marquee>
        <Marquee reverse className="edge-fade-x mt-5 [--gap:2.5rem] [--speed:60s]">
          {["Compassionate", "High-quality", "Personalized", "Independence", "Dignity", "Comfort of home"].map((w) => (
            <span key={w} className="flex items-center gap-10 font-display text-4xl whitespace-nowrap text-plum-900/80 italic sm:text-5xl">
              {w}
              <Sparkles className="size-6 text-wine-400" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ───────────────────────── Mission ───────────────────────── */}
      <section className="defer-render relative py-28 [--defer-h:40rem] sm:py-40">
        <div className="shell max-w-5xl text-center">
          <span className="eyebrow text-wine-600" data-reveal="up">
            Our mission
          </span>
          <WordReveal
            text={MISSION}
            accent={["compassionate", "independence", "dignity"]}
            className="mt-8 font-display text-[2rem] leading-[1.22] font-medium text-plum-950 sm:text-5xl sm:leading-[1.15]"
          />
        </div>
      </section>

      {/* ───────────────────────── Approach bento ───────────────────────── */}
      <section className="defer-render pb-28 [--defer-h:80rem] sm:pb-36 lg:pb-4 lg:[--defer-h:60rem]" aria-labelledby="approach-title">
        <div className="shell">
          <div className="mb-12 max-w-2xl" data-reveal="up">
            <span className="eyebrow text-dove-700">Our approach</span>
            <h2 id="approach-title" className="mt-4 text-4xl leading-[1.05] font-medium sm:text-5xl">
              Care that feels like <span className="text-gradient-warm italic">family</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            <figure
              className="group relative col-span-7 row-span-2 overflow-hidden rounded-[1.25rem] bg-plum-900 sm:rounded-[2rem]"
              data-reveal="scale"
            >
              <Img
                src={img.homeHands}
                alt="Supportive Hands"
                sizes="(max-width: 1024px) 100vw, 720px"
                className="clip-scrub absolute inset-0 size-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-10">
                <Quote className="size-5 text-dove-300 sm:size-9" />
                <p className="mt-2 max-w-xl font-display text-[0.8rem] leading-snug text-white sm:mt-4 sm:text-[2rem]">
                  We are dedicated to ensuring that our patients receive the highest standard of care in a familiar and supportive environment.
                </p>
              </figcaption>
            </figure>

            <GlowCard className="col-span-5 rounded-[1.25rem] bg-white p-4 shadow-soft ring-1 ring-linen [--d:100ms] sm:rounded-[2rem] sm:p-10" data-reveal="up">
              <span className="grid size-9 place-items-center rounded-xl sm:size-14 sm:rounded-2xl bg-dove-100 text-dove-700">
                <House className="size-4 sm:size-6" />
              </span>
              <h3 className="mt-3 text-[0.95rem] leading-tight font-medium sm:mt-6 sm:text-[1.75rem]">Tailored to your unique needs</h3>
              <p className="mt-2 text-[0.7rem] leading-snug text-plum-700 sm:mt-3 sm:text-base sm:leading-relaxed">
                Mourning Dove Home Care is committed to meeting your unique needs, and we take pride in offering personalized services tailored
                to each individual.
              </p>
            </GlowCard>

            <GlowCard
              glow="leaf"
              className="col-span-5 rounded-[1.25rem] bg-white p-4 shadow-soft ring-1 ring-linen [--d:180ms] sm:rounded-[2rem] sm:p-10"
              data-reveal="up"
            >
              <span className="grid size-9 place-items-center rounded-xl sm:size-14 sm:rounded-2xl bg-leaf-100 text-leaf-700">
                <Star className="size-4 sm:size-6" />
              </span>
              <h3 className="mt-3 text-[0.95rem] leading-tight font-medium sm:mt-6 sm:text-[1.75rem]">A focus on excellence</h3>
              <p className="mt-2 text-[0.7rem] leading-snug text-plum-700 sm:mt-3 sm:text-base sm:leading-relaxed">
                With a focus on excellence, we strive to make a meaningful difference in the lives of those we serve.
              </p>
            </GlowCard>

            <div className="spin-border col-span-12 rounded-[1.25rem] sm:rounded-[2rem]" data-reveal="up">
              <div className="noise relative grid gap-8 overflow-hidden rounded-[2rem] bg-plum-950 p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="eyebrow text-wine-300">Specialized care</span>
                  <p className="mt-4 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
                    Care for individuals with specific needs — delivered with patience and expertise.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {SPECIALIZED.map((s) => (
                      <li key={s} className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <TLink href="/services#specialized" className="btn btn-light">
                  Explore specialized care <ArrowUpRight className="btn-arrow size-4" />
                </TLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Services (pinned horizontal) ───────────────────────── */}
      <HorizontalServices />

      {/* ───────────────────────── Testimonials marquee ───────────────────────── */}
      <section
        className="defer-render overflow-hidden py-28 [--defer-h:50rem] sm:py-36 lg:pt-8 lg:[--defer-h:40rem]"
        aria-labelledby="kind-words"
      >
        <div className="shell mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal="up">
            <span className="eyebrow text-wine-600">Testimonials</span>
            <h2 id="kind-words" className="mt-4 text-4xl leading-[1.05] font-medium sm:text-5xl">
              Kind words from <span className="italic">families</span>
            </h2>
          </div>
          <TLink href="/testimonials" className="btn btn-ghost !h-11 text-sm" data-reveal="up">
            Read all reviews <ArrowUpRight className="btn-arrow size-4" />
          </TLink>
        </div>

        <Marquee className="edge-fade-x [--gap:1.25rem] [--speed:70s]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="group flex w-[22rem] shrink-0 flex-col justify-between rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-linen transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:w-[26rem]"
            >
              <Quote className="size-8 text-dove-400 transition-transform duration-500 group-hover:-rotate-12" />
              <p className="mt-4 font-display text-xl leading-snug text-plum-900">“{t.excerpt}”</p>
              <p className="mt-6 flex items-center gap-3 text-sm font-semibold text-plum-700">
                <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-dove-400 to-leaf-400 text-white">
                  {t.name[0]}
                </span>
                {t.name}
              </p>
            </figure>
          ))}
        </Marquee>
      </section>
    </PageTransition>
  );
}
