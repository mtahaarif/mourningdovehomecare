import type { MetadataRoute } from "next";
import { IS_PREVIEW, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments duplicate production: keep every crawler out.
  if (IS_PREVIEW) return { rules: [{ userAgent: "*", disallow: "/" }] };

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "PetalBot", disallow: "/" },
      { userAgent: ["dotbot", "AhrefsBot"], crawlDelay: 10 },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
