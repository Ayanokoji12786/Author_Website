import type { MetadataRoute } from "next";
import { crawlerRules, site } from "../lib/site-seo";
export default function robots(): MetadataRoute.Robots {
  return { rules: crawlerRules, sitemap: `${site.url}sitemap.xml` };
}
