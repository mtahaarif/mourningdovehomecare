import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { RevealObserver } from "@/components/site/RevealObserver";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div id="top" />
      {/* BackToTop appears once this 480px strip has scrolled out of view. */}
      <div id="top-sentinel" aria-hidden="true" className="pointer-events-none absolute top-0 left-0 h-[480px] w-px" />
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-plum-900 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      {children}
      <Footer />
      <BackToTop />
      <RevealObserver />
    </>
  );
}
