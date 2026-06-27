import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";
import { yearToDate } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestProjectYear = Math.max(
    ...projects.map((project) => project.year),
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: yearToDate(latestProjectYear),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: yearToDate(project.year),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
