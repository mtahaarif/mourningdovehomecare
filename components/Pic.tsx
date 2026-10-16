import Image from "next/image";
import type { CSSProperties } from "react";
import { Box, type Rect } from "./Box";

type PicProps = {
  src: string;
  alt?: string;
  d?: Rect;
  m?: Rect;
  band?: boolean;
  fromCenter?: boolean;
  /** object-position (mirrors the Wix crop / focal point). */
  pos?: string;
  /** Rendered widths used to build the `sizes` attribute: [desktop, mobile]. */
  sizes?: [string, string];
  round?: boolean;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Pic({ src, alt = "", d, m, band, fromCenter, pos = "50% 50%", sizes, round, priority, className, style }: PicProps) {
  const dw = sizes?.[0] ?? (typeof d?.[2] === "number" ? `${d[2]}px` : "100vw");
  const mw = sizes?.[1] ?? (typeof m?.[2] === "number" ? `${m[2]}px` : "100vw");
  return (
    <Box d={d} m={m} band={band} fromCenter={fromCenter} className={["pic", round && "round", className].filter(Boolean).join(" ")} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={85}
        priority={priority}
        sizes={`(max-width: 750px) ${mw}, ${dw}`}
        style={{ objectFit: "cover", objectPosition: pos }}
      />
    </Box>
  );
}
