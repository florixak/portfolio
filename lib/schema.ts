import { profile } from "@/data/profile";
import { routing, type Locale } from "@/i18n/routing";
import { localizedUrl, sameAs, siteUrl } from "@/lib/seo";
import type { Project } from "@/types";

type LocalizedProfileCopy = {
  role: string;
  tagline: string;
};

export const personSchema = ({ role }: Pick<LocalizedProfileCopy, "role">) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: role,
  url: siteUrl,
  sameAs,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pilsen",
    addressCountry: "CZ",
  },
  knowsAbout: [
    "Full-stack development",
    "Next.js",
    "React",
    "Spring Boot",
    "TypeScript",
  ],
});

export const websiteSchema = ({
  tagline,
}: Pick<LocalizedProfileCopy, "tagline">) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: profile.name,
  url: siteUrl,
  description: tagline,
  author: {
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
  },
});

export const projectSchema = (
  project: Project,
  locale: Locale = routing.defaultLocale,
) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: project.title,
  description: project.shortDescription,
  url: localizedUrl(`/projects/${project.slug}`, locale),
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  ...(project.demo ? { downloadUrl: project.demo } : {}),
  ...(project.stack.length > 0 ? { programmingLanguage: project.stack } : {}),
  datePublished: `${project.year}-01-01`,
  author: {
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
  },
});

export const projectBreadcrumbSchema = (
  project: Project,
  locale: Locale = routing.defaultLocale,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: localizedUrl("/", locale),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: localizedUrl("/projects", locale),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: project.title,
      item: localizedUrl(`/projects/${project.slug}`, locale),
    },
  ],
});
