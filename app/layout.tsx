import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { IS_PREVIEW, SITE_NAME, SITE_URL } from "@/lib/site";
import { businessJsonLd, jsonLdHtml } from "@/lib/seo";
import "./globals.css";

// Only the weight axis is loaded: the extra SOFT/opsz axes roughly doubled
// the font payload on the critical path for a barely visible difference.
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  // Preview deployments duplicate production, so keep them out of search results.
  ...(IS_PREVIEW ? { robots: { index: false, follow: false } } : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf8f3",
};

// Runs before first paint: lets CSS hide not-yet-revealed elements only when
// JavaScript is available to reveal them again.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${fraunces.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(businessJsonLd)} />
      </head>
      <body>{children}</body>
    </html>
  );
}
