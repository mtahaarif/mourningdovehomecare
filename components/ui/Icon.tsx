import {
  AlarmClock,
  CalendarCheck,
  Coffee,
  Footprints,
  GraduationCap,
  HeartHandshake,
  PiggyBank,
  ShowerHead,
  Soup,
  Sparkles,
  Wallet,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  AlarmClock,
  CalendarCheck,
  Coffee,
  Footprints,
  GraduationCap,
  HeartHandshake,
  PiggyBank,
  ShowerHead,
  Soup,
  Sparkles,
  Wallet,
};

export type IconName = keyof typeof ICONS;

/** Renders a lucide icon by name (lets content data reference icons as strings). */
export function Icon({ name, ...props }: LucideProps & { name: IconName }) {
  const Cmp = ICONS[name];
  return <Cmp {...props} />;
}
