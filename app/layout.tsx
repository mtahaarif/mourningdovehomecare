import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Figtree } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// Open-licence stand-ins for the Wix-licensed Adobe Caslon Semibold and
// Avenir LT 85 Heavy / 35 Light. next/font downloads and self-hosts them.
// Picked by measured text width: Crimson Pro 600 is within 0.5% of Adobe Caslon
// Semibold, Figtree 700 within 0.8% of Avenir 85 Heavy.
const caslon = Crimson_Pro({ subsets: ["latin"], weight: ["600"], variable: "--font-caslon" });
const avenir = Figtree({ subsets: ["latin"], weight: ["300", "700"], variable: "--font-avenir" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  openGraph: { siteName: SITE_NAME, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Wix serves its mobile layout at a fixed 320px design width; match that on phones.
// React re-inserts the viewport tag during hydration, so keep every copy rewritten.
const mobileViewport = `(function(){try{if(!window.matchMedia('(max-width: 750px)').matches)return;var c='width=320, user-scalable=yes';var fix=function(){document.querySelectorAll('meta[name="viewport"]').forEach(function(m){if(m.getAttribute('content')!==c)m.setAttribute('content',c);});};fix();new MutationObserver(fix).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['content']});}catch(e){}})();`;

const jsonLd = { "@context": "https://schema.org/", "@type": "WebSite", name: SITE_NAME, url: SITE_URL };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${caslon.variable} ${avenir.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {/* Runs after <head> is parsed, so the viewport meta tag already exists. */}
        <script dangerouslySetInnerHTML={{ __html: mobileViewport }} />
        {children}
      </body>
    </html>
  );
}
