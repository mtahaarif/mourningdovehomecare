import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = ["", "/about", "/services", "/general-4", "/employment", "/contact-us", "/fullscreen-page-1"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date("2026-05-20") }));
}
