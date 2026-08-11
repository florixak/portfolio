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

export type AboutCurrentItem = {
  label: string;
  items: string[];
};

// `intro` and `quote` live in the `about` namespace of `messages/*.json`
// since they're translated; the remaining fields stay data-driven.
export type About = {
  whoIAm: string[];
  currently: AboutCurrentItem[];
  outsideOfCode: string[];
  interests: string[];
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  university: string;
  degree: string;
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
