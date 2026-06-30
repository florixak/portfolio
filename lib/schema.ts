import { profile } from "@/data/profile";
import { absoluteUrl, sameAs, siteUrl } from "@/lib/seo";
import type { Project } from "@/types";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
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
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: profile.name,
  url: siteUrl,
  description: profile.tagline,
  author: {
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
  },
};

export const projectSchema = (project: Project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: project.title,
  description: project.shortDescription,
  url: absoluteUrl(`/projects/${project.slug}`),
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

export const projectBreadcrumbSchema = (project: Project) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: absoluteUrl("/projects"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: project.title,
      item: absoluteUrl(`/projects/${project.slug}`),
    },
  ],
});
