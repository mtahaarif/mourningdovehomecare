"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { NAV } from "@/lib/site";

const ORDER: string[] = NAV.map((item) => item.href);
const routeIndex = (href: string) => ORDER.indexOf(href.split(/[?#]/)[0] || "/");

type TLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string; children: ReactNode };

/**
 * Internal link that tags the navigation as `nav-forward` / `nav-back`
 * (by position in the main navigation), so pages slide in the direction
 * of travel.
 */
export function TLink({ href, children, ...rest }: TLinkProps) {
  const pathname = usePathname();
  const from = routeIndex(pathname);
  const to = routeIndex(href);
  const types = from === -1 || to === -1 || from === to ? undefined : [to > from ? "nav-forward" : "nav-back"];

  return (
    <Link href={href} transitionTypes={types} {...rest}>
      {children}
    </Link>
  );
}
