import { Profile } from "@/types";

export const profile: Profile = {
  name: "Ondřej Pták",
  role: "Full-Stack Engineer",
  tagline: "Building scalable full-stack applications",
  description: [
    "Software Engineering student from the Czech Republic focused on building interactive products and modern web experiences.",
    "Focused on creating scalable applications, polished user interfaces and turning ideas into real products.",
    "Currently studying at the University of West Bohemia in Pilsen, Czech Republic.",
  ],
  about: {
    intro:
      "Focused on scalable web applications, polished interfaces and turning ideas into real products.",
    quote:
      "I enjoy building projects that combine clean interfaces, thoughtful engineering and practical value.",
    whoIAm: [
      "I'm a Software Engineering student from the Czech Republic focused on full-stack web development.",
      "Most of my work revolves around React, Next.js and Spring Boot, while continuously expanding into architecture, backend systems and developer tooling.",
    ],
    currently: [
      {
        label: "Studying",
        items: [
          "Software Engineering",
          "University of West Bohemia",
          "Pilsen, Czech Republic",
        ],
      },
      {
        label: "Building with",
        items: [
          "React & Next.js",
          "TanStack Start",
          "Spring Boot",
          "PostgreSQL & Redis",
        ],
      },
      {
        label: "Open to",
        items: ["Internships", "Collaboration", "Full-stack roles"],
      },
    ],
    outsideOfCode: [
      "Many of my personal projects are inspired by communities, games and ideas that combine design and technology — like the OMORI Headspace and OMORI Wordle projects.",
    ],
    interests: [
      "Game communities & interactive fiction",
      "Creative side projects",
      "Design systems & UI craft",
      "Open source tooling",
    ],
  },
  location: "Pilsen, Czech Republic",
  university: "University of West Bohemia",
  availableForWork: true,
  email: "ptakondrej@seznam.cz",
};
