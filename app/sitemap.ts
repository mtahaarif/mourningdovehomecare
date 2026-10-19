import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = ["", "/about", "/services", "/testimonials", "/employment", "/contact-us"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date("2026-10-19") }));
}
