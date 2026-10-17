"use client";

import { ArrowUpRight, Quote, X } from "lucide-react";
import { useRef, useState, type CSSProperties } from "react";
import { Marquee } from "@/components/ui/Marquee";
import { TESTIMONIALS, type Testimonial } from "@/lib/content";

const ACCENTS = ["text-dove-500", "text-leaf-500"];
// Each column cycles through a different order so neighbours never match.
const COLUMNS = [
  [0, 3, 1, 4],
  [2, 5, 0, 3],
  [4, 1, 5, 2],
];

function Card({ t, index, onOpen }: { t: Testimonial; index: number; onOpen: () => void }) {
  const long = t.paragraphs.join(" ").length > 220;
  return (
    <article className="group rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-linen transition duration-500 hover:shadow-lift">
      <Quote className={`size-8 ${ACCENTS[index % 2]} transition-transform duration-500 group-hover:-rotate-12`} />
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
            Read more <ArrowUpRight className="size-3.5" />
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
      {/* Desktop: infinite vertical columns */}
      <div className="edge-fade-y hidden h-[52rem] grid-cols-3 gap-5 overflow-hidden lg:grid">
        {COLUMNS.map((col, c) => (
          <Marquee key={c} vertical reverse={c === 1} speed={[58, 72, 64][c]} gap="1.25rem">
            {col.map((i) => (
              <Card key={i} t={TESTIMONIALS[i]} index={i} onOpen={() => open(TESTIMONIALS[i])} />
            ))}
          </Marquee>
        ))}
      </div>

      {/* Mobile / tablet: simple grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} data-reveal="up" style={{ "--d": `${(i % 2) * 90}ms` } as CSSProperties}>
            <Card t={t} index={i} onOpen={() => open(t)} />
          </div>
        ))}
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
