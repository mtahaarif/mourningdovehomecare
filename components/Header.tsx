"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Box } from "./Box";
import { NAV, PHONE, PHONE_HREF } from "@/lib/site";

const NAV_WIDTHS = [89, 89, 112, 132, 159, 143];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="site-header">
      <Box d={[0, 0, 256, 190]} m={[9, -4, 167, 168]} className="logo">
        <Link href="/" aria-label="Mourning Dove Home Care LLC — Home">
          <Image src="/images/logo.png" alt="Mourning Dove.png" width={500} height={500} priority className="logo-img" />
        </Link>
      </Box>

      <Box d={[779, 35, 35, 42]} className="pic">
        <Image src="/images/icon-phone.png" alt="" width={35} height={42} />
      </Box>
      <Box d={[793, 48, 179, 29]} className="header-phone">
        <p>{PHONE}</p>
      </Box>
      <Box m={[171, 99, 129, 58]} className="header-phone">
        <p>
          <a href={PHONE_HREF}>{PHONE}</a>
        </p>
      </Box>

      <Box d={[255, 155, 724, 17]} as="nav" className="desktop-nav" aria-label="Site">
        {NAV.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            style={{ width: NAV_WIDTHS[i] }}
            className={pathname === item.href ? "active" : undefined}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </Box>

      <Box m={[250, 15, 50, 50]} as="button" className="hamburger" aria-label="Open Site Navigation" onClick={() => setOpen(true)}>
        <span />
        <span />
        <span />
      </Box>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site Navigation">
          <button className="mobile-menu-close" aria-label="Close Site Navigation" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
          <nav aria-label="Site">
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
