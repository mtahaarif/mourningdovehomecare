"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One observer for the whole page: elements with `data-reveal` get the
 * `is-in` class the first time they scroll into view (see globals.css).
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    const scan = () => document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    scan();
    // Batch rescans to at most one per frame, however many DOM mutations arrive.
    let frame = 0;
    const mo = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(() => ((frame = 0), scan()));
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
