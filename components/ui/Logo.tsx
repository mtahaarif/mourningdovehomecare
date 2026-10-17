import Image from "next/image";
import { img } from "@/lib/images";

/** House-and-dove symbol from the logo, with the wordmark set as live type. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src={img.logoSymbol} alt="" className="h-9 w-auto sm:h-10" preload sizes="80px" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-semibold tracking-tight sm:text-[1.3rem] ${light ? "text-white" : "text-wine-700"}`}>
          Mourning Dove
        </span>
        <span className={`mt-1 text-[0.58rem] font-bold tracking-[0.32em] ${light ? "text-leaf-300" : "text-leaf-600"}`}>HOME CARE LLC</span>
      </span>
    </span>
  );
}
