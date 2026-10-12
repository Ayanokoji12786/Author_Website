import type { MetadataRoute } from "next";
import { sitemapUrls } from "../lib/site-seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapUrls.map((url) => ({ url }));
}
