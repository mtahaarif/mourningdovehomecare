import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageTransition } from "@/components/site/PageTransition";
import { ContactForm } from "@/components/forms/ContactForm";
import { GlowCard } from "@/components/ui/GlowCard";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { img } from "@/lib/images";
import { ADDRESS, EMAIL, HOURS, MAP_URL, PHONE, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact Us | Home Care Agency", url: "/contact-us" },
  twitter: { title: "Contact Us | Home Care Agency" },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function ContactPage() {
  return (
    <PageTransition>
      {/* ───────────── Hero: photo + glass form ───────────── */}
      <section className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 lg:pb-28">
        <Image
          src={img.contactNurse}
          alt="Nurse greeting elderly man"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover object-[35%_50%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-plum-950/90 via-plum-950/70 to-plum-950/30" />

        <div className="shell grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="text-white">
            <span className="eyebrow enter text-dove-300" style={d(0)}>
              Get in touch
            </span>
            <h1 className="enter mt-6 text-6xl leading-[0.95] font-medium sm:text-7xl lg:text-[5.75rem]" style={d(90)}>
              Contact <span className="text-gradient italic">Us</span>
            </h1>
            <p className="enter mt-8 max-w-lg font-display text-xl leading-relaxed text-white/80 italic sm:text-2xl" style={d(180)}>
              If you are seeking excellent home care services or would like more information, our advisors are available to assist you with any
              questions you may have.
            </p>
            <p className="enter mt-8 text-white/70" style={d(260)}>
              For all inquiries, call{" "}
              <a href={PHONE_HREF} className="link-draw font-semibold text-white">
                {PHONE}
              </a>
              <br />
              Or submit your details via our contact form.
            </p>
          </div>

          <div className="enter glass rounded-[2.5rem] !bg-white/85 p-6 shadow-lift sm:p-10" style={d(200)}>
            <h2 className="mb-6 text-2xl font-medium text-plum-950 sm:text-3xl">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ───────────── Ways to reach us ───────────── */}
      <section className="py-28 sm:py-32" aria-labelledby="reach-title">
        <div className="shell">
          <h2 id="reach-title" className="max-w-xl text-4xl leading-[1.05] font-medium sm:text-5xl" data-reveal="up">
            Four ways to <span className="italic text-wine-700">reach us</span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <GlowCard as="a" href={PHONE_HREF} className="group flex flex-col rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-linen" data-reveal="up">
              <span className="grid size-14 place-items-center rounded-2xl bg-dove-100 text-dove-700 transition-transform duration-500 group-hover:-rotate-12">
                <Phone className="size-6" />
              </span>
              <h3 className="mt-8 font-sans text-sm font-bold tracking-[0.18em] text-plum-400 uppercase">Call us</h3>
              <p className="mt-2 font-display text-[1.65rem] leading-tight text-plum-950">{PHONE}</p>
              <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-semibold text-dove-700">
                Tap to call <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </GlowCard>

            <GlowCard glow="22 178 94" className="flex flex-col rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-linen" data-reveal="up" style={d(90)}>
              <span className="grid size-14 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Mail className="size-6" />
              </span>
              <h3 className="mt-8 font-sans text-sm font-bold tracking-[0.18em] text-plum-400 uppercase">Email</h3>
              <a href={`mailto:${EMAIL}`} className="link-draw mt-2 self-start font-display text-lg leading-snug text-plum-950">
                {EMAIL.split("@")[0]}@
                <wbr />
                {EMAIL.split("@")[1]}
              </a>
              <div className="mt-auto pt-6">
                <CopyEmail />
              </div>
            </GlowCard>

            <GlowCard glow="222 99 113" className="flex flex-col rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-linen" data-reveal="up" style={d(180)}>
              <span className="grid size-14 place-items-center rounded-2xl bg-wine-100 text-wine-600">
                <Clock className="size-6" />
              </span>
              <h3 className="mt-8 font-sans text-sm font-bold tracking-[0.18em] text-plum-400 uppercase">Hours of operation</h3>
              <dl className="mt-3 space-y-1.5 text-plum-800">
                {HOURS.map((h) => (
                  <div key={h.label} className="flex justify-between gap-3">
                    <dt>{h.label}</dt>
                    <dd className="font-semibold text-plum-950">{h.display}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto pt-6">
                <OpenStatus />
              </div>
            </GlowCard>

            <GlowCard
              as="a"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer noopener"
              glow="147 120 181"
              className="group flex flex-col rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-linen"
              data-reveal="up"
              style={d(270)}
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-plum-100 text-plum-700 transition-transform duration-500 group-hover:-translate-y-1">
                <MapPin className="size-6" />
              </span>
              <h3 className="mt-8 font-sans text-sm font-bold tracking-[0.18em] text-plum-400 uppercase">Address</h3>
              <p className="mt-2 font-display text-xl leading-snug text-plum-950">
                {ADDRESS.street},
                <br />
                {ADDRESS.city}
              </p>
              <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-semibold text-plum-700">
                Get directions <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* ───────────── Partners ───────────── */}
      <section className="pb-28 sm:pb-36" aria-labelledby="partners-title">
        <div className="shell">
          <div className="grid items-center gap-10 rounded-[2.5rem] bg-white p-8 ring-1 ring-linen sm:p-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal="up">
              <span className="eyebrow text-dove-700">Partners</span>
              <h2 id="partners-title" className="mt-5 text-4xl leading-[1.05] font-medium sm:text-5xl">
                Working together for <span className="italic text-leaf-700">better care</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <GlowCard tilt={10} className="grid h-48 place-items-center rounded-[2rem] bg-cream p-8 ring-1 ring-linen" data-reveal="up" style={d(100)}>
                <Image src={img.partnerPa} alt="PA Health & Wellness" sizes="300px" className="h-auto max-h-24 w-auto" />
              </GlowCard>
              <GlowCard glow="147 120 181" tilt={10} className="grid h-48 place-items-center rounded-[2rem] bg-cream p-8 ring-1 ring-linen" data-reveal="up" style={d(190)}>
                <Image src={img.partnerUpmc} alt="UPMC Health Plan" sizes="160px" className="h-auto max-h-28 w-auto rounded-xl" />
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
