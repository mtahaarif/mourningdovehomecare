import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
const isPreview = process.env.VERCEL_ENV === "preview";
const onVercel = Boolean(process.env.VERCEL);

/*
 * Content-Security-Policy without nonces (see the Next.js CSP guide): nonces
 * would force every page into dynamic rendering. Pages stay statically
 * prerendered and CDN-cached; inline scripts are allowed because Next's
 * hydration payload is inline. Everything is first-party, so no other
 * origins are allowed, apart from the Vercel toolbar on preview deployments.
 */
const vercelLive = isPreview ? " https://vercel.live" : "";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${vercelLive}`,
  `style-src 'self' 'unsafe-inline'${vercelLive}`,
  `img-src 'self' blob: data:${isPreview ? " https://vercel.live https://vercel.com" : ""}`,
  `font-src 'self'${isPreview ? " https://vercel.live https://assets.vercel.com" : ""}`,
  `connect-src 'self'${isPreview ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
  `frame-src 'self'${vercelLive}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(onVercel ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    // The original Wix site exposed an empty Pro Gallery viewer at this URL.
    return [{ source: "/fullscreen-page-1", destination: "/", permanent: true }];
  },
};

export default nextConfig;
