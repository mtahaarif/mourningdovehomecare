import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { CSSProperties } from "react";
import { TLink } from "./TLink";
import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { img } from "@/lib/images";
import { ADDRESS, EMAIL, FACEBOOK, HOURS, INSTAGRAM, MAP_URL, NAV, PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/site";

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden bg-plum-950 text-white">
      <div className="aurora" aria-hidden="true">
        <span style={{ "--c": "#3399d6", "--s": "38rem", top: "-14rem", left: "-10rem", "--o": 0.28 } as CSSProperties} />
        <span style={{ "--c": "#a51f33", "--s": "30rem", top: "6rem", right: "-12rem", "--o": 0.22, "--delay": "-8s" } as CSSProperties} />
        <span style={{ "--c": "#16b25e", "--s": "26rem", bottom: "-14rem", left: "35%", "--o": 0.16, "--delay": "-14s" } as CSSProperties} />
      </div>

      <div className="shell relative">
        {/* Closing call to action */}
        <div className="grid gap-10 border-b border-white/10 py-20 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
          <div data-reveal="up">
            <span className="eyebrow text-dove-300">We&apos;re here to help</span>
            <h2 className="mt-6 text-5xl leading-[1.02] font-medium sm:text-6xl lg:text-7xl">
              Quality care is the <span className="text-gradient italic">best care.</span>
            </h2>
          </div>
          <div data-reveal="up" style={{ "--d": "120ms" } as CSSProperties}>
            <p className="text-lg leading-relaxed text-white/70">
              If you are seeking excellent home care services or would like more information, our advisors are available to assist you with
              any questions you may have.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn btn-light">
                <span className="btn-icon">
                  <Phone className="size-4" />
                </span>
                Call {PHONE}
              </a>
              <TLink href="/contact-us" className="btn btn-outline-light">
                Send a message <ArrowRight className="btn-arrow size-4" />
              </TLink>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1.45fr_1.05fr]">
          <div className="max-w-sm">
            <div className="inline-flex rounded-3xl bg-cream p-4 shadow-lift">
              <Image src={img.logoMark} alt="Mourning Dove Home Care LLC" className="h-20 w-auto" sizes="120px" />
            </div>
            <p className="mt-6 leading-relaxed text-white/60">
              Compassionate, high-quality, and personalized care to individuals in their homes — enabling them to maintain independence and
              dignity.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full bg-white/8 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:ring-transparent"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="grid size-11 place-items-center rounded-full bg-white/8 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-[#1877f2] hover:ring-transparent"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <TLink href={item.href} className="link-draw text-white/80 transition-colors hover:text-white">
                    {item.label}
                  </TLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-white/80">
              <li>
                <a href={PHONE_HREF} className="group flex items-center gap-3 hover:text-white">
                  <span className="grid size-9 place-items-center rounded-full bg-white/8 ring-1 ring-white/10 transition group-hover:bg-dove-500">
                    <Phone className="size-4" />
                  </span>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="group flex items-center gap-3 [overflow-wrap:anywhere] hover:text-white">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/8 ring-1 ring-white/10 transition group-hover:bg-dove-500">
                    <Mail className="size-4" />
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={MAP_URL} target="_blank" rel="noreferrer noopener" className="group flex items-start gap-3 hover:text-white">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/8 ring-1 ring-white/10 transition group-hover:bg-dove-500">
                    <MapPin className="size-4" />
                  </span>
                  <span>
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.city}
                    <span className="mt-1 flex items-center gap-1 text-sm text-dove-300">
                      Get directions <ArrowUpRight className="size-3.5" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Hours of operation</h3>
            <dl className="mt-5 space-y-3">
              {HOURS.map((h) => (
                <div key={h.label} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-white/60">{h.label}</dt>
                  <dd className="font-medium text-white/90">{h.display}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 pb-1">
                <dt className="text-white/60">Sat – Sun</dt>
                <dd className="font-medium text-white/50">Closed</dd>
              </div>
            </dl>
            <OpenStatus dark className="mt-5" />
          </div>
        </div>

        {/* Giant outlined wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-[0.1em] text-center font-display text-[14.2vw] leading-[0.85] font-semibold tracking-tight whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1px_rgb(255_255_255/0.13)] 2xl:text-[13rem]"
        >
          Mourning Dove
        </div>

        <div className="relative flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mourning Dove Home Care LLC. All Rights Reserved.</p>
          <p>Proudly serving {SERVICE_AREA}.</p>
        </div>
      </div>
    </footer>
  );
}
