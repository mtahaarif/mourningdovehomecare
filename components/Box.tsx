import type { CSSProperties, ElementType, AllHTMLAttributes, ReactNode } from "react";

type V = number | string;
/** [x, y, width?, height?] — numbers are px, strings are raw CSS lengths. */
export type Rect = [V, V, V?, V?];
/** [font-size, line-height] — numbers are px. */
export type Font = [V, V?];

const css = (v: V | undefined) =>
  v === undefined ? undefined : typeof v === "number" ? `${v}px` : v;

type BoxProps = Omit<AllHTMLAttributes<HTMLElement>, "as" | "style" | "className" | "children"> & {
  /** Desktop rect, relative to the 980px column (x) and the section top (y). Omit to hide on desktop. */
  d?: Rect;
  /** Mobile rect, relative to the 320px column (x) and the section top (y). Omit to hide on mobile. */
  m?: Rect;
  /** Full-width band: only y/height are used. */
  band?: boolean;
  /** x is an offset from the parent's horizontal center instead of the column's left edge. */
  fromCenter?: boolean;
  fs?: Font;
  mfs?: Font;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * Absolutely positioned element that reproduces the original Wix layout at
 * both breakpoints (desktop ≥ 751px, mobile ≤ 750px).
 */
export function Box({ d, m, band, fromCenter, fs, mfs, as: Tag = "div", className, style, children, ...rest }: BoxProps) {
  // Custom properties inherit, so every one is always set explicitly to keep
  // nested boxes from picking up their parent's geometry.
  const r = (rect?: Rect) => [css(rect?.[0]) ?? "0px", css(rect?.[1]) ?? "0px", css(rect?.[2]) ?? "auto", css(rect?.[3]) ?? "auto"];
  const [x, y, w, h] = r(d);
  const [mx, my, mw, mh] = r(m);
  const vars: Record<string, string | undefined> = { "--x": x, "--y": y, "--w": w, "--h": h, "--mx": mx, "--my": my, "--mw": mw, "--mh": mh };
  if (fs || mfs) {
    const f = fs ?? mfs!;
    const mf = mfs ?? fs!;
    Object.assign(vars, { "--fs": css(f[0]), "--lh": css(f[1]) ?? "normal", "--mfs": css(mf[0]), "--mlh": css(mf[1]) ?? "normal" });
  }
  const cls = ["box", band && "band", fromCenter && "pc", !d && "d-hide", !m && "m-hide", (fs || mfs) && "t", className]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag {...rest} className={cls} style={{ ...(vars as CSSProperties), ...style }}>
      {children}
    </Tag>
  );
}

/** Inline span with its own desktop/mobile font size. */
export function S({ d, m, className, style, children }: { d: V; m: V; className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <span className={["fs", className].filter(Boolean).join(" ")} style={{ "--fs": css(d), "--mfs": css(m), ...style } as CSSProperties}>
      {children}
    </span>
  );
}

/** Page canvas with explicit desktop/mobile heights; children are absolutely positioned. */
export function Canvas({ d, m, className, children }: { d: number; m: number; className?: string; children: ReactNode }) {
  return (
    <main className={["canvas", className].filter(Boolean).join(" ")} style={{ "--ch": `${d}px`, "--mch": `${m}px` } as CSSProperties}>
      {children}
    </main>
  );
}
