import { ArrowUp } from "lucide-react";

/** Appears after scrolling; its ring fills with reading progress (pure CSS, see .to-top). */
export function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="to-top fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full text-plum-900 shadow-lift transition-transform duration-500 hover:-translate-y-1 sm:right-6 sm:bottom-6"
    >
      <ArrowUp className="size-5" />
    </a>
  );
}
