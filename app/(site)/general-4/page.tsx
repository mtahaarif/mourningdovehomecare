import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Quote } from "lucide-react";
import { PageTransition } from "@/components/site/PageTransition";
import { TestimonialWall } from "@/components/sections/TestimonialWall";
import { WordReveal } from "@/components/ui/WordReveal";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Testimonials",
  alternates: { canonical: "/general-4" },
  openGraph: { title: "Testimonials | Home Care Agency", url: "/general-4" },
  twitter: { title: "Testimonials | Home Care Agency" },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const STRIP = [
  { src: img.testimonials1, pos: "0% 50%", from: "40px", to: "-40px", alt: "A caregiver walking arm in arm with a senior woman" },
  { src: img.testimonials2, pos: "50% 50%", from: "-30px", to: "60px", alt: "A nurse sharing a smile with a senior woman" },
  { src: img.testimonials3, pos: "46.7% 50%", from: "70px", to: "-20px", alt: "A caregiver helping a senior woman with her walker" },
];

export default function TestimonialsPage() {
  return (
    <PageTransition>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-40 pb-20 text-center sm:pt-48">
        <div className="aurora -z-10" aria-hidden="true">
          <span style={{ "--c": "#b8e0f5", "--s": "36rem", top: "-18rem", left: "10%", "--o": 0.6 } as CSSProperties} />
          <span style={{ "--c": "#a8ebc4", "--s": "28rem", top: "-6rem", right: "5%", "--o": 0.5, "--delay": "-8s" } as CSSProperties} />
        </div>
        <Quote
          className="absolute top-32 left-[8%] -z-10 size-40 -rotate-12 text-dove-200/70"
          style={{ animation: "float 10s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <Quote
          className="absolute right-[7%] bottom-6 -z-10 size-28 rotate-[168deg] text-leaf-200/80"
          style={{ animation: "float 12s ease-in-out -4s infinite" }}
          aria-hidden="true"
        />

        <div className="shell max-w-4xl">
          <span className="enter glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-plum-800" style={d(0)}>
            <span className="size-2 rounded-full bg-gradient-to-r from-dove-500 to-leaf-500" />
            Google Reviews
          </span>
          <h1 className="enter mt-7 text-5xl leading-[1] font-medium text-plum-950 sm:text-7xl lg:text-[5.5rem]" style={d(90)}>
            See What People Are <span className="text-gradient italic">Saying</span>
          </h1>
          <p className="enter mx-auto mt-7 max-w-xl text-lg text-plum-700 sm:text-xl" style={d(180)}>
            Reviews shared on Google by the people we work with.
          </p>
        </div>
      </section>

      {/* ───────────── Spotlight ───────────── */}
      <section className="pb-24" aria-label="Featured review">
        <div className="shell">
          <figure className="spin-border rounded-[2.5rem]" data-reveal="scale">
            <div className="noise relative overflow-hidden rounded-[2.5rem] bg-plum-950 px-8 py-16 text-white sm:px-16 sm:py-24">
              <div className="aurora" aria-hidden="true">
                <span style={{ "--c": "#3399d6", "--s": "28rem", top: "-10rem", right: "-6rem", "--o": 0.3 } as CSSProperties} />
              </div>
              <Quote className="relative size-12 text-dove-300" />
              <blockquote className="relative mt-8 max-w-4xl">
                <WordReveal
                  text="My uncle wasn’t just another client to them. They treated him like family. Their warmth and professionalism gave us peace of mind, knowing he was in loving and capable hands."
                  accent={["family", "peace", "mind"]}
                  className="font-display text-3xl leading-[1.25] sm:text-[2.75rem]"
                />
              </blockquote>
              <figcaption className="relative mt-10 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-dove-400 to-leaf-400 font-display text-xl">E</span>
                <span>
                  <span className="block font-semibold">Elijah Smith, PA</span>
                  <span className="text-sm text-white/60">Google Review</span>
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ───────────── Review wall ───────────── */}
      <section className="pb-28 sm:pb-36" aria-labelledby="wall-title">
        <div className="shell">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="wall-title" className="text-4xl leading-[1.05] font-medium sm:text-5xl" data-reveal="up">
              Every review, <span className="italic text-wine-700">in their words</span>
            </h2>
            <p className="max-w-xs text-sm text-plum-600" data-reveal="up" style={d(100)}>
              Hover a column to pause it, and open any review to read it in full.
            </p>
          </div>
          <TestimonialWall />
        </div>
      </section>

      {/* ───────────── Parallax photo strip ───────────── */}
      <section className="overflow-hidden bg-sand/70 py-24 sm:py-32" aria-hidden="true">
        <div className="shell grid grid-cols-3 gap-3 sm:gap-6">
          {STRIP.map((s, i) => (
            <div
              key={i}
              className="parallax overflow-hidden rounded-[1.25rem] shadow-lift sm:rounded-[2rem]"
              style={{ "--px-from": s.from, "--px-to": s.to } as CSSProperties}
            >
              <Image src={s.src} alt="" placeholder="blur" sizes="(max-width: 640px) 33vw, 400px" className="aspect-[3/4] w-full object-cover" style={{ objectPosition: s.pos }} />
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
