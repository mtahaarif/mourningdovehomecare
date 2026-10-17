import { ViewTransition, type ReactNode } from "react";

/**
 * Wraps a page's content so it slides/blurs in on navigation. Lives in each
 * page (not the layout), because layouts persist and never enter or exit.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "page-enter" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "page-exit" }}
      default="none"
    >
      <main id="main">{children}</main>
    </ViewTransition>
  );
}
