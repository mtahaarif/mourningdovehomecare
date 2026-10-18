"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { ODP_CARDS } from "@/lib/content";

/**
 * Hover-reveal cards: the photo fills the card and a panel slides up to reveal
 * the full text on hover/focus. On touch screens, tapping toggles it.
 */
export function OdpCards() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {ODP_CARDS.map((card, i) => {
        const isOpen = open === i;
        return (
          <li key={card.title} data-reveal="up" style={{ "--d": `${i * 110}ms` } as CSSProperties}>
            <article
              className="reveal-card relative h-[32rem] overflow-hidden rounded-[2rem] bg-plum-900 text-white shadow-lift ring-1 ring-white/10"
              data-open={isOpen}
            >
              <Image src={card.image} alt={card.alt} sizes="(max-width: 768px) 100vw, 400px" className="reveal-img absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/40 to-transparent" />

              <div className="reveal-panel absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-950 via-plum-950/95 to-plum-950/70 p-7 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span>
                    <span className="block text-xs font-bold tracking-[0.2em] text-dove-300">0{i + 1}</span>
                    <span className="mt-1.5 block font-display text-[1.65rem] leading-tight">{card.title}</span>
                  </span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <Plus className="reveal-toggle-icon size-5" />
                  </span>
                </button>
                <p className="reveal-body mt-5 text-[0.95rem] leading-relaxed text-white/80">{card.body}</p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
