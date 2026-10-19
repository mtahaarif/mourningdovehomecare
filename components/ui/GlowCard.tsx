"use client";

import type { AllHTMLAttributes, ElementType, PointerEvent, ReactNode } from "react";

/** Spotlight colours (see .glow-* in globals.css); dove blue is the default. */
const GLOWS = { dove: "", leaf: "glow-leaf", wine: "glow-wine", plum: "glow-plum" };

type GlowCardProps = Omit<AllHTMLAttributes<HTMLElement>, "as"> & {
  as?: ElementType;
  glow?: keyof typeof GLOWS;
  /** Max tilt in degrees (0 disables the 3D tilt). */
  tilt?: number;
  children: ReactNode;
};

/** Card with a pointer-following spotlight, glowing border and optional 3D tilt. */
export function GlowCard({ as: Tag = "div", glow = "dove", tilt = 0, className = "", children, ...rest }: GlowCardProps) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt) {
      el.style.setProperty("--rx", `${((r.height / 2 - y) / r.height) * tilt}deg`);
      el.style.setProperty("--ry", `${((x - r.width / 2) / r.width) * tilt}deg`);
    }
  };
  const onLeave = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag
      {...rest}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`glow-card ${GLOWS[glow]} ${tilt ? "tilt" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
