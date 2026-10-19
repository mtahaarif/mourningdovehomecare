import { Img } from "@/components/ui/Img";
import { Quote } from "lucide-react";
import { PageTransition } from "@/components/site/PageTransition";
import { pageMeta } from "@/lib/seo";
import { TestimonialWall } from "@/components/sections/TestimonialWall";
import { WordReveal } from "@/components/ui/WordReveal";
import { img } from "@/lib/images";

export const metadata = pageMeta({
  title: "Client Testimonials | Mourning Dove Home Care",
  description: "Read Google reviews from families and clients of Mourning Dove Home Care, a home care provider serving Montgomery County, PA, and the surrounding areas.",
  path: "/testimonials",
});

// `pos` crops each photo; `drift` is its parallax travel (see .parallax in globals.css).
const STRIP = [
  { src: img.testimonials1, pos: "object-[0%_50%]", drift: "[--px-from:40px] [--px-to:-40px]", alt: "A caregiver walking arm in arm with a senior woman" },
  { src: img.testimonials2, pos: "object-[50%_50%]", drift: "[--px-from:-30px] [--px-to:60px]", alt: "A nurse sharing a smile with a senior woman" },
  { src: img.testimonials3, pos: "object-[46.7%_50%]", drift: "[--px-from:70px] [--px-to:-20px]", alt: "A caregiver helping a senior woman with her walker" },
];

export default function TestimonialsPage() {
  return (
    <PageTransition>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-40 pb-20 text-center sm:pt-48">
        <div className="aurora -z-10" aria-hidden="true">
          <span className="top-[-18rem] left-[10%] [--c:#b8e0f5] [--o:0.6] [--s:36rem]" />
          <span className="top-[-6rem] right-[5%] [--c:#a8ebc4] [--delay:-8s] [--o:0.5] [--s:28rem]" />
        </div>
        <Quote
          className="absolute top-32 left-[8%] -z-10 size-40 -rotate-12 animate-[float_10s_ease-in-out_infinite] text-dove-200/70"
          aria-hidden="true"
        />
        <Quote
          className="absolute right-[7%] bottom-6 -z-10 size-28 rotate-[168deg] animate-[float_12s_ease-in-out_-4s_infinite] text-leaf-200/80"
          aria-hidden="true"
        />

        <div className="shell max-w-4xl">
          <span className="enter glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-plum-800 [--d:0ms]">
            <span className="size-2 rounded-full bg-gradient-to-r from-dove-500 to-leaf-500" />
            Google Reviews
          </span>
          <h1 className="enter-lcp mt-7 text-5xl leading-[1] font-medium text-plum-950 sm:text-7xl lg:text-[5.5rem]">
            See What People Are <span className="text-gradient italic">Saying</span>
          </h1>
          <p className="enter-lcp mx-auto mt-7 max-w-xl text-lg text-plum-700 sm:text-xl">
            Reviews shared on <strong className="font-semibold text-plum-900">Google</strong> by the people we work with.
          </p>
        </div>
      </section>

      {/* ───────────── Spotlight ───────────── */}
      <section className="pb-24" aria-label="Featured review">
        <div className="shell">
          <figure className="spin-border rounded-[2.5rem]" data-reveal="scale">
            <div className="noise relative overflow-hidden rounded-[2.5rem] bg-plum-950 px-8 py-16 text-white sm:px-16 sm:py-24">
              <div className="aurora" aria-hidden="true">
                <span className="top-[-10rem] right-[-6rem] [--c:#3399d6] [--o:0.3] [--s:28rem]" />
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
      <section className="defer-render pb-28 [--defer-h:40rem] sm:pb-36 lg:[--defer-h:70rem]" aria-labelledby="wall-title">
        <div className="shell">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="wall-title" className="text-4xl leading-[1.05] font-medium sm:text-5xl" data-reveal="up">
              Every review, <span className="italic text-wine-700">in their words</span>
            </h2>
            <p className="max-w-xs text-sm text-plum-600 [--d:100ms]" data-reveal="up">
              Hover a column to pause it, and open any review to read it in full.
            </p>
          </div>
          <TestimonialWall />
        </div>
      </section>

      {/* ───────────── Parallax photo strip ───────────── */}
      <section
        className="defer-render overflow-hidden bg-sand/70 py-24 [--defer-h:20rem] sm:py-32 lg:[--defer-h:50rem]"
        aria-hidden="true"
      >
        <div className="shell grid grid-cols-3 gap-3 sm:gap-6">
          {STRIP.map((s, i) => (
            <div key={i} className={`parallax overflow-hidden rounded-[1.25rem] shadow-lift sm:rounded-[2rem] ${s.drift}`}>
              <Img src={s.src} alt="" sizes="(max-width: 640px) 33vw, 400px" className={`aspect-[3/4] w-full object-cover ${s.pos}`} />
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
