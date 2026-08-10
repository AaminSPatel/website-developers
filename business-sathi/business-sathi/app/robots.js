import { brand } from "@/lib/siteData";

export default function robots() {
  const base = brand.website.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
