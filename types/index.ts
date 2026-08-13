import { FILTERS } from "@/constants";

// Locale-invariant project fields. Prose lives under `projectEntries` in
// `messages/*.json` and is merged via `localizeProject` / `getLocalizedProjects`.
export type ProjectMeta = {
  slug: string;
  featured: boolean;
  priority: number;
  status: "completed" | "active" | "archived";
  year: number;
  stack: string[];
  thumbnail: `/projects/${string}/${string}.webp`;
  github?: string;
  demo?: string;
  screenshots?: `/projects/${string}/${string}.webp`[];
};

export type ProjectCopy = {
  title: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  caseStudy?: {
    motivation: string;
    challenges: string[];
    architecture: string[];
    lessons: string[];
  };
};

export type Project = ProjectMeta & ProjectCopy;

// Locale-invariant identity fields. Role, tagline, location, university,
// and degree live in the `profile` namespace of `messages/*.json`.
export type Profile = {
  name: string;
  availableForWork: boolean;
  email: string;
};

export type Social = {
  label: string;
  href: string;
};

export type Experience = {
  year: string;
  title: string;
  company?: string;
  position?: string;
  description: string;
  highlights: string[];
};

export type TechStackCategory = {
  label: string;
  items: TechStack[];
};

type TechStack = {
  label: string;
};

export type Filter = (typeof FILTERS)[number];

export type TerminalSection = {
  label: string;
  lines: string[];
};
