"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Appears once the 480px sentinel at the top of the page scrolls out of view.
 * An IntersectionObserver fires only when that changes; the scroll-timeline
 * version it replaces measurably delayed first paint (~160ms at 4x CPU).
 */
export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setShown(!entry.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href="#top"
      data-shown={shown}
      tabIndex={shown ? undefined : -1}
      className="to-top fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full text-plum-900 sm:right-6 sm:bottom-6"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
      <span className="sr-only">Back to top</span>
    </a>
  );
}
