"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  vertical?: boolean;
  /** Set the loop time and spacing with classes, e.g. "[--speed:50s] [--gap:2.5rem]". */
  className?: string;
};

/**
 * Infinite, seamless marquee: the content slides by -100% and an identical copy
 * follows it. Pauses on hover. The copy is cloned in the browser rather than
 * rendered on the server, so the content is sent, parsed and hydrated only once.
 * It starts off-screen, so filling it after hydration is never visible.
 */
export function Marquee({ children, reverse, vertical, className = "" }: MarqueeProps) {
  const track = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track.current || !copy.current) return;
    copy.current.replaceChildren(...Array.from(track.current.childNodes, (node) => node.cloneNode(true)));
  }, [children]);

  const base = vertical ? "marquee-v" : "marquee";
  return (
    <div className={`${base} ${className}`} data-reverse={reverse || undefined}>
      <div ref={track} className={`${base}-track`}>
        {children}
      </div>
      <div ref={copy} className={`${base}-track`} aria-hidden="true" inert />
    </div>
  );
}
