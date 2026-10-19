"use client";

import { Quote, X } from "lucide-react";
import { useRef, useState } from "react";
import { Marquee } from "@/components/ui/Marquee";
import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

const ACCENTS = ["text-dove-500", "text-leaf-500"];
// Loop times differ per column so the columns drift against each other.
const COLUMN_SPEEDS = ["[--speed:58s]", "[--speed:72s]", "[--speed:64s]"];
// Each column cycles through a different order so neighbours never match.
const COLUMNS = [
  [0, 3, 1, 4],
  [2, 5, 0, 3],
  [4, 1, 5, 2],
];

/**
 * The card icons (lucide Quote and ArrowUpRight), drawn once and referenced by every
 * card: the wall renders 18 cards, and inlining each icon repeated ~10KB of markup.
 */
function IconSprite() {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg aria-hidden="true" className="absolute size-0 overflow-hidden">
      <symbol id="review-quote" viewBox="0 0 24 24" {...stroke}>
        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      </symbol>
      <symbol id="review-more" viewBox="0 0 24 24" {...stroke}>
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </symbol>
    </svg>
  );
}

function Card({ t, index, onOpen, className = "" }: { t: Testimonial; index: number; onOpen: () => void; className?: string }) {
  const long = t.paragraphs.join(" ").length > 220;
  return (
    <article className={`group rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-linen transition duration-500 hover:shadow-lift ${className}`}>
      <svg className={`size-8 ${ACCENTS[index % 2]} transition-transform duration-500 group-hover:-rotate-12`} aria-hidden="true">
        <use href="#review-quote" />
      </svg>
      <p className="mt-4 line-clamp-6 leading-relaxed text-plum-800">{t.paragraphs.join(" ")}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="flex items-center gap-3 text-sm font-semibold text-plum-900">
          <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-dove-400 to-leaf-400 font-display text-base text-white">
            {t.name[0]}
          </span>
          {t.name}
        </p>
        {long && (
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-sand px-3 py-1.5 text-xs font-semibold text-plum-800 transition hover:bg-plum-900 hover:text-white"
          >
            Read more
            <svg className="size-3.5" aria-hidden="true">
              <use href="#review-more" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
}

/** Three vertically scrolling columns of reviews (desktop) or a grid (mobile), with a full-review dialog. */
export function TestimonialWall() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Testimonial | null>(null);

  const open = (t: Testimonial) => {
    setActive(t);
    dialog.current?.showModal();
  };

  return (
    <>
      <IconSprite />
      {/* Desktop: infinite vertical columns */}
      <div className="edge-fade-y hidden h-[52rem] grid-cols-3 gap-5 overflow-hidden lg:grid">
        {COLUMNS.map((col, c) => (
          <Marquee key={c} vertical reverse={c === 1} className={COLUMN_SPEEDS[c]}>
            {col.map((i) => (
              <Card key={i} t={TESTIMONIALS[i]} index={i} onOpen={() => open(TESTIMONIALS[i])} />
            ))}
          </Marquee>
        ))}
      </div>

      {/* Mobile / tablet: infinite horizontal carousel */}
      <div className="-mx-5 lg:hidden sm:-mx-10">
        <Marquee className="edge-fade-x [--gap:1rem] [--speed:90s]">
          {TESTIMONIALS.map((t, i) => (
            <Card key={t.name} t={t} index={i} onOpen={() => open(t)} className="flex w-[17.5rem] shrink-0 flex-col justify-between sm:w-[22rem]" />
          ))}
        </Marquee>
      </div>

      <dialog
        ref={dialog}
        aria-label={active ? `Review from ${active.name}` : "Review"}
        className="modal m-auto w-[min(42rem,calc(100vw-2rem))] rounded-[2rem] bg-white p-0 text-ink shadow-lift"
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        {active && (
          <div className="relative max-h-[85vh] overflow-y-auto p-8 sm:p-12">
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close"
              className="absolute top-5 right-5 grid size-10 place-items-center rounded-full bg-sand text-plum-800 transition hover:bg-plum-900 hover:text-white"
            >
              <X className="size-4" />
            </button>
            <Quote className="size-10 text-dove-500" />
            <div className="mt-6 space-y-4 font-display text-xl leading-relaxed text-plum-900 sm:text-[1.35rem]">
              {active.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-3 font-semibold text-plum-900">
              <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-dove-400 to-leaf-400 font-display text-lg text-white">
                {active.name[0]}
              </span>
              {active.name}
              <span className="ml-auto rounded-full bg-dove-50 px-3 py-1 text-xs font-semibold text-dove-700">Google Review</span>
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
