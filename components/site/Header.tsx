"use client";

import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ViewTransition, useRef, type CSSProperties } from "react";
import { TLink } from "./TLink";
import { Logo } from "@/components/ui/Logo";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { EMAIL, NAV, PHONE, PHONE_HREF } from "@/lib/site";

const LINKS = NAV.filter((item) => item.href !== "/contact-us");

/** Visible label plus visually hidden context (see NAV in lib/site.ts). */
function NavLabel({ item }: { item: (typeof NAV)[number] }) {
  return (
    <>
      {item.sr[0] && <span className="sr-only">{item.sr[0]}</span>}
      {item.label}
      {item.sr[1] && <span className="sr-only">{item.sr[1]}</span>}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const sheet = useRef<HTMLDialogElement>(null);
  const close = () => sheet.current?.close();

  return (
    <header className="fixed inset-x-0 top-0 z-50" style={{ viewTransitionName: "site-header" }}>
      {/* reading progress */}
      <div className="scroll-progress absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-dove-400 via-leaf-400 to-wine-400" />

      <div className="shell pt-3 sm:pt-4">
        <div className="header-bar flex items-center justify-between gap-4 rounded-full border border-white/50 bg-white/45 py-2 pr-2 pl-4 backdrop-blur-xl backdrop-saturate-150 sm:pl-5">
          <TLink href="/" className="shrink-0 rounded-full" aria-label="Mourning Dove Home Care — home">
            <Logo />
          </TLink>

          {/* Desktop navigation with a morphing active pill */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <TLink
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
                        active ? "text-plum-950" : "text-plum-700 hover:text-plum-950"
                      }`}
                    >
                      {active && (
                        <ViewTransition name="nav-pill" share="pill" default="none">
                          <span className="absolute inset-0 rounded-full bg-white shadow-[0_6px_20px_-8px_rgb(40_26_57/0.35)] ring-1 ring-linen" />
                        </ViewTransition>
                      )}
                      <span className="relative">
                        <NavLabel item={item} />
                      </span>
                    </TLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-plum-800 transition-colors hover:text-dove-700 xl:flex"
            >
              <Phone className="size-4" /> {PHONE}
            </a>
            <TLink
              href="/contact-us"
              className={`btn btn-primary hidden !h-11 !px-5 text-sm sm:inline-flex ${pathname === "/contact-us" ? "!bg-wine-700" : ""}`}
            >
              Contact Us <ArrowUpRight className="btn-arrow size-4" />
            </TLink>
            <a href={PHONE_HREF} className="grid size-11 place-items-center rounded-full bg-white text-plum-900 ring-1 ring-linen sm:hidden">
              <Phone className="size-[18px]" aria-hidden="true" />
              <span className="sr-only">Call {PHONE}</span>
            </a>
            <button
              type="button"
              onClick={() => sheet.current?.showModal()}
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-full bg-plum-900 text-white lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: a modal dialog that opens as an expanding circle */}
      <dialog
        ref={sheet}
        aria-label="Menu"
        className="sheet fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-plum-950 p-0 text-white"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="aurora" aria-hidden="true">
          <span style={{ "--c": "#3399d6", "--s": "26rem", top: "-6rem", right: "-8rem", "--o": 0.35 } as CSSProperties} />
          <span style={{ "--c": "#16b25e", "--s": "22rem", bottom: "-6rem", left: "-8rem", "--o": 0.25, "--delay": "-6s" } as CSSProperties} />
        </div>
        <div className="relative flex min-h-full flex-col px-6 pt-6 pb-10">
          <div className="flex items-center justify-between">
            <span className="sheet-item" style={{ "--i": 0 } as CSSProperties}>
              <Logo light />
            </span>
            <button type="button" onClick={close} aria-label="Close menu" className="grid size-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <X className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-12">
            <ul className="space-y-1">
              {NAV.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="sheet-item" style={{ "--i": i + 1 } as CSSProperties}>
                    <TLink
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-3.5"
                    >
                      <span className="w-6 text-xs font-semibold text-white/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`font-display text-[2rem] leading-tight transition-colors ${active ? "text-dove-300" : "group-hover:text-dove-200"}`}>
                        <NavLabel item={item} />
                      </span>
                    </TLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="sheet-item mt-auto space-y-4 pt-10" style={{ "--i": NAV.length + 1 } as CSSProperties}>
            <OpenStatus dark />
            <a href={PHONE_HREF} className="btn btn-light w-full">
              <span className="btn-icon">
                <Phone className="size-4" />
              </span>
              Call {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn-outline-light w-full">
              <Mail className="size-4" /> {EMAIL}
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
