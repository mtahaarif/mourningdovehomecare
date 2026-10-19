# Mourning Dove Home Care — Website

The marketing website for **Mourning Dove Home Care LLC**, a home care provider in Blue Bell, Pennsylvania, serving Montgomery County and the surrounding areas.

It replaces the company's original Wix site. The content is the same, but the site has been rebuilt as a fast, accessible, search-optimized, fully static Next.js app with an animated design.

| | |
| --- | --- |
| **Production URL** | https://mourningdovehomecare.vercel.app (override with `NEXT_PUBLIC_SITE_URL`) |
| **Framework** | Next.js 16.4 (App Router, Turbopack) · React 19.3 · TypeScript 5 |
| **Styling** | Tailwind CSS 4 (CSS-first config) with a custom design system |
| **Rendering** | Every route is prerendered as static HTML at build time |
| **Hosting target** | Vercel |
| **Runtime dependencies** | `next`, `react`, `react-dom`, `tailwindcss`, `@tailwindcss/postcss`, `lucide-react` (no animation or UI libraries) |

---

## Table of contents

1. [Overview](#1-overview)
2. [Getting started](#2-getting-started)
3. [Environment variables](#3-environment-variables)
4. [Project structure](#4-project-structure)
5. [Architecture](#5-architecture)
6. [Routes and pages](#6-routes-and-pages)
7. [Site chrome (header, footer and global behaviour)](#7-site-chrome-header-footer-and-global-behaviour)
8. [Component reference](#8-component-reference)
9. [Forms and the server action](#9-forms-and-the-server-action)
10. [Content layer (`lib/`)](#10-content-layer-lib)
11. [Design system](#11-design-system)
12. [Animation and interaction system](#12-animation-and-interaction-system)
13. [Page transitions](#13-page-transitions)
14. [Performance](#14-performance)
15. [SEO and discoverability](#15-seo-and-discoverability)
16. [Accessibility](#16-accessibility)
17. [Security](#17-security)
18. [Images and static assets](#18-images-and-static-assets)
19. [Configuration files](#19-configuration-files)
20. [Common editing tasks](#20-common-editing-tasks)
21. [Deployment](#21-deployment)
22. [Browser support and progressive enhancement](#22-browser-support-and-progressive-enhancement)
23. [Known limitations and pre-launch checklist](#23-known-limitations-and-pre-launch-checklist)
24. [Project history](#24-project-history)

---

## 1. Overview

### 1.1 The business

Mourning Dove Home Care LLC provides care to people in their own homes, so they can keep their independence and dignity. The site presents four lines of service:

- **Non-skilled home care:** companionship, meal planning, personal care/hygiene, light housekeeping, support for ADLs and IADLs, medication reminders and respite care.
- **Specialized care:** Alzheimer's or dementia, physical disabilities, and post-operative care.
- **Supported Employment Services:** a partnership with UPMC Health Plan that helps adults with intellectual and developmental disabilities find meaningful jobs in their communities.
- **ODP (Office of Developmental Programs) services:** Community Participation Support, Homemaker and Chore Services, and Companionship, at home and in the community, for people with intellectual and developmental disabilities, including autism.

| Detail | Value |
| --- | --- |
| Office | 589 Skippack Pike #305, Blue Bell, PA 19422 |
| Phone | (855) 540-2645 |
| Email | care@mourningdovehomecare.net |
| Hours (Eastern) | Mon–Thu 9:00am–5:00pm · Fri 9:00am–12:30pm · closed Sat–Sun |
| Social | Instagram, Facebook |
| Partners | PA Health & Wellness, UPMC Health Plan |

### 1.2 What the site does

- Six content pages: Home, About, Services, Testimonials, Join Our Team (employment) and Contact Us.
- A **contact form** and a **job application form**, both handled by a React Server Action.
- A live **"Open now / Closed"** badge, worked out in the office's time zone.
- Search optimization throughout: per-page metadata, canonical URLs, Open Graph and Twitter cards, `LocalBusiness`, `WebSite` and `FAQPage` structured data, a sitemap, `robots.txt` and an `/llms.txt` for AI answer engines.
- A motion design built almost entirely on native CSS: scroll-driven animations, the View Transitions API, `@starting-style`, `content-visibility` and animated `<details>` elements. Browsers without these features still get a complete, working site.
- Strict security headers, including a Content Security Policy.
- Accessibility features: a skip link, landmark structure, descriptive link names, `prefers-reduced-motion` support, native modal dialogs and visible focus styles.

### 1.3 Content provenance

All copy comes from the original Wix site, **with one exception**: the one-line `blurb` on each non-skilled service card (`NON_SKILLED` in [lib/content.ts](lib/content.ts)) was written for the redesign and **should be reviewed by the business owner**. The FAQ answers only restate facts the site already publishes.

---

## 2. Getting started

### 2.1 Prerequisites

- **Node.js ≥ 20.9.0** (required by Next.js 16; the project has been built with Node 24).
- **npm** (the repository ships a `package-lock.json`).

### 2.2 Install and run

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
```

### 2.3 Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `next dev` | Development server with Turbopack and hot reload. |
| `build` | `next build` | Production build. Type-checks, then prerenders every route as static HTML. |
| `start` | `next start` | Serves the production build locally (run `build` first). |
| `lint` | `eslint` | Lints the project with the Next.js Core Web Vitals and TypeScript rule sets. |

A successful build prerenders the following routes (`○` = static):

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /contact-us
├ ○ /employment
├ ○ /icon.png
├ ○ /llms.txt
├ ○ /robots.txt
├ ○ /services
├ ○ /sitemap.xml
└ ○ /testimonials
```

> **Note for AI coding agents:** [AGENTS.md](AGENTS.md) points out that this version of Next.js has breaking changes compared with older releases. Read the bundled guides in `node_modules/next/dist/docs/` before changing framework-level code. `next dev` writes that file automatically.

---

## 3. Environment variables

The project needs **no** environment variables to run locally. All of the variables below are optional.

| Variable | Read in | Effect |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | [lib/site.ts](lib/site.ts) | Canonical origin used for canonical URLs, Open Graph URLs, the sitemap, `robots.txt`, `llms.txt` and JSON-LD. A trailing slash is stripped. Defaults to `https://mourningdovehomecare.vercel.app`. **Set this when a custom domain is attached.** |
| `GOOGLE_SITE_VERIFICATION` | [app/layout.tsx](app/layout.tsx) | When set, outputs `<meta name="google-site-verification">` so Google Search Console can verify a `*.vercel.app` property, where there is no DNS record to edit. Pages are static, so it must be present **at build time**. |
| `VERCEL_ENV` | [lib/site.ts](lib/site.ts), [next.config.ts](next.config.ts) | Set by Vercel. When it is `preview`, every page is marked `noindex, nofollow`, `robots.txt` disallows all crawlers, and the CSP allows the Vercel preview toolbar. |
| `VERCEL` | [next.config.ts](next.config.ts) | Set by Vercel. When present, the CSP adds `upgrade-insecure-requests`. |
| `NODE_ENV` | [next.config.ts](next.config.ts) | In `development`, the CSP adds `'unsafe-eval'`, which React's dev tooling needs. |

**Why the canonical URL is not derived from Vercel's variables.** `SITE_URL` deliberately ignores `VERCEL_PROJECT_PRODUCTION_URL`. Vercel resolves that value per deployment, and one build picked up a retired alias (`mourningdovehomecare-ten.vercel.app`). Every page then pointed its canonical at a host that no longer served the site, and `robots.txt` advertised a sitemap that returned 404.

`.env*` files are git-ignored.

---

## 4. Project structure

```
mourningdovehomecare/
├── app/                                  # Next.js App Router
│   ├── layout.tsx                        # Root layout: <html>, fonts, global metadata, viewport, JSON-LD, "js" flag
│   ├── globals.css                       # Tailwind import, design tokens, utilities, components, animations
│   ├── actions.ts                        # Server Action that receives both forms
│   ├── icon.png                          # Favicon (500×500, served at /icon.png)
│   ├── robots.ts                         # /robots.txt
│   ├── sitemap.ts                        # /sitemap.xml
│   ├── llms.txt/route.ts                 # /llms.txt (static route handler)
│   └── (site)/                           # Route group: pages that share the site chrome
│       ├── layout.tsx                    # Header, Footer, skip link, BackToTop, RevealObserver
│       ├── page.tsx                      # /             Home
│       ├── about/page.tsx                # /about        About
│       ├── services/page.tsx             # /services     Services
│       ├── testimonials/page.tsx         # /testimonials Testimonials
│       ├── employment/page.tsx           # /employment   Join Our Team
│       └── contact-us/page.tsx           # /contact-us   Contact Us
│
├── components/
│   ├── site/                             # Site-wide chrome and behaviour
│   │   ├── Header.tsx                    # Fixed glass header, desktop nav pill, mobile menu dialog   (client)
│   │   ├── Footer.tsx                    # CTA, links, contact, hours, wordmark                       (server)
│   │   ├── BackToTop.tsx                 # Floating "back to top" button                              (client)
│   │   ├── PageTransition.tsx            # <ViewTransition> wrapper + <main id="main">                (server)
│   │   ├── RevealObserver.tsx            # Single IntersectionObserver for [data-reveal]              (client)
│   │   └── TLink.tsx                     # <Link> that tags navigations as forward/back               (client)
│   ├── sections/                         # Larger page sections
│   │   ├── FaqSection.tsx                # FAQ accordion + FAQPage JSON-LD                            (server)
│   │   ├── HorizontalServices.tsx        # Pinned horizontal scroller (home)                          (server)
│   │   ├── OdpCards.tsx                  # Hover/tap-reveal ODP cards (services)                      (client)
│   │   └── TestimonialWall.tsx           # Scrolling review columns + full-review dialog              (client)
│   ├── forms/
│   │   ├── ContactForm.tsx               # Contact form                                               (client)
│   │   ├── EmploymentForm.tsx            # Job application form                                       (client)
│   │   ├── Field.tsx                     # Floating-label <input> and <textarea>
│   │   └── FormSuccess.tsx               # Animated success state
│   └── ui/                               # Small reusable primitives
│       ├── Img.tsx                       # Optimized <img> without the next/image client component    (server)
│       ├── EagerImg.tsx                  # Client re-export of Img for eager / LCP images             (client)
│       ├── GlowCard.tsx                  # Pointer-tracked spotlight card with optional 3D tilt       (client)
│       ├── Marquee.tsx                   # Seamless infinite marquee (horizontal or vertical)         (client)
│       ├── OpenStatus.tsx                # Live "Open now / Closed" badge                             (client)
│       ├── CopyEmail.tsx                 # Copy-to-clipboard button for the email address             (client)
│       ├── WordReveal.tsx                # Word-by-word scroll-scrubbed text reveal                   (server)
│       ├── Logo.tsx                      # Logo symbol + live-text wordmark
│       ├── Icon.tsx                      # Renders a lucide icon from a string name
│       └── BrandIcons.tsx                # Inline Instagram and Facebook SVGs
│
├── lib/                                  # Data, copy and configuration (no UI)
│   ├── site.ts                           # Business facts, URLs, hours, navigation
│   ├── content.ts                        # Page copy, services, FAQs, positions, benefits (server-only by convention)
│   ├── testimonials.ts                   # Google reviews (shared with a client component)
│   ├── odp.ts                            # ODP card copy + images (shared with a client component)
│   ├── images.ts                         # Static image imports map
│   └── seo.ts                            # pageMeta(), OG image, JSON-LD builders, safe serializer
│
├── public/
│   ├── og-image.jpg                      # 1200×630 social share image
│   └── images/                           # Photos, logos, partner badges
│
├── next.config.ts                        # Images, security headers/CSP, redirects
├── eslint.config.mjs                     # ESLint flat config
├── postcss.config.mjs                    # Tailwind v4 PostCSS plugin
├── tsconfig.json                         # TypeScript config, "@/*" path alias
├── AGENTS.md                             # Guidance for AI coding agents (generated by next dev)
└── package.json
```

---

## 5. Architecture

### 5.1 Rendering model

- **Fully static.** None of the pages read request data (cookies, headers or search params), so `next build` prerenders all of them to HTML and the CDN serves them. `/llms.txt` opts in explicitly with `export const dynamic = "force-static"`.
- **No nonce-based CSP.** A nonce would force every page into dynamic rendering, so the CSP uses `'self'` together with `'unsafe-inline'` for scripts instead (see [§17](#17-security)).
- **The only server-side runtime code** is the Server Action in [app/actions.ts](app/actions.ts), which runs when a form is submitted.

### 5.2 Layout hierarchy

```
app/layout.tsx                    <html>, <head> (js flag + LocalBusiness JSON-LD), fonts, <body>
└── app/(site)/layout.tsx         #top anchor, #top-sentinel, skip link, <Header/>, {page}, <Footer/>, <BackToTop/>, <RevealObserver/>
    └── page.tsx                  <PageTransition> → <main id="main"> → page sections
```

- `(site)` is a **route group**. The parentheses keep it out of the URL. It lets the pages share the header and footer without the root layout having to own them, which leaves room for routes that don't use the chrome. `robots.ts`, `sitemap.ts` and `llms.txt` already live outside the group.
- `<PageTransition>` sits in **each page**, not in the layout. Layouts persist across navigations and never enter or exit, so only page content can animate.

### 5.3 Server and client components

Components are **Server Components by default**. A component becomes a client component (`"use client"`) only when it needs browser APIs, state or event handlers:

| Client component | Why it runs on the client |
| --- | --- |
| `Header` | `usePathname` for the active link, plus control of the mobile menu `<dialog>` |
| `TLink` | `usePathname`, to work out the direction of each navigation |
| `BackToTop` | `IntersectionObserver` |
| `RevealObserver` | `IntersectionObserver` + `MutationObserver` |
| `Marquee` | Clones its content in the browser |
| `GlowCard` | Pointer event handlers |
| `OpenStatus` | Reads the current time (`useSyncExternalStore`) |
| `CopyEmail` | Clipboard API |
| `OdpCards` | Tap-to-open state |
| `TestimonialWall` | Review dialog state |
| `ContactForm`, `EmploymentForm` | `useActionState` |
| `EagerImg` | Deliberately client-side; see [§14.2](#142-images) |

### 5.4 Keeping client bundles small

Everything a client component imports ships in its JavaScript. The codebase follows a few rules to keep that small:

- **[lib/content.ts](lib/content.ts) is imported only by Server Components.** It holds most of the site's copy.
- Copy that a client component renders lives in **its own small module**: [lib/testimonials.ts](lib/testimonials.ts) for `TestimonialWall` and [lib/odp.ts](lib/odp.ts) for `OdpCards`.
- **`EmploymentForm` receives `positions` as a prop** rather than importing `lib/content`.
- **Client components import images one by one.** `Logo` (rendered by the client `Header`) imports `logo-symbol.png` directly, and `lib/odp.ts` imports its three photos directly. Going through [lib/images.ts](lib/images.ts) would pull every photo and its blur placeholder into the bundle.
- The **testimonial wall draws its icons once** in an SVG sprite (`<symbol>` + `<use>`). It renders 18 cards, and inlining the icons in each one repeated about 10 KB of markup.
- `Marquee` **clones its duplicate track in the browser**, so the server sends, parses and hydrates the content only once.

### 5.5 Data flow

All business facts (phone, address, hours, URLs and navigation) are defined **once** in [lib/site.ts](lib/site.ts). Pages, the footer, the header, the FAQ answers, the JSON-LD, `llms.txt` and the `OpenStatus` badge all read from it, so a change there updates every place the fact appears.

---

## 6. Routes and pages

Every page exports `metadata` built by `pageMeta()` (see [§15.1](#151-per-page-metadata)) and wraps its content in `<PageTransition>`.

### 6.1 Home — `/`

File: [app/(site)/page.tsx](app/(site)/page.tsx)
Title: *Mourning Dove Home Care | Home Care in Blue Bell, PA*

| Section | What it contains | Techniques |
| --- | --- | --- |
| **Hero** | A badge ("Home care in Montgomery County, PA"), the headline *"Quality Care is the Best Care"* with a hand-drawn underline, lead text, a "Call (855) 540-2645" button, an "Explore our services" link, and three checkmark points (Personalized care · In the comfort of home · Independence & dignity). On the right, a photo composition: the main caregiver photo (preloaded, `fetchPriority="high"`, slowly floating), a glass card with the live `OpenStatus` badge and hours, a tilted inset photo of a senior couple, a "Montgomery County & surrounding areas" glass chip, and a slowly spinning dotted ring. | `aurora` colour fields, `dot-grid`, `.enter` / `.enter-lcp` entrances, `.scribble`, `float` and `spin-slow` keyframes, `EagerImg` |
| **Marquees** | Two marquees running in opposite directions. The first shows service pills with icons (the 7 non-skilled services plus Specialized Care and ODP Services); the second shows large italic value words (Compassionate, High-quality, Personalized, Independence, Dignity, Comfort of home). | `Marquee`, `edge-fade-x`, `defer-render` |
| **Mission** | The mission statement. Its words light up one by one as you scroll, and *compassionate*, *independence* and *dignity* are highlighted with the brand gradient. | `WordReveal` |
| **Approach bento** | *"Care that feels like family"*. A 12-column bento grid: a large photo with a quote overlay that opens with a clip-path as you scroll, two `GlowCard`s ("Tailored to your unique needs" and "A focus on excellence"), and a dark Specialized Care panel with a spinning gradient border, the three specialized-care pills and an "Explore specialized care" link. | `clip-scrub`, `GlowCard`, `spin-border`, `noise`, `data-reveal` |
| **Services track** | *"Care that comes to you"*. Five numbered service cards (01–05) from `SERVICE_TRACK`. Each links to the matching anchor on `/services`. | `HorizontalServices` (pinned horizontal scroll) |
| **Testimonials** | *"Kind words from families"*. A marquee of review excerpts with initials avatars, and a "Read all reviews" link. | `Marquee` |

### 6.2 About — `/about`

File: [app/(site)/about/page.tsx](app/(site)/about/page.tsx)
Title: *About Mourning Dove Home Care | Montgomery County, PA*

| Section | What it contains | Techniques |
| --- | --- | --- |
| **Hero** | *"Home care rooted in Montgomery County, Pa."*, an introduction, an "Our services" link and a phone button. On the right, three portrait photos fanned out. They spread further apart on hover. The first loads eagerly as the likely LCP image; the other two load lazily. | `.fan`, `EagerImg` / `Img`, staggered `.enter` |
| **Our commitment** | A sticky left column (heading plus a parallax photo, shown on desktop only), and on the right a numbered vertical **timeline** of the five commitments from `COMMITMENT`. As you scroll, the timeline line fills with a gradient, each dot turns from white to plum, and each item slides in. | `lg:sticky`, `.parallax`, `.tl` / `.tl-fill` / `.tl-dot` / `.tl-item` scroll timelines |
| **Where we serve** | A dark section: *"Servicing Montgomery County and the surrounding areas"*, a glass address card linking to Google Maps, and a decorative animated **radar** (concentric rings, three staggered pings, a rotating conic sweep and a central "Montgomery County, Pennsylvania" pin). | `aurora`, `noise`, `glass-dark`, `ping-soft`, conic gradient |
| **FAQ** | *"About our care"*: four questions (`ABOUT_FAQ`) with FAQPage JSON-LD. | `FaqSection` |

### 6.3 Services — `/services`

File: [app/(site)/services/page.tsx](app/(site)/services/page.tsx)
Title: *Home Care & ODP Services | Mourning Dove Home Care*

| Section (anchor) | What it contains | Techniques |
| --- | --- | --- |
| **Hero** | A **Ken Burns crossfade** between three photos (the first is preloaded as the LCP image), the headline *"Care at home & in the community"*, and an "On this page" `<nav>` of glass jump links: Home care, Specialized care, Supported employment, ODP services, Eligible conditions. | `.kb` slideshow, `glass-dark` |
| **Non-skilled home care** (`#home-care`) | A sticky sidebar with the heading, intro and an animated "Please note" `<details>` disclosure (`SERVICE_NOTE`, the list of excluded tasks). On the right, **sticky stacking cards**: the seven services, each tinted differently, with an icon, an "01 / 07" counter, a large watermark numeral and the blurb. As you scroll, earlier cards shrink and darken behind later ones. | `.stack` / `.stack-card` scroll timelines, `.disclosure` |
| **Specialized care** (`#specialized`) | A white panel with a spinning gradient border: the specialized-care sentence and three tilting `GlowCard`s (Alzheimer's or dementia · Physical disabilities · Post-operative care). | `spin-border`, `dot-grid`, `GlowCard tilt` |
| **Supported employment** (`#supported-employment`) | A gardening photo that opens with a clip-path as you scroll, a glass "Partnered with UPMC Health Plan" badge, the `SUPPORTED_EMPLOYMENT` copy and an "Ask us about it" call button. | `clip-scrub`, `glass` |
| **ODP services** (`#odp`) | A dark section with the ODP intro and three `OdpCards` (Specialized Companionship · At Home & In the Community · Eligibility). | `OdpCards`, `aurora`, `noise` |
| **Eligible conditions** (`#eligibility`) | Nine glowing glass pills listing qualifying conditions (`CONDITIONS`), each revealed in turn as you scroll. | `data-reveal="scale"` with stepped `--d` delays |

### 6.4 Testimonials — `/testimonials`

File: [app/(site)/testimonials/page.tsx](app/(site)/testimonials/page.tsx)
Title: *Client Testimonials | Mourning Dove Home Care*

| Section | What it contains | Techniques |
| --- | --- | --- |
| **Hero** | A "Google Reviews" badge, *"See What People Are Saying"*, and two large floating decorative quote marks. | `aurora`, `float` |
| **Spotlight** | A featured excerpt from Elijah Smith's review in a dark panel with a spinning border. The quote is revealed word by word as you scroll, with *family*, *peace* and *mind* highlighted. | `spin-border`, `WordReveal` |
| **Review wall** | *"Every review, in their words"*. On desktop, three vertically scrolling columns at different speeds; the middle one runs the opposite way. On mobile, a horizontal marquee. Reviews longer than 220 characters get a "Read more" button that opens the full review in a modal `<dialog>`. | `TestimonialWall` |
| **Photo strip** | Three photos, each with its own parallax drift. Marked `aria-hidden` because it is decorative. | `.parallax` with per-photo `--px-from` / `--px-to` |

### 6.5 Join Our Team — `/employment`

File: [app/(site)/employment/page.tsx](app/(site)/employment/page.tsx)
Title: *Home Care Jobs in Montgomery County, PA | Mourning Dove*

| Section (anchor) | What it contains | Techniques |
| --- | --- | --- |
| **Hero** | A dark hero: *"Join Our Team!"*, the recruiting copy, an "Apply now" button (jumps to `#apply`) and a phone button. On the right, two tilted photos and a floating "We're hiring · 5 roles open" glass card with a pulsing dot. | `aurora`, `noise`, `EagerImg` |
| **Positions marquee** | The five open positions in large type (Home Care Aide, Registered Nurse, Care Coordinator, Scheduler, Office Assistant). | `Marquee` |
| **Why Choose Us?** | Four tilting benefit `GlowCard`s (Competitive Pay · Ability to choose jobs · Professional Growth and Training · 401k Plans Available), each with its own glow and icon colour, plus a dashed "(more benefits soon to come)" note. | `GlowCard tilt`, staggered reveals |
| **Application** (`#apply`) | A sticky left column (heading plus a parallax photo with a quote caption), and on the right the `EmploymentForm` in a glass panel. | `.parallax`, `glass` |
| **FAQ** | *"Working with us"*: four questions (`EMPLOYMENT_FAQ`). | `FaqSection` |

### 6.6 Contact Us — `/contact-us`

File: [app/(site)/contact-us/page.tsx](app/(site)/contact-us/page.tsx)
Title: *Contact Mourning Dove Home Care | Blue Bell, PA*

| Section | What it contains | Techniques |
| --- | --- | --- |
| **Hero** | A full-bleed preloaded photo under a plum gradient, *"Contact Us"*, the advisors copy and the phone number. On the right, the `ContactForm` in a frosted glass panel. | `EagerImg`, `glass` |
| **Four ways to reach us** | Four `GlowCard`s: **Call us** (the whole card is a `tel:` link), **Email** (`mailto:` link plus `CopyEmail`; a `<wbr>` lets the address break after the `@`), **Office hours** (`<dl>` of hours plus `OpenStatus`), and **Address** (the whole card links to Google Maps). | `GlowCard as="a"` |
| **Partners** | *"Working together for better care"*: the PA Health & Wellness and UPMC Health Plan logos on tilting cards. | `GlowCard tilt` |
| **FAQ** | *"Before you call"*: five questions (`CONTACT_FAQ`). | `FaqSection` |

### 6.7 Non-page routes

| Route | Source | Description |
| --- | --- | --- |
| `/robots.txt` | [app/robots.ts](app/robots.ts) | See [§15.5](#155-robotstxt). |
| `/sitemap.xml` | [app/sitemap.ts](app/sitemap.ts) | The six page URLs, each with `lastModified: 2026-10-19`. |
| `/llms.txt` | [app/llms.txt/route.ts](app/llms.txt/route.ts) | Plain-text summary of the business for AI answer engines. See [§15.6](#156-llmstxt). |
| `/icon.png` | [app/icon.png](app/icon.png) | Favicon. Next.js generates the `<link rel="icon">` from this file convention. |
| `/fullscreen-page-1` | [next.config.ts](next.config.ts) | **301 redirect to `/`.** The old Wix site exposed an empty Pro Gallery viewer at this URL. |
| `/_not-found` | Next.js default | No custom 404 page has been built. |

---

## 7. Site chrome (header, footer and global behaviour)

These are rendered by [app/(site)/layout.tsx](app/(site)/layout.tsx) around every page.

### 7.1 Skip link and anchors

- **"Skip to content"** link: visually hidden until it receives keyboard focus, then fixed at the top left. It targets `#main`, the `<main>` that `PageTransition` renders.
- `<div id="top" />` is the target of the back-to-top button.
- `<div id="top-sentinel">` is an invisible 480 px strip at the top of the page. `BackToTop` watches it.

### 7.2 Header — [components/site/Header.tsx](components/site/Header.tsx)

- **Fixed, pill-shaped glass bar** (`backdrop-blur-xl`, semi-transparent white). A solid white overlay fades in over the first 140 px of scrolling, driven by a CSS scroll timeline (`.header-bar::before`, `header-settle`). It animates opacity only, so the work stays on the compositor. Browsers without scroll timelines show the overlay all the time.
- **Reading progress bar:** a 3 px gradient line along the top that grows with page scroll (`.scroll-progress`, `animation-timeline: scroll(root)`).
- **Logo** (loaded eagerly) linking home, with the accessible name "Mourning Dove Home Care — home".
- **Desktop navigation** (≥ `lg`): Home, About, Services, Testimonials, Join Our Team. The current page gets `aria-current="page"` and a white **pill** wrapped in `<ViewTransition name="nav-pill" share="pill">`. When you navigate, the pill **morphs** from the old link to the new one.
- **Phone link** (≥ `xl`) and a **"Contact Us"** button (≥ `sm`). The button turns wine-coloured while you are on `/contact-us`.
- **Mobile controls** (< `sm` / < `lg`): a round phone button and a menu button.
- **Mobile menu:** a full-screen native `<dialog>` opened with `showModal()`. It **expands as a circle from the menu button** (`clip-path: circle()` with `@starting-style`), has its own aurora background and a numbered list of all six nav links in large type that slide in one after another (`.sheet-item`, `--i`). The bottom shows the `OpenStatus` badge, a call button and an email button. It closes with the × button, a click on the backdrop, the Escape key (native dialog behaviour) or a nav link.
- `view-transition-name: site-header` keeps the header out of page-transition animations ([§13](#13-page-transitions)).

**Descriptive link names:** each `NAV` entry has an `sr` pair of visually hidden words placed before and after the visible label. For example, "Services" is announced and indexed as "Home care Services", and "About" as "About Mourning Dove". Link names stay descriptive for screen readers and search engines while still containing the visible label, which WCAG 2.5.3 "Label in Name" requires.

### 7.3 Footer — [components/site/Footer.tsx](components/site/Footer.tsx)

A dark plum footer with three drifting aurora fields and a noise texture, deferred with `defer-render`:

1. **Closing call to action:** *"Quality care is the best care."*, the advisors copy, a "Call" button and a "Send a message" button.
2. **Details grid:**
   - The logo mark on a cream tile, a brand statement, and Instagram and Facebook buttons. These open in a new tab and fill with the brand's colour on hover (Instagram gradient, Facebook blue).
   - **Explore:** keyword-rich links ("Home care in Montgomery County", "Home care & ODP services", "Careers: join our team", and so on) that give search engines descriptive anchor text.
   - **Get in touch:** phone, email (wraps anywhere on narrow screens) and the address with "Get directions" (Google Maps).
   - **Hours of operation:** a `<dl>` of hours, "Sat – Sun Closed", and the `OpenStatus` badge.
3. **Giant outlined "Mourning Dove" wordmark:** text with a transparent fill and a 1 px stroke at 14.2vw. Decorative and `aria-hidden`.
4. **Bottom bar:** "© {current year} Mourning Dove Home Care LLC. All Rights Reserved." and "Proudly serving Montgomery County and the surrounding areas." The year is set at build time.

### 7.4 Back to top — [components/site/BackToTop.tsx](components/site/BackToTop.tsx)

A round floating button in the bottom-right corner. An `IntersectionObserver` on `#top-sentinel` shows it once the first 480 px has scrolled out of view. The observer fires only when visibility changes; the scroll-timeline version it replaced delayed first paint by about 160 ms at 4× CPU throttling. While hidden it has `tabIndex={-1}` and `pointer-events: none`, so keyboard users can't tab to it.

### 7.5 Reveal observer — [components/site/RevealObserver.tsx](components/site/RevealObserver.tsx)

**One** `IntersectionObserver` handles the whole page:

- Every element with `data-reveal` gets the class `is-in` the first time it enters the viewport (`rootMargin: 0px 0px -8% 0px`), and is then unobserved. Reveals happen once.
- A `MutationObserver` rescans for new `[data-reveal]` elements, **batched to at most one scan per animation frame**. This picks up content added by client navigation or by late-rendering components.
- It re-runs whenever `pathname` changes.

---

## 8. Component reference

### 8.1 UI primitives (`components/ui`)

#### `Img` — [components/ui/Img.tsx](components/ui/Img.tsx)

An optimized image rendered as a **plain `<img>`**, so there is no `next/image` client component to hydrate. It calls `getImageProps()` to get the same optimized `srcset` and `sizes` that `next/image` produces, then:

- Sets the plain `src` fallback, which only clients without `srcset` support read (mostly crawlers), to the **largest candidate ≤ 1080 px** rather than the very largest one. For density descriptors (`1x`, `2x`) it uses the `1x` source.
- Drops `next/image`'s inline `color: transparent`, which hides alt text while the image loads, but keeps any styles the caller passes.
- `preload` marks a likely LCP image: it loads eagerly with `fetchPriority="high"`, and React adds `<link rel="preload">` to the document head.
- Accepts every `next/image` `ImageProps`, including static imports, which provide intrinsic dimensions and blur placeholders.

#### `EagerImg` — [components/ui/EagerImg.tsx](components/ui/EagerImg.tsx)

A one-line `"use client"` re-export of `Img`, used for heroes and other eager, above-the-fold images. **Why:** React's RSC renderer turns every eager `<img>` in a Server Component into a preload hint inside the page's RSC payload, and the router acts on those hints when it **prefetches** a link. Every page that linked to the hero's page would then download its hero photo. Rendered from a client component, the preload comes only from the page's own HTML. Lazy images stay on `Img`.

#### `GlowCard` — [components/ui/GlowCard.tsx](components/ui/GlowCard.tsx)

A card with a **pointer-following radial spotlight** and a **glowing border** that follows the pointer. Optionally it also tilts in 3D.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `ElementType` | `"div"` | Element to render, e.g. `"a"` for a link card. |
| `glow` | `"dove" \| "leaf" \| "wine" \| "plum"` | `"dove"` | Spotlight colour (`.glow-*` classes). |
| `tilt` | `number` | `0` | Maximum tilt in degrees; `0` turns tilt off. |
| `...rest` | HTML attributes | — | Passed through (`href`, `target`, `data-reveal`, …). |

`onPointerMove` writes `--mx` / `--my` (and `--rx` / `--ry` when tilting) as CSS custom properties, and the effect itself is pure CSS (`::before` spotlight, `::after` masked border). `onPointerLeave` resets the tilt. The glow also appears on `:focus-within`, so keyboard users see it too.

#### `Marquee` — [components/ui/Marquee.tsx](components/ui/Marquee.tsx)

A seamless infinite marquee. Each track animates by `-100%` and an identical copy follows it.

| Prop | Description |
| --- | --- |
| `reverse` | Runs the animation in the opposite direction. |
| `vertical` | Scrolls vertically (`.marquee-v`). |
| `className` | Sets speed and spacing, e.g. `[--speed:50s] [--gap:2.5rem]`. |

- The duplicate track is **filled in the browser** (`cloneNode`) after hydration. It starts off-screen, so the fill is never visible.
- The copy is `aria-hidden` and `inert`, so screen readers and the keyboard only meet the content once.
- **Pauses** on hover and `:focus-within`.
- With **reduced motion**, the marquee becomes a static, horizontally scrollable row and the copy is hidden.

#### `OpenStatus` — [components/ui/OpenStatus.tsx](components/ui/OpenStatus.tsx)

A live office-status badge, computed in **America/New_York** whatever the visitor's own time zone:

- *"Open now · closes 5:00pm"*, with a pinging green dot, during office hours.
- Otherwise *"Closed · opens today 9:00am"*, *"… tomorrow …"* or *"… Mon 9:00am"*, found by scanning the coming week for the next opening.
- Uses `useSyncExternalStore`, re-checking every 30 seconds. The **server snapshot is `null`** and renders a neutral "Office hours" label with a grey dot, so the static HTML never shows a stale status and hydration never mismatches.
- The `Intl.DateTimeFormat` instance is built once and cached, because React reads the snapshot on every render.
- `dark` gives a variant for dark backgrounds.
- Hours come from `HOURS` in [lib/site.ts](lib/site.ts).

#### `CopyEmail` — [components/ui/CopyEmail.tsx](components/ui/CopyEmail.tsx)

A button that copies the office email with `navigator.clipboard.writeText` and shows "Copied to clipboard" for 2.2 s. Its `aria-live="polite"` region announces the change. If the clipboard is unavailable, it falls back to opening a `mailto:` link.

#### `WordReveal` — [components/ui/WordReveal.tsx](components/ui/WordReveal.tsx)

Splits text into words. Each word gets `--i` (its index) and the container gets `--n` (the word count). In CSS, each word fades from 16% to 100% opacity over **its own slice of the container's view timeline**, so the words light up one after another as the paragraph scrolls through the viewport.

| Prop | Description |
| --- | --- |
| `text` | The text to reveal. |
| `as` | Wrapper element (default `p`). |
| `accent` | Words (exact match, punctuation stripped) to fill with the brand gradient. The gradient sits on an inner span so its animation doesn't override the reveal animation. |

It is a Server Component with no JavaScript. Without scroll-timeline support, or with reduced motion, the text renders fully visible.

#### `Logo` — [components/ui/Logo.tsx](components/ui/Logo.tsx)

The house-and-dove symbol (`logo-symbol.png`) next to a **live-text wordmark** ("Mourning Dove" in Fraunces and "HOME CARE LLC" letter-spaced), so the wordmark stays sharp and costs no image bytes. `light` gives colours for dark backgrounds; `eager` loads the symbol eagerly, which the header uses.

#### `Icon` — [components/ui/Icon.tsx](components/ui/Icon.tsx)

Renders a lucide icon from a **string name**, so content data such as `NON_SKILLED` and `CAREER_BENEFITS` can refer to icons without importing components. The registry holds AlarmClock, CalendarCheck, Coffee, Footprints, GraduationCap, HeartHandshake, PiggyBank, ShowerHead, Soup, Sparkles and Wallet. Add an icon here before using its name in content.

#### `BrandIcons` — [components/ui/BrandIcons.tsx](components/ui/BrandIcons.tsx)

Inline `InstagramIcon` and `FacebookIcon` SVGs (`aria-hidden`), used in the footer.

### 8.2 Sections (`components/sections`)

#### `FaqSection` — [components/sections/FaqSection.tsx](components/sections/FaqSection.tsx)

A two-column FAQ: a heading on the left and an accordion of animated `<details>` on the right.

- Props: `id` (for `aria-labelledby`), `title`, `faqs: Faq[]` and an optional `className` for spacing.
- Outputs a **`FAQPage` JSON-LD** `<script>` built from the same data.
- Each question is an `<h3>` inside `<summary>`. Answers can end with an internal link (`f.link`), which supports internal linking for SEO.
- **The first item starts open.** This shows visitors that the rows expand, and keeps its answer visible in the rendered page.
- Used on About (`about-faq`), Employment (`careers-faq`) and Contact (`contact-faq`).

#### `HorizontalServices` — [components/sections/HorizontalServices.tsx](components/sections/HorizontalServices.tsx)

The home page's *"Care that comes to you"* track of five service cards.

- **On wide screens (≥ 1024 px) in browsers with scroll-driven animations:** the section is made taller by the track's overflow distance, its inner panel **pins** (`position: sticky; height: 100svh`), and the track slides sideways as you scroll down. A gradient progress bar fills in step.
- **Everywhere else:** a swipeable `scroll-snap` carousel with a hidden scrollbar.
- All of the geometry is CSS math on `--n` (the card count), `--hs-card`, `--hs-gap` and `--hs-pad`. No JavaScript measures anything.
- On hover or keyboard focus, each card's photo zooms in, its description expands (a `grid-template-rows: 0fr → 1fr` transition), the arrow rotates and the "Learn more" rule lengthens. Below `lg` the description is always shown.

#### `OdpCards` — [components/sections/OdpCards.tsx](components/sections/OdpCards.tsx)

Three full-height photo cards. A blurred panel peeks 7.5 rem above the bottom edge; on hover or focus it slides up to show the full text, while the photo zooms and saturates and the + icon turns into ×. **On touch screens, tapping the button toggles the card** (`data-open`, `aria-expanded`). Only one card can be open at a time.

#### `TestimonialWall` — [components/sections/TestimonialWall.tsx](components/sections/TestimonialWall.tsx)

- **Desktop:** three `Marquee vertical` columns inside a 52 rem frame with faded top and bottom edges. Column speeds differ (58 s, 72 s and 64 s) so the columns drift against each other, the middle column runs in reverse, and each column cycles through a different order of reviews so neighbouring cards never match.
- **Mobile and tablet:** one horizontal marquee of all six reviews.
- Cards clamp to six lines. Reviews longer than 220 characters show **"Read more"**, which opens a native modal `<dialog>` with the full review in paragraphs, the reviewer's initial and a "Google Review" tag. It closes with the × button, Escape or a click on the backdrop. The dialog's accessible name is "Review from {name}".
- An **SVG sprite** (`#review-quote`, `#review-more`) supplies the icons for all 18 rendered cards.

### 8.3 Forms (`components/forms`)

See [§9](#9-forms-and-the-server-action) for behaviour. Building blocks:

- **`Field` / `TextArea`** ([Field.tsx](components/forms/Field.tsx)): inputs with **floating labels**. The label rests inside the field and moves up on focus or once a value is entered, using a CSS-only `peer-placeholder-shown` technique with `placeholder=" "`. Required fields show a red asterisk. Date inputs keep the label raised, because browsers always draw their own placeholder in them. Each control's `id` is `f-{name}`, so its `<label htmlFor>` is linked to it.
- **`FormSuccess`** ([FormSuccess.tsx](components/forms/FormSuccess.tsx)): an animated confirmation (`role="status"`) with a green check that pings twice, a title, a message and a "Send another" button.

---

## 9. Forms and the server action

### 9.1 Contact form — [components/forms/ContactForm.tsx](components/forms/ContactForm.tsx)

| Field | Name | Type | Required |
| --- | --- | --- | --- |
| First name | `firstName` | text (`autocomplete=given-name`) | — |
| Email | `email` | email (`autocomplete=email`) | ✔ |
| Subject | `subject` | text | — |
| Write a message | `message` | textarea (5 rows) | — |

On success: *"Thanks for submitting! One of our advisors will be in touch with you shortly."*

### 9.2 Employment application — [components/forms/EmploymentForm.tsx](components/forms/EmploymentForm.tsx)

| Field | Name | Type | Required |
| --- | --- | --- | --- |
| First Name | `firstName` | text | — |
| Last Name | `lastName` | text | — |
| Date of Birth | `dateOfBirth` | date | — |
| Email Address | `email` | email | ✔ |
| Phone | `phone` | tel | ✔ |
| Available Start Date | `startDate` | date | — |
| Position Applying For | `position` | radio group styled as pills (5 positions) | — |

The position radios are visually hidden (`sr-only`) and styled through their `peer` pill. That keeps native keyboard behaviour: arrow keys move between options, and a focus ring shows on `focus-visible`.

On success: *"Thanks for submitting! We've received your application and will reach out soon."*

### 9.3 How submission works

```
<form action={action}>  ──►  useActionState(submitForm.bind(null, "contact" | "employment"), { ok: false })
                                    │
                                    ▼
                         app/actions.ts  ("use server")
                         submitForm(form, prevState, formData): Promise<FormState>
```

- Both forms use **React 19's `useActionState`** with a Server Action, so they also submit with **progressive enhancement**, before or without hydration.
- While the action is pending, the submit button is disabled and shows a spinner with "Sending…" / "Submitting…".
- Errors are shown in a `role="alert"` message.
- **"Send another"** resets the form by changing the `key` on the inner component, which remounts it with fresh state.

**Server-side validation** in [app/actions.ts](app/actions.ts):

1. Converts every field to a trimmed string.
2. Checks `email` against `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` and otherwise returns *"Please enter a valid email address."*
3. For `employment`, requires `phone` and otherwise returns *"Please enter a phone number."*
4. Logs the submission with `console.info("[contact form submission]", fields)` and returns `{ ok: true }`.

> ⚠️ **Submissions are not delivered anywhere yet.** They only appear in the server logs (Vercel function logs). The original site stored them in Wix Forms. Before launch, connect `submitForm` to email or a CRM, for example Resend, SendGrid or a database insert. See [§23](#23-known-limitations-and-pre-launch-checklist).

The CSP's `form-action 'self'` only allows forms to post to this site's own origin.

---

## 10. Content layer (`lib/`)

| Module | Exports | Imported by |
| --- | --- | --- |
| [lib/site.ts](lib/site.ts) | `SITE_URL`, `IS_PREVIEW`, `BRAND`, `SITE_NAME`, `PHONE`, `PHONE_HREF`, `PHONE_E164`, `EMAIL`, `INSTAGRAM`, `FACEBOOK`, `ADDRESS`, `FULL_ADDRESS`, `MAP_URL`, `SERVICE_AREA`, `HOURS`, `NAV` | Everything |
| [lib/content.ts](lib/content.ts) | `MISSION`, `NON_SKILLED`, `SPECIALIZED`, `SPECIALIZED_TEXT`, `SERVICE_NOTE`, `SUPPORTED_EMPLOYMENT`, `ODP_INTRO`, `CONDITIONS`, `SERVICE_TRACK`, `CAREER_BENEFITS`, `POSITIONS`, `COMMITMENT`, `ABOUT_FAQ`, `EMPLOYMENT_FAQ`, `CONTACT_FAQ` | Server Components and `llms.txt` only |
| [lib/testimonials.ts](lib/testimonials.ts) | `Testimonial` type, `TESTIMONIALS` (6 Google reviews: `name`, `excerpt`, `paragraphs[]`) | Home page, `TestimonialWall` |
| [lib/odp.ts](lib/odp.ts) | `ODP_CARDS` (3 cards: `title`, `image`, `alt`, `body`) | `OdpCards` |
| [lib/images.ts](lib/images.ts) | `img`, a map of static image imports | Server Components |
| [lib/seo.ts](lib/seo.ts) | `OG_IMAGE`, `pageMeta()`, `businessJsonLd`, `Faq` type, `faqJsonLd()`, `jsonLdHtml()` | Layouts, pages, `FaqSection` |

Notes:

- `HOURS` uses JavaScript day numbers (0 = Sunday) and 24-hour `open` / `close` strings, plus a human-readable `display` label. `OpenStatus`, the footer, the contact page, `llms.txt` and (separately) the JSON-LD `openingHoursSpecification` all use these hours.
- **`NAV` order matters.** It sets the order of the menus *and* the direction of page transitions ([§13](#13-page-transitions)).
- `MAP_URL` passes the address through `encodeURIComponent`, so `#305` becomes `%23305`. A raw `#` would end the query string at "Pike".
- `PHONE_E164` (`+18555402645`) is used in structured data; `PHONE_HREF` (`tel:8555402645`) is used for links.

---

## 11. Design system

All tokens and styles live in [app/globals.css](app/globals.css) and use Tailwind CSS v4's CSS-first configuration (`@theme`, `@utility` and `@layer`). There is no `tailwind.config.js`.

### 11.1 Colour palette

The brand colours come from the logo (dove blue, house green) and the original site (maroon wordmark, deep plum), set on a warm cream base.

| Token family | Role | Key shades |
| --- | --- | --- |
| `ink` | Body text | `#1d1528` |
| `cream` | Page background, theme colour | `#fbf8f3` |
| `sand` | Alternate section background | `#f3ece2` |
| `linen` | Borders, rings, dividers | `#e8dece` |
| `plum-50 … 950` | Primary UI colour: text, dark sections, primary buttons | 900 `#281a39`, 950 `#170f22` |
| `wine-50 … 900` | Accent: eyebrows, emphasis, application button | 600 `#a51f33`, 700 `#8b0000` (original wordmark maroon) |
| `dove-50 … 900` | Brand blue: links, focus, gradients | 500 `#3399d6` |
| `leaf-50 … 900` | Brand green: success, open status, gradients | 500 `#16b25e` |

### 11.2 Typography

Loaded with `next/font/google`, which self-hosts the files so there are no requests to third-party font servers:

- **Fraunces** (`--font-display`): headings `h1`–`h4`, display copy and the wordmark. Normal and italic. **Only the weight axis is loaded**: the extra SOFT and opsz axes roughly doubled the font payload on the critical path for a barely visible difference.
- **Figtree** (`--font-sans`): body text and UI.

Headings use `letter-spacing: -0.02em` and `text-wrap: balance`. Paragraphs use `text-wrap: pretty`.

### 11.3 Other tokens

| Token | Value |
| --- | --- |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)`, the main easing for almost all motion |
| `--ease-in-out-quart` | `cubic-bezier(0.76, 0, 0.24, 1)`, used for the mobile menu |
| `--shadow-soft` | Subtle two-layer card shadow |
| `--shadow-lift` | Deep shadow for raised surfaces and photos |
| `--animate-spin-slow` | 14 s linear spin |

### 11.4 Base styles

- `overflow-x: clip` on `html` and `body`. This prevents horizontal scroll *without* creating a scroll container, so `position: sticky` keeps working (it would break with `hidden`).
- Smooth scrolling with `scroll-padding-top: 6.5rem`, so jump links don't land under the fixed header.
- Custom `::selection` colours and a 2 px dove-blue `:focus-visible` outline.
- A global `prefers-reduced-motion: reduce` override that cuts all animations and transitions to effectively zero.

### 11.5 Custom utilities (`@utility`)

| Utility | Description |
| --- | --- |
| `shell` | Centered content container: max width 80 rem, fluid side padding `clamp(1.25rem, 4vw, 2.5rem)` |
| `eyebrow` | Small uppercase label (0.22em tracking) with a 2 rem rule before it |
| `text-gradient` | Dove → leaf → dove gradient text, with padding that keeps italic overhangs from being clipped |
| `text-gradient-warm` | Wine → peach gradient text |
| `glass` | Light frosted glass (62% white, 18 px blur, saturate) |
| `glass-dark` | Dark frosted glass |
| `dot-grid` | 22 px dot pattern faded out with a radial mask |
| `noise` | SVG `feTurbulence` grain overlay (6% opacity, overlay blend) |
| `edge-fade-x` / `edge-fade-y` | Masks that fade the edges of marquees |
| `defer-render` | `content-visibility: auto` with `contain-intrinsic-block-size: auto var(--defer-h)`; see [§14.3](#143-rendering-work) |

### 11.6 Component classes (`@layer components`)

- **Buttons:** `.btn` (pill, 3.25 rem tall, a light sweep on hover, a press-down scale on click, `.btn-icon` and `.btn-arrow` motion), with the variants `.btn-primary` (plum), `.btn-wine` (wine gradient, used for the application), `.btn-ghost` (white with a linen border), `.btn-light` (white, for dark backgrounds) and `.btn-outline-light` (translucent outline, for dark backgrounds).
- **Links:** `.link-draw` draws an underline from left to right on hover.
- **Decorative:** `.aurora` (blurred drifting colour fields, each configured with `--c` colour, `--s` size, `--o` opacity and `--delay`), `.spin-border` (a rotating conic gradient border), `.scribble` (a hand-drawn green SVG underline that draws in after 0.8 s).

### 11.7 Generating classes for computed values

Tailwind only generates classes that it finds written out in full in the source. Loops in the code build classes such as `[--i:3]`, `[--n:7]` and `[--d:120ms]` at runtime, so `globals.css` lists every value they can produce:

```css
@source inline("[--i:{0..39}]");
@source inline("[--n:{1..40}]");
@source inline("[--d:{0..500..10}ms]");
```

If a loop ever needs an index above 39, a count above 40, or a delay above 500 ms or off the 10 ms grid, **extend these ranges**. Otherwise the class won't exist.

---

## 12. Animation and interaction system

Motion is built almost entirely on native CSS. JavaScript is used only to add or remove a class or to write pointer coordinates. Every effect falls back to a static, fully usable layout.

### 12.1 The `js` flag

[app/layout.tsx](app/layout.tsx) puts an inline script in `<head>` that runs before first paint:

```js
document.documentElement.classList.add('js')
```

Reveal styles are scoped to `.js [data-reveal]`, so content is hidden for its reveal **only when JavaScript is available to reveal it again**. With JavaScript off, everything is visible. `<html>` has `suppressHydrationWarning` because this class is added before React hydrates.

### 12.2 Catalogue of effects

| Effect | Where | Mechanism | Fallback |
| --- | --- | --- | --- |
| **Hero entrance** (`.enter`) | All heroes | `rise-in` keyframe (fade + rise), staggered with `--d` | Reduced motion: instant |
| **LCP-safe entrance** (`.enter-lcp`) | Hero headings, lead text, hero photos | `rise-soft` keyframe: rise only, **no opacity change**, so the element is painted on the first frame and LCP isn't delayed | — |
| **Scroll reveals** (`data-reveal="up" \| "scale"`) | Section headings, cards, pills | `RevealObserver` adds `.is-in`, and CSS transitions opacity, translate, scale and clip-path with the `--d` delay | No JS: visible immediately |
| **Reading progress bar** | Header | `animation-timeline: scroll(root)` | Hidden |
| **Header settle** | Header | Scroll timeline, range 0–140 px | Solid overlay always shown |
| **Aurora** | Heroes, dark sections, footer, mobile menu | `drift` keyframe (22 s) on blurred radial gradients | Reduced motion: still |
| **Floating elements** | Hero cards, photos, quote marks | `float` keyframe (8–14 s, offset delays) | Reduced motion: still |
| **Word-by-word reveal** | Home mission, testimonials spotlight | Per-word `animation-range` slices of a named `view-timeline` | Fully visible text |
| **Clip-path scrub** (`.clip-scrub`) | Home bento photo, supported employment photo | `clip-open` keyframe on `view()` timeline, `entry 0% → cover 45%` | Unclipped image |
| **Parallax** (`.parallax`) | About, employment and testimonials photos | `translate` between `--px-from` and `--px-to` on `view()` timeline | Static image |
| **Sticky stacking cards** | Services, non-skilled care | `position: sticky` with an offset per card; earlier cards scale to `1 - (n-1-i) × 0.035` and darken under a shade on a shared `--stack` timeline | Sticky stack without scaling |
| **Pinned horizontal scroll** | Home services track | Section height plus overflow distance, a sticky pin, and `hscroll` on the `--hs` timeline | Scroll-snap carousel |
| **Timeline fill** | About, commitment | `.tl-fill` scaleY, `.tl-dot` colour change, `.tl-item` slide-in on view timelines | Static timeline |
| **Ken Burns crossfade** | Services hero | `kenburns` keyframe (18 s cycle, 6 s per slide; first slide starts at −1.5 s so it is visible from the first frame) | Reduced motion: first slide shown, static |
| **Marquees** | Home, employment, testimonials | `marquee-x` / `marquee-y` with a cloned second track | Reduced motion: scrollable row |
| **Glow cards** | Bento, contact, benefits, specialized, partners | Pointer-tracked custom properties plus a masked radial border | No glow on touch, shown on focus |
| **3D tilt** | Benefits, specialized, partners | `perspective()` with `rotateX/Y` from the pointer position | Flat |
| **Spinning border** | Specialized panels, testimonial spotlight | Rotating oversized conic gradient behind a 1.5 px gap | — |
| **Fanned photos** | About hero | `.fan` custom properties; spread wider on hover | — |
| **Reveal cards** | ODP cards | Panel `translate`, body opacity, image scale/saturate on hover, focus or `data-open` | Tap toggle |
| **Animated `<details>`** | "Please note", FAQs | `::details-content` `block-size` transition with `interpolate-size: allow-keywords` | Instant open/close |
| **Modal dialog** | Review dialog | `opacity`, `translate` and `scale` with `@starting-style`, plus an animated blurred `::backdrop` and `overlay` / `display` `allow-discrete` | Instant |
| **Circular menu reveal** | Mobile menu | `clip-path: circle()` grows from the menu button; links stagger in (`.sheet-item`) | Instant |
| **Radar** | About, "Where we serve" | Concentric rings, `ping-soft`, a rotating conic sweep | Reduced motion: still |
| **Button micro-interactions** | All `.btn` | Light sweep, arrow nudge, icon rotate, lift, press scale | — |
| **Scribble underline** | Home hero | `scribble-in` `scale: 0 1 → 1` | — |
| **Form success** | Both forms | `rise-in` plus a green check that pings twice | — |

### 12.3 Reduced motion

`prefers-reduced-motion: reduce` is respected in several layers:

1. **Globally:** all animation and transition durations become `0.001ms`, iteration counts become 1, and smooth scrolling is turned off.
2. **Scroll-driven effects** are wrapped in `@media (prefers-reduced-motion: no-preference)`, so they don't attach at all.
3. **Marquees** become static, scrollable rows and their duplicate tracks are hidden.
4. **The Ken Burns slideshow** shows only the first slide.
5. **View transitions** have zero duration and delay.

---

## 13. Page transitions

Navigating between pages uses **React 19.3's `<ViewTransition>`** on top of the browser's **View Transitions API**. It needs no configuration in the Next.js 16 App Router, because route navigations are transitions.

### 13.1 Directional slides

- [`TLink`](components/site/TLink.tsx) wraps `next/link`. It compares the position of the current route and the target route in `NAV` (Home → About → Services → Testimonials → Join Our Team → Contact Us) and passes `transitionTypes={["nav-forward"]}` or `["nav-back"]` to `<Link>`. Hashes and query strings are ignored when matching, and links to the same page or outside `NAV` get no type.
- [`PageTransition`](components/site/PageTransition.tsx) maps those types to view-transition classes for entering and exiting content:
  - **`nav-forward`:** the old page slides 48 px left and fades out (220 ms), and the new page slides in from 64 px right (650 ms, expo easing).
  - **`nav-back`:** the mirror image.
  - **No type** (navigations without a direction, e.g. from a link to a route outside `NAV`): the old page fades up (200 ms) and the new page rises in (600 ms).
- Exit and enter overlap (the enter starts at 60 ms), so **no blank frame appears** between pages.

### 13.2 Persistent and shared elements

- The **root** layout swaps instantly (`::view-transition-old/new(root) { animation: none }`). Only page content animates.
- The **header** has `view-transition-name: site-header`. Its old snapshot is hidden and its new one isn't animated, so it stays fixed and visually still above the transition (`z-index: 100`).
- The **active nav pill** is a shared element (`name="nav-pill"`, `share="pill"`). It **morphs** from the previous link to the new one in 0.55 s.
- `::view-transition { pointer-events: none }` keeps the transition overlay from blocking clicks.

Browsers without View Transitions support navigate normally, without animation.

---

## 14. Performance

### 14.1 Delivery

- **Fully static:** every route is prerendered and served from the CDN.
- **Fonts are self-hosted** by `next/font`, and Fraunces loads only its weight axis.
- **Few client bundles:** see [§5.4](#54-keeping-client-bundles-small). There is no animation library; the only UI dependency is `lucide-react`, whose icons are tree-shaken.

### 14.2 Images

- **AVIF first, then WebP** (`images.formats`).
- **Allowed qualities:** 75, 85 and 90 (`images.qualities`).
- **`deviceSizes` capped at 1920 px** instead of the default 3840. As AVIF, every candidate a browser picks is already well under 100 KB, and `srcset` attributes get shorter.
- **Static imports** give every image intrinsic dimensions (no layout shift) and build-time blur placeholders.
- **`Img` renders a plain `<img>`**, so there is no client component to hydrate per image, and its `src` fallback is a mid-size file ([§8.1](#img--componentsuiimgtsx)).
- **LCP images** (home, contact and services heroes) use `preload` and `fetchPriority="high"`. Other above-the-fold photos load eagerly; everything else loads lazily. The second and third Ken Burns slides use `fetchPriority="low"`.
- **`EagerImg`** keeps hero preloads out of the RSC payload, so **prefetching a link doesn't download the target page's hero photo**.
- Each image has accurate `sizes` hints for its layout.

### 14.3 Rendering work

- **`defer-render`** (`content-visibility: auto`) is applied to below-the-fold sections and the footer. The browser skips their style, layout and paint, including the decorative animations inside them, until they approach the viewport. The first render and every web-font swap then only lay out what is on screen.
  - `--defer-h` is the height assumed before a section first renders; it is set per section and per breakpoint (e.g. `[--defer-h:80rem] lg:[--defer-h:60rem]`). `auto` remembers the real height afterwards.
  - Paint containment clips overflow, so `defer-render` is **only used on sections that stay inside their box and have no sticky children**. Sections with sticky sidebars (About commitment, Services home care, Employment apply) and the pinned services track deliberately don't use it.
- **Compositor-friendly animation:** effects use `transform`, `translate`, `scale`, `opacity` and `clip-path`. The header's scroll effect animates only an overlay's opacity.
- **Scroll effects are CSS scroll timelines**, not scroll listeners, so they run off the main thread.
- **One `IntersectionObserver`** handles every reveal, and DOM-mutation rescans are batched to one per frame.
- `BackToTop` uses an `IntersectionObserver` instead of a scroll timeline, which delayed first paint by about 160 ms at 4× CPU throttling.
- `OpenStatus` caches its `Intl.DateTimeFormat`.
- The testimonial SVG sprite removes about 10 KB of repeated markup.

---

## 15. SEO and discoverability

### 15.1 Per-page metadata

`pageMeta({ title, description, path })` in [lib/seo.ts](lib/seo.ts) returns **complete** metadata for a page:

- `title: { absolute }`, a full, hand-written title for each page (the root template `%s | Mourning Dove Home Care` isn't applied).
- `description`.
- `alternates.canonical`, the page path resolved against `metadataBase` (`SITE_URL`).
- **Open Graph:** title, description, URL, site name, `website` type, `en_US` locale and the share image.
- **Twitter:** `summary_large_image` card with title, description and image.

In Next.js, a page's `openGraph` object *replaces* its parent's rather than merging with it. That is why every field, including the image, is set per page instead of inherited.

| Page | Title | Description (summary) |
| --- | --- | --- |
| `/` | Mourning Dove Home Care \| Home Care in Blue Bell, PA | Compassionate, personalized home care in Blue Bell and Montgomery County… |
| `/about` | About Mourning Dove Home Care \| Montgomery County, PA | Home care provider based in Montgomery County… |
| `/services` | Home Care & ODP Services \| Mourning Dove Home Care | Non-skilled, specialized dementia and post-operative care, supported employment, ODP… |
| `/testimonials` | Client Testimonials \| Mourning Dove Home Care | Google reviews from families and clients… |
| `/employment` | Home Care Jobs in Montgomery County, PA \| Mourning Dove | Competitive pay, choose jobs, growth, 401k. Apply online… |
| `/contact-us` | Contact Mourning Dove Home Care \| Blue Bell, PA | Phone, address and hours |

**Share image:** [public/og-image.jpg](public/og-image.jpg), 1200 × 630, with the alt text *"Mourning Dove Home Care — Quality Care is the Best Care. Home care in Blue Bell & Montgomery County, PA."*

### 15.2 Global metadata — [app/layout.tsx](app/layout.tsx)

- `metadataBase`, the default title and title template, and `applicationName`.
- Default Open Graph (site name, type, locale) and Twitter card.
- `formatDetection: { telephone: false }`, which stops iOS from auto-linking numbers; phone links are written explicitly.
- `robots: noindex, nofollow` on **Vercel preview deployments**.
- Google Search Console verification when `GOOGLE_SITE_VERIFICATION` is set.
- **Viewport:** `width=device-width`, `initialScale: 1`, `themeColor: #fbf8f3` (cream).
- `<html lang="en-US">`.

### 15.3 Structured data (JSON-LD)

**Site-wide** (in `<head>` on every page, from `businessJsonLd`), an `@graph` containing:

- **`WebSite`** (`@id: {SITE_URL}/#website`): name, URL and a publisher reference to the business.
- **`LocalBusiness`** (`@id: {SITE_URL}/#business`): legal name, description, URL, logo (`/images/logo.png`), image (OG image), E.164 telephone, email, a full `PostalAddress`, `areaServed` (Montgomery County, Pennsylvania), **`openingHoursSpecification`** (Mon–Thu 09:00–17:00, Fri 09:00–12:30), a **`knowsAbout`** list of 11 services and specialities, and **`sameAs`** with the Instagram and Facebook URLs.

**Per page:** each `FaqSection` outputs a **`FAQPage`** with `Question` / `Answer` pairs (About, Employment and Contact).

**Safe serialization:** `jsonLdHtml()` escapes `<` as `<`, so content can never close the `<script>` tag early.

### 15.4 Sitemap — [app/sitemap.ts](app/sitemap.ts)

Lists `/`, `/about`, `/services`, `/testimonials`, `/employment` and `/contact-us` as absolute URLs, each with `lastModified: 2026-10-19`. **Update that date when page content changes** (see [§20](#20-common-editing-tasks)).

### 15.5 `robots.txt` — [app/robots.ts](app/robots.ts)

- **Production:** allows all crawlers, **blocks `PetalBot`** completely, sets `crawlDelay: 10` for `dotbot` and `AhrefsBot`, and points to `{SITE_URL}/sitemap.xml`.
- **Preview deployments:** `Disallow: /` for every user agent.

### 15.6 `llms.txt` — [app/llms.txt/route.ts](app/llms.txt/route.ts)

A static, plain-text (`text/plain; charset=utf-8`) file at `/llms.txt`, following the emerging **llms.txt** convention for AI answer engines. It is generated at build time from the same data as the site, so it can't drift, and contains:

- A one-paragraph business summary.
- Office address, phone, email and hours.
- A linked list of the six pages, each with a one-line description.
- A summary of services, including the non-skilled services and ODP-eligible conditions read directly from `lib/content.ts`.

### 15.7 On-page SEO practices

- One `<h1>` per page, with sections labelled by their headings (`aria-labelledby`).
- **Descriptive anchor text:** the hidden `sr` words in navigation and the keyword-rich footer links ([§7.2](#72-header--componentssiteheadertsx), [§7.3](#73-footer--componentssitefootertsx)).
- **Internal links** from FAQ answers and the services track to deep anchors on `/services`.
- Descriptive `alt` text on content images; decorative images have `alt=""` or are inside `aria-hidden` containers.
- The first FAQ item is rendered open, so its answer text is visible on the page.
- **301 redirect** from the legacy Wix URL `/fullscreen-page-1` to `/`.
- `Img`'s `src` fallback gives crawlers a reasonably sized image.

---

## 16. Accessibility

- **Skip link** to `#main`, shown on keyboard focus.
- **Landmarks:** `<header>`, `<nav aria-label="Main">`, `<nav aria-label="Mobile">`, `<nav aria-label="On this page">`, a single `<main id="main">` and `<footer>`. Sections are labelled by their headings, and sections without headings have an `aria-label`.
- **`aria-current="page"`** on the active navigation link.
- **Descriptive link names** that still contain their visible labels (the `NAV[].sr` pattern, WCAG 2.5.3).
- **Native `<dialog>`** with `showModal()` for the mobile menu and the review viewer. This gives focus trapping, Escape to close, inert background content and correct roles. Both have accessible names, and both close on a backdrop click.
- **Visible focus:** a global `:focus-visible` outline. Glow cards light up on `:focus-within`, hover-only reveals (services track, ODP cards) also respond to keyboard focus, and the radio pills show a focus ring.
- **Forms:** every control has an associated `<label>`; required fields are marked visually and with the `required` attribute; the employment positions are a real radio group inside a `<fieldset>` / `<legend>`; errors use `role="alert"`; success uses `role="status"`; `autocomplete` hints are set; and `CopyEmail` announces its confirmation through `aria-live`.
- **Decorative content hidden from assistive technology:** auroras, the dot grid, the radar, the giant wordmark, duplicate marquee tracks (`aria-hidden` and `inert`), sparkle icons, watermark numerals and the parallax strip.
- **Icon-only buttons** have `aria-label` or `sr-only` text (menu, close, call, back to top, social links).
- **`aria-expanded`** on the ODP card toggles.
- **Reduced-motion support** throughout ([§12.3](#123-reduced-motion)).
- **Content without JavaScript:** reveal-hidden styles apply only under `.js`, forms submit by progressive enhancement, and `OpenStatus` shows a neutral label in the server-rendered HTML.
- `lang="en-US"` on `<html>`.

---

## 17. Security

[next.config.ts](next.config.ts) applies these headers to **every route** (`source: "/(.*)"`):

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | See below |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), browsing-topics=()` |

**Content Security Policy:**

```
default-src 'self';
script-src 'self' 'unsafe-inline' [+ 'unsafe-eval' in dev] [+ https://vercel.live on previews];
style-src 'self' 'unsafe-inline' [+ https://vercel.live on previews];
img-src 'self' blob: data: [+ https://vercel.live https://vercel.com on previews];
font-src 'self' [+ https://vercel.live https://assets.vercel.com on previews];
connect-src 'self' [+ https://vercel.live wss://ws-us3.pusher.com on previews];
frame-src 'self' [+ https://vercel.live on previews];
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
[upgrade-insecure-requests on Vercel]
```

Design notes:

- **No nonces.** Following the Next.js CSP guide, nonces would force every page into dynamic rendering. Pages stay statically prerendered and CDN-cached instead. `'unsafe-inline'` is allowed for scripts because Next's hydration payload, the `js` flag script and the JSON-LD are all inline.
- **Everything is first-party.** Fonts are self-hosted, images are local, and there is no analytics or third-party script, so no other origins are allowed. The only exception is the Vercel toolbar on preview deployments.
- **Clickjacking protection** from both `frame-ancestors 'none'` and `X-Frame-Options: DENY`.
- **External links** (Google Maps, Instagram, Facebook) use `target="_blank"` with `rel="noreferrer noopener"`.
- **JSON-LD** is escaped to prevent script injection ([§15.3](#153-structured-data-json-ld)).
- **Form input** is trimmed and validated on the server ([§9.3](#93-how-submission-works)).

> If you add analytics, embedded maps, external fonts or a third-party form service, **update the CSP** for its origins, or the browser will block it.

---

## 18. Images and static assets

All photos live in `public/images/` and are statically imported (mostly through [lib/images.ts](lib/images.ts)), so the Next.js image optimizer serves them as AVIF or WebP. The large originals are never sent to visitors.

| File | Map key | Used on |
| --- | --- | --- |
| `logo-symbol.png` | `logoSymbol` | Header and mobile menu (imported directly by `Logo`) |
| `logo-mark.png` | `logoMark` | Footer |
| `logo.png` | — | JSON-LD `logo` (referenced by URL) |
| `home-caregiver.jpg` | `homeCaregiver` | Home hero (LCP) |
| `home-hero.jpg` | `homeHero` | Home hero inset photo |
| `home-supportive-hands.jpg` | `homeHands` | Home bento |
| `about-1.jpg`, `about-2.jpg`, `about-3.jpg` | `about1–3` | About fan; `about2` is also the commitment sidebar photo |
| `services-1.jpeg`, `services-2.jpg`, `services-3.jpg` | `services1–3` | Services Ken Burns hero and home services track; `services3` is also an employment hero photo |
| `services-woman-gardening.jpg` | `gardening` | Supported employment section, home track card 03 |
| `odp-friends-popsicles.jpg` | `popsicles` | ODP card, home track card 04 |
| `odp-group-dance.jpg`, `odp-learning-together.jpeg` | `dance`, `learning` | ODP cards (imported directly by `lib/odp.ts`) |
| `testimonials-1.jpg`, `-2.jpg`, `-3.jpeg` | `testimonials1–3` | Testimonials parallax strip |
| `employment-1.jpg` | `employment1` | Employment hero |
| `employment-friends.jpg` | `employmentFriends` | Employment application sidebar |
| `contact-nurse-greeting.jpg` | `contactNurse` | Contact hero (LCP) |
| `partner-pa-health-wellness.jpg` | `partnerPa` | Contact partners |
| `partner-upmc-health-plan.jpg` | `partnerUpmc` | Contact partners, supported employment badge |
| `public/og-image.jpg` | — | Open Graph and Twitter share image, JSON-LD `image` |
| `app/icon.png` | — | Favicon (500 × 500) |

Housekeeping notes:

- `icon-facebook.png`, `icon-instagram.png`, `icon-mail.png` and `icon-phone.png` in `public/images/` are **not referenced** anywhere; they come from the old site. The footer uses inline SVGs and lucide icons instead.
- The `logoSymbol`, `dance` and `learning` entries in `lib/images.ts` are unused, because client-rendered code imports those files directly. This costs nothing at runtime, since only Server Components import the map.
- Several originals are large (up to about 17 MB). Visitors never download them, but they make the repository heavy and slow down builds that generate blur placeholders. Consider resizing the originals to about 2400 px.

---

## 19. Configuration files

| File | Purpose |
| --- | --- |
| [next.config.ts](next.config.ts) | Image formats, qualities and `deviceSizes`; security headers and CSP ([§17](#17-security)); the `/fullscreen-page-1 → /` 301 redirect. |
| [tsconfig.json](tsconfig.json) | Strict TypeScript, `moduleResolution: bundler`, `jsx: react-jsx`, the Next.js plugin and the **`@/*` → project root** path alias. |
| [eslint.config.mjs](eslint.config.mjs) | ESLint 9 flat config: `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`; ignores `.next/`, `out/`, `build/` and `next-env.d.ts`. |
| [postcss.config.mjs](postcss.config.mjs) | Registers `@tailwindcss/postcss` (Tailwind v4). |
| [app/globals.css](app/globals.css) | All Tailwind configuration (`@theme`, `@utility`, `@source inline`) and custom CSS. |
| [.gitignore](.gitignore) | Ignores `node_modules`, `.next`, `out`, `build`, `.env*`, `.vercel`, `*.tsbuildinfo`, `next-env.d.ts`, logs and `*.pem`. |
| [AGENTS.md](AGENTS.md) | Notes for AI coding agents. Written and re-added by `next dev`. |

---

## 20. Common editing tasks

| Task | Where |
| --- | --- |
| Change phone, email, address, social links | [lib/site.ts](lib/site.ts). Update `PHONE`, `PHONE_HREF` **and** `PHONE_E164` together. |
| Change office hours | Hours are defined in five places: `HOURS` in [lib/site.ts](lib/site.ts) (drives `OpenStatus`, the footer, the contact page and `llms.txt`), `openingHoursSpecification` in [lib/seo.ts](lib/seo.ts), `HOURS_TEXT` in [lib/content.ts](lib/content.ts) (FAQ answers), the home hero glass card in [app/(site)/page.tsx](app/(site)/page.tsx), and the meta `description` in [app/(site)/contact-us/page.tsx](app/(site)/contact-us/page.tsx). |
| Edit page copy | [lib/content.ts](lib/content.ts) for shared copy; otherwise the page's `page.tsx`. |
| Add or edit a non-skilled service | `NON_SKILLED` in [lib/content.ts](lib/content.ts). The icon name must exist in [components/ui/Icon.tsx](components/ui/Icon.tsx). Add a matching entry to `CARD_TONES` / `ICON_TONES` in the services page (the arrays have 7 entries), and consider updating `knowsAbout` in [lib/seo.ts](lib/seo.ts). |
| Add a testimonial | `TESTIMONIALS` in [lib/testimonials.ts](lib/testimonials.ts). The desktop wall's columns refer to reviews by index, so update `COLUMNS` in [TestimonialWall.tsx](components/sections/TestimonialWall.tsx) to include the new one. |
| Add or remove an open position | `POSITIONS` in [lib/content.ts](lib/content.ts). The hero's "N roles open" count, the marquee and the application form update automatically. Also update the `EMPLOYMENT_FAQ` answer. |
| Edit FAQs | `ABOUT_FAQ`, `EMPLOYMENT_FAQ`, `CONTACT_FAQ` in [lib/content.ts](lib/content.ts). The JSON-LD updates automatically. |
| Add a page | Create `app/(site)/<slug>/page.tsx` that exports `metadata = pageMeta({...})` and wraps its content in `<PageTransition>`. Add it to `NAV` in [lib/site.ts](lib/site.ts) (in the position that sets its transition direction), to `ROUTES` in [app/sitemap.ts](app/sitemap.ts), to `FOOTER_LINKS` in [Footer.tsx](components/site/Footer.tsx) and to [app/llms.txt/route.ts](app/llms.txt/route.ts). Use `TLink` for internal links. |
| Add an image | Put it in `public/images/`, add a static import to [lib/images.ts](lib/images.ts), and render it with `Img` (or `EagerImg` if it is above the fold). In client components, import the file directly. |
| Add an animated reveal | Add `data-reveal="up"` or `"scale"`, plus an optional delay class such as `[--d:120ms]` (0–500 ms in 10 ms steps). |
| Mark content as updated for search engines | Bump `lastModified` in [app/sitemap.ts](app/sitemap.ts). |
| Move to a custom domain | Set `NEXT_PUBLIC_SITE_URL` in Vercel and redeploy. |

---

## 21. Deployment

The site is built for **Vercel**:

1. Import the repository into Vercel. The framework (Next.js) is detected automatically, and no build settings need changing.
2. *(Optional)* Set `NEXT_PUBLIC_SITE_URL` once a custom domain is attached, and `GOOGLE_SITE_VERIFICATION` for Search Console.
3. Every push builds a deployment:
   - **Production** deployments are indexable and serve the full `robots.txt` and sitemap.
   - **Preview** deployments are automatically `noindex`, `robots.txt` blocks all crawlers, and the CSP allows the Vercel toolbar.

The output is static apart from the form Server Action, so it can also be self-hosted with `npm run build && npm run start` on any Node.js ≥ 20.9 host. Off Vercel, the image optimizer runs in the Node server, and `upgrade-insecure-requests` and the preview behaviour don't apply, because they depend on `VERCEL` / `VERCEL_ENV`.

---

## 22. Browser support and progressive enhancement

The site works in all modern browsers. Newer platform features add polish where a browser supports them and are skipped where it doesn't:

| Feature | Used for | Without support |
| --- | --- | --- |
| Scroll-driven animations (`animation-timeline: scroll()` / `view()`) | Progress bar, header settle, parallax, clip scrub, word reveal, stacking cards, pinned horizontal scroll, timeline | Guarded by `@supports`; static layouts, a scroll-snap carousel for the services track |
| View Transitions API + `view-transition-class` (Chromium 125+, recent Safari/Firefox) | Page slides, nav pill morph | Normal navigation |
| `@starting-style`, `transition-behavior: allow-discrete` | Dialog and menu open animations | Dialogs open instantly |
| `::details-content`, `interpolate-size` | Animated accordions | Accordions open instantly |
| `content-visibility: auto` | Deferred rendering | Sections render normally |
| `backdrop-filter` | Glass surfaces | Translucent backgrounds |
| JavaScript disabled | — | All content visible; forms still submit; status badge shows "Office hours" |

---

## 23. Known limitations and pre-launch checklist

- [ ] **Connect form submissions to a delivery channel.** `submitForm` in [app/actions.ts](app/actions.ts) only logs submissions to the server console. Connect it to email (e.g. Resend or SendGrid), a CRM or a database, and update the CSP if the integration runs in the browser.
- [ ] **Add spam protection** to both forms (e.g. a honeypot field, rate limiting or a CAPTCHA). There is none yet.
- [ ] **Have the business owner review** the `blurb` copy on the seven non-skilled service cards in [lib/content.ts](lib/content.ts).
- [ ] **Consider validating more fields on the server** (e.g. phone format, date sanity). Only email, and phone for applications, are checked.
- [ ] **Set `NEXT_PUBLIC_SITE_URL`** when a custom domain goes live, and add `GOOGLE_SITE_VERIFICATION` if Search Console verifies by meta tag.
- [ ] **Keep office hours in sync** in the five places they are defined ([§20](#20-common-editing-tasks)).
- [ ] **Bump the sitemap `lastModified`** when content changes.
- [ ] *(Optional)* Add a branded 404 page (`app/not-found.tsx`); Next.js's default is used now.
- [ ] *(Optional)* Remove the unused `icon-*.png` files and resize the very large original photos.
- [ ] *(Optional)* Add automated tests. The project has none; quality checks are TypeScript (`next build`) and ESLint (`npm run lint`).

---

## 24. Project history

| Commit | Date | Summary |
| --- | --- | --- |
| `9a14ec5` | 2026-10-16 | Initial commit from Create Next App |
| `5a2bb82` | 2026-10-16 | Original version: the redesign, with all pages migrated from the Wix site |
| `8cc9782` | 2026-10-17 | Version 1.1 |
| `c7e0674` | 2026-10-18 | SEO optimization |
| `98ed9fb` | 2026-10-18 | SEO optimization II |
| `7d1900d` | 2026-10-19 | Mobile version fixes |
| `2a534a0` | 2026-10-19 | SEO optimization III |

---

© Mourning Dove Home Care LLC. All rights reserved.
