import { Img } from "@/components/ui/Img";
// Imported directly, not through lib/images: the client Header renders this, and the
// whole image map (every photo with its blur placeholder) would ship in its bundle.
import logoSymbol from "@/public/images/logo-symbol.png";

/**
 * House-and-dove symbol from the logo, with the wordmark set as live type.
 * `eager` is for the header bar, which is on screen as soon as any page loads.
 */
export function Logo({ light = false, eager = false, className = "" }: { light?: boolean; eager?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Img src={logoSymbol} alt="" width={66} height={40} loading={eager ? "eager" : undefined} className="h-9 w-auto sm:h-10" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-semibold tracking-tight sm:text-[1.3rem] ${light ? "text-white" : "text-wine-700"}`}>
          Mourning Dove
        </span>
        <span className={`mt-1 text-[0.58rem] font-bold tracking-[0.32em] ${light ? "text-leaf-300" : "text-leaf-600"}`}>HOME CARE LLC</span>
      </span>
    </span>
  );
}
