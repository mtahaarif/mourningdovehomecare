import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  /** Seconds per loop. */
  speed?: number;
  gap?: string;
  vertical?: boolean;
  className?: string;
};

/** Infinite, seamless marquee: the content is rendered twice and slid by -100%. Pauses on hover. */
export function Marquee({ children, reverse, speed = 42, gap = "1rem", vertical, className = "" }: MarqueeProps) {
  const base = vertical ? "marquee-v" : "marquee";
  return (
    <div className={`${base} ${className}`} data-reverse={reverse || undefined} style={{ "--speed": `${speed}s`, "--gap": gap } as CSSProperties}>
      <div className={`${base}-track`}>{children}</div>
      <div className={`${base}-track`} aria-hidden="true" inert>
        {children}
      </div>
    </div>
  );
}
