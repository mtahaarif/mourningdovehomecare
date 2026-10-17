import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // The original Wix site exposed an empty Pro Gallery viewer at this URL.
    return [{ source: "/fullscreen-page-1", destination: "/", permanent: true }];
  },
};

export default nextConfig;
