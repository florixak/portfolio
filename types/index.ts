import { FILTERS } from "@/constants";

export type Project = {
  slug: string;
  title: string;
  featured: boolean;
  priority: number;
  status: "completed" | "active" | "archived";
  year: number;
  shortDescription: string;
  description: string;
  stack: string[];
  highlights: string[];
  thumbnail: `/projects/${string}/${string}.webp`;
  github?: string;
  demo?: string;
  screenshots?: `/projects/${string}/${string}.webp`[];
  caseStudy?: {
    motivation: string;
    challenges: string[];
    architecture: string[];
    lessons: string[];
  };
};

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
