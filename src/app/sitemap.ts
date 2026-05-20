import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://moefinancial.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
