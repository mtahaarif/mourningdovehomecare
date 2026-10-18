"use client";

import { useSyncExternalStore } from "react";
import { HOURS } from "@/lib/site";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const fmt = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")}${h < 12 ? "am" : "pm"}`;
};

// Building an Intl.DateTimeFormat is expensive, and React reads the snapshot on every render, so build it once.
let formatter: Intl.DateTimeFormat | undefined;

/** Office status in the office's own time zone, e.g. "open|Open now · closes 5:00pm". */
function computeStatus(): string {
  formatter ??= new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  });
  const parts = formatter.formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = DAY_NAMES.indexOf(get("weekday"));
  const now = Number(get("hour")) * 60 + Number(get("minute"));

  const today = HOURS.find((h) => (h.days as readonly number[]).includes(day));
  if (today && now >= toMinutes(today.open) && now < toMinutes(today.close)) {
    return `open|Open now · closes ${fmt(today.close)}`;
  }
  // Find the next opening time within the coming week.
  for (let offset = 0; offset < 8; offset++) {
    const d = (day + offset) % 7;
    const slot = HOURS.find((h) => (h.days as readonly number[]).includes(d));
    if (!slot || (offset === 0 && now >= toMinutes(slot.open))) continue;
    const when = offset === 0 ? "today" : offset === 1 ? "tomorrow" : DAY_NAMES[d];
    return `closed|Closed · opens ${when} ${fmt(slot.open)}`;
  }
  return "closed|Closed";
}

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
};

/** Live "Open now / Closed" badge for the office (America/New_York). */
export function OpenStatus({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const status = useSyncExternalStore(subscribe, computeStatus, () => null);
  const [state, label] = status ? status.split("|") : ["", "Office hours"];
  const open = state === "open";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        dark ? "bg-white/10 text-white/85 ring-1 ring-white/15" : "bg-white text-plum-800 ring-1 ring-linen"
      } ${className}`}
    >
      <span className="relative flex size-2">
        {open && <span className="absolute inset-0 rounded-full bg-leaf-400" style={{ animation: "ping-soft 1.8s ease-out infinite" }} />}
        <span className={`relative size-2 rounded-full ${open ? "bg-leaf-500" : status ? "bg-wine-400" : "bg-plum-300"}`} />
      </span>
      {label}
    </span>
  );
}
