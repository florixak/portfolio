import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { buildLanguageAlternates, localizedUrl } from "@/lib/seo";
import { yearToDate } from "@/lib/utils";

type RouteDefinition = {
  path: string;
  lastModified?: Date;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// Emits one `<url>` entry per locale for every route, each annotated with
// `alternates.languages` (hreflang) so search engines can associate the
// `en`/`cs` versions of the same page with each other.
const toLocalizedEntries = ({
  path,
  lastModified,
  changeFrequency,
  priority,
}: RouteDefinition): MetadataRoute.Sitemap =>
  routing.locales.map((locale) => ({
    url: localizedUrl(path, locale),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: buildLanguageAlternates(path) },
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const latestProjectYear = Math.max(
    ...projects.map((project) => project.year),
  );

  const staticRoutes: RouteDefinition[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    {
      path: "/projects",
      lastModified: yearToDate(latestProjectYear),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  ];

  const projectRoutes: RouteDefinition[] = projects.map((project) => ({
    path: `/projects/${project.slug}`,
    lastModified: yearToDate(project.year),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes].flatMap(toLocalizedEntries);
}
