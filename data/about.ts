import { About } from "@/types";
import { profile } from "./profile";

export const about: About = {
  intro:
    "Focused on scalable web applications, polished interfaces and turning ideas into real products.",
  quote:
    "I enjoy building projects that combine clean interfaces, thoughtful engineering and practical value.",
  whoIAm: [
    "Most of my work revolves around React, Next.js and Spring Boot, while continuously expanding into architecture, backend systems and developer tooling.",
  ],
  currently: [
    {
      label: "Studying",
      items: [profile.degree, profile.university, profile.location],
    },
    {
      label: "Building with",
      items: [
        "React & Next.js",
        "Spring Boot",
        "Drizzle ORM",
        "PostgreSQL",
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
};
