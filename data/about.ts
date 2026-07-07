import { About } from "@/types";
import { profile } from "./profile";

export const about: About = {
  intro:
    "Full-stack Engineer and Software Engineering student. I build web applications with attention to architecture, interface quality, and getting products into production.",
  quote:
    "I like projects where careful engineering and a clear interface meet something people will actually use.",
  whoIAm: [
    "I'm a software engineering student who builds interactive products and web experiences.",
    "Most of my work sits in React, Next.js, and Spring Boot, and I spend a growing share of my time on backend design and system architecture.",
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
        "TanStack Ecosystem",
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
    "Several of my personal projects come from communities and games I've spent time in, including OMORI Headspace and OMORI Wordle.",
  ],
  interests: [
    "Game communities and interactive fiction",
    "Creative side projects",
    "Design systems and UI craft",
    "Open source tooling",
  ],
};
