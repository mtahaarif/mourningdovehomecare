import { Img } from "@/components/ui/Img";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TLink } from "@/components/site/TLink";
import { SERVICE_TRACK } from "@/lib/content";

/**
 * Pinned horizontal scroller: on wide screens (with scroll-driven animation
 * support) the section pins and its cards slide sideways as you scroll down.
 * Everywhere else it's a swipeable scroll-snap carousel. See `.hs` in globals.css.
 */
export function HorizontalServices() {
  return (
    <section
      aria-labelledby="services-track-title"
      className={`hs relative bg-gradient-to-b from-cream via-sand/60 to-cream [--n:${SERVICE_TRACK.length}]`}
    >
      <div className="hs-pin py-20 lg:py-0">
        <div className="shell mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal="up">
            <span className="eyebrow text-dove-700">What we offer</span>
            <h2 id="services-track-title" className="mt-4 text-4xl leading-[1.05] font-medium sm:text-5xl lg:text-6xl">
              Care that comes <span className="text-gradient italic">to you</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 [--d:120ms]" data-reveal="up">
            <p className="hidden items-center gap-2 text-sm font-semibold text-plum-600 lg:flex">
              Scroll to explore <ArrowRight className="size-4 animate-pulse" />
            </p>
            <TLink href="/services" className="btn btn-ghost !h-11 text-sm">
              All services <ArrowUpRight className="btn-arrow size-4" />
            </TLink>
          </div>
        </div>

        <div className="shell mb-8 hidden lg:block">
          <div className="h-[3px] overflow-hidden rounded-full bg-linen">
            <div className="hs-bar h-full origin-left rounded-full bg-gradient-to-r from-dove-500 via-leaf-400 to-wine-400" />
          </div>
        </div>

        <ul className="hs-track">
          {SERVICE_TRACK.map((s, i) => (
            <li key={s.n} data-reveal="up" className={`[--d:${i * 70}ms]`}>
              <TLink
                href={s.href}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[2rem] bg-plum-900 p-7 text-white shadow-lift ring-1 ring-black/5"
              >
                <Img
                  src={s.image}
                  alt=""
                  sizes="(max-width: 640px) 82vw, 400px"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/95 via-plum-950/45 to-plum-950/5" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <span className="glass-dark rounded-full px-3 py-1 text-xs font-bold tracking-widest">{s.n}</span>
                  <span className="grid size-12 place-items-center rounded-full bg-white text-plum-900 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
                <div className="relative">
                  <h3 className="text-[1.9rem] leading-tight font-medium">{s.title}</h3>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] max-lg:grid-rows-[1fr]">
                    <p className="overflow-hidden text-[0.95rem] leading-relaxed text-white/75">
                      <span className="block pt-3">{s.text}</span>
                    </p>
                  </div>
                  <span className="mt-5 flex items-center gap-3 text-sm font-semibold text-dove-200">
                    Learn more
                    <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
                  </span>
                </div>
              </TLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
