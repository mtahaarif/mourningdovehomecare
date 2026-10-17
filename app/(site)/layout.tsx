import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { RevealObserver } from "@/components/site/RevealObserver";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div id="top" />
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
