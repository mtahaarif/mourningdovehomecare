import { Img } from "@/components/ui/Img";
import type { CSSProperties } from "react";
import { ArrowDown, Phone, Quote, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/site/PageTransition";
import { FaqSection } from "@/components/sections/FaqSection";
import { pageMeta } from "@/lib/seo";
import { EmploymentForm } from "@/components/forms/EmploymentForm";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import { img } from "@/lib/images";
import { CAREER_BENEFITS, EMPLOYMENT_FAQ, POSITIONS } from "@/lib/content";
import { PHONE, PHONE_HREF } from "@/lib/site";

export const metadata = pageMeta({
  title: "Home Care Jobs in Montgomery County, PA | Mourning Dove",
  description: "Join Mourning Dove Home Care: competitive pay, the ability to choose jobs, professional growth and training, and 401k plans. Apply online today.",
  path: "/employment",
});

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const BENEFIT_GLOWS = ["90 180 230", "22 178 94", "222 99 113", "147 120 181"];
const BENEFIT_TONES = ["bg-dove-100 text-dove-700", "bg-leaf-100 text-leaf-700", "bg-wine-100 text-wine-600", "bg-plum-100 text-plum-700"];

export default function EmploymentPage() {
  return (
    <PageTransition>
      {/* ───────────── Hero ───────────── */}
      <section className="noise relative isolate overflow-hidden bg-plum-950 pt-40 pb-24 text-white sm:pt-48 lg:pb-32">
        <div className="aurora -z-10" aria-hidden="true">
          <span style={{ "--c": "#3399d6", "--s": "40rem", top: "-16rem", right: "-10rem", "--o": 0.32 } as CSSProperties} />
          <span style={{ "--c": "#a51f33", "--s": "30rem", bottom: "-14rem", left: "-10rem", "--o": 0.25, "--delay": "-9s" } as CSSProperties} />
        </div>

        <div className="shell grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow enter text-dove-300" style={d(0)}>
              Careers
            </span>
            <h1 className="enter-lcp mt-6 text-6xl leading-[0.95] font-medium sm:text-7xl lg:text-[6rem]">
              Join Our <span className="text-gradient italic">Team!</span>
            </h1>
            <p className="enter-lcp mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Are you passionate about providing exceptional care? We are constantly seeking <strong className="font-semibold text-white">compassionate individuals</strong> to join our dedicated
              team of home care professionals. If you are ready to make a difference, we invite you to explore career opportunities with us.
            </p>
            <div className="enter mt-10 flex flex-wrap gap-3" style={d(270)}>
              <a href="#apply" className="btn btn-light">
                Apply now <ArrowDown className="btn-arrow size-4" />
              </a>
              <a href={PHONE_HREF} className="btn btn-outline-light">
                <Phone className="size-4" /> {PHONE}
              </a>
            </div>
          </div>

          <div className="enter relative mx-auto h-[26rem] w-full max-w-md sm:h-[30rem]" style={d(220)}>
            <div className="absolute top-0 right-0 w-[72%] rotate-[4deg] overflow-hidden rounded-[2rem] border-[6px] border-white/90 shadow-lift">
              <Img src={img.employment1} alt="A caregiver holding a client's hands" width={320} height={240} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[70%] -rotate-[5deg] overflow-hidden rounded-[2rem] border-[6px] border-white/90 shadow-lift">
              <Img src={img.services3} alt="A caregiver serving a meal to a senior woman" width={320} height={240} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="glass absolute top-1/2 right-2 -translate-y-1/2 rounded-2xl p-4 text-plum-900" style={{ animation: "float 8s ease-in-out infinite" }}>
              <p className="flex items-center gap-2 text-sm font-bold">
                <span className="relative flex size-2.5">
                  <span className="absolute inset-0 rounded-full bg-leaf-400" style={{ animation: "ping-soft 1.8s ease-out infinite" }} />
                  <span className="relative size-2.5 rounded-full bg-leaf-500" />
                </span>
                We&apos;re hiring
              </p>
              <p className="mt-1 text-xs text-plum-600">{POSITIONS.length} roles open</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Positions marquee ───────────── */}
      <section aria-label="Open positions" className="border-b border-linen bg-white py-8">
        <Marquee speed={45} gap="3rem" className="edge-fade-x">
          {POSITIONS.map((p) => (
            <span key={p} className="flex items-center gap-12 font-display text-4xl whitespace-nowrap text-plum-900 sm:text-5xl">
              {p}
              <Sparkles className="size-6 text-leaf-500" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ───────────── Why choose us ───────────── */}
      <section className="py-28 sm:py-36" aria-labelledby="why-title">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-wine-600" data-reveal="up">
              Benefits
            </span>
            <h2 id="why-title" className="mt-5 text-5xl leading-[1] font-medium sm:text-6xl" data-reveal="up" style={d(80)}>
              Why Choose <span className="italic text-wine-700">Us?</span>
            </h2>
          </div>

          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_BENEFITS.map((b, i) => (
              <li key={b.title} data-reveal="up" style={d(i * 90)}>
                <GlowCard glow={BENEFIT_GLOWS[i]} tilt={8} className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-linen">
                  <span className={`grid size-14 place-items-center rounded-2xl ${BENEFIT_TONES[i]}`}>
                    <Icon name={b.icon} className="size-6" />
                  </span>
                  <h3 className="mt-10 text-2xl leading-tight font-medium">{b.title}</h3>
                  <span className="mt-auto pt-6 text-xs font-bold tracking-[0.2em] text-plum-300">0{i + 1}</span>
                </GlowCard>
              </li>
            ))}
          </ul>
          <p
            className="mt-5 flex items-center justify-center gap-3 rounded-[2rem] border-2 border-dashed border-plum-200 px-6 py-6 text-center text-plum-600"
            data-reveal="up"
          >
            <Sparkles className="size-5 text-wine-400" /> (more benefits soon to come)
          </p>
        </div>
      </section>

      {/* ───────────── Application ───────────── */}
      <section id="apply" className="relative bg-sand/70 py-28 sm:py-36" aria-labelledby="apply-title">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow text-dove-700" data-reveal="up">
              Apply
            </span>
            <h2 id="apply-title" className="mt-5 text-4xl leading-[1.05] font-medium sm:text-5xl" data-reveal="up" style={d(80)}>
              Start your journey with us
            </h2>
            <figure className="relative mt-10 overflow-hidden rounded-[2rem] shadow-lift" data-reveal="scale" style={d(160)}>
              <Img
                src={img.employmentFriends}
                alt="Two women smiling together outdoors"
                sizes="(max-width: 1024px) 100vw, 500px"
                className="parallax aspect-[4/3] w-full scale-110 object-cover"
                style={{ "--px-from": "-24px", "--px-to": "24px" } as CSSProperties}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white">
                <Quote className="size-7 text-dove-300" />
                <p className="mt-3 font-display text-lg leading-snug sm:text-xl">
                  Mourning Dove Home Care, your trusted partner in home care services, where experience and compassion meet. Empowering
                  families and seniors with personalized and compassionate care.
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="glass rounded-[2.5rem] p-6 sm:p-10" data-reveal="up" style={d(120)}>
            <EmploymentForm />
          </div>
        </div>
      </section>
      <FaqSection id="careers-faq" title="Working with us" faqs={EMPLOYMENT_FAQ} className="py-28 sm:py-36" />
    </PageTransition>
  );
}
